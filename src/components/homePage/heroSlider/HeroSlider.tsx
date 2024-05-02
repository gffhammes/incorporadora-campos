import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import { defaultSvgProps } from "../../../constants/defaultSvgProps";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Autoplay from "embla-carousel-autoplay";
import { Slide } from "./Slide";
import { THomeBanners } from "../../../interfaces/homeBanner";
import { getNewImageUrl } from "../../../helpers/utils";
import { TNewBannerImage } from "../../../interfaces/strapiLocal";
import { bolshoi } from "../../../data/enterprises/bolshoi";

const defaultButtonProps = {
  zIndex: 500,
  backgroundColor: "transparent",
  border: 0,
  height: "5vw",
  width: "5vw",
  minHeight: "1.5rem",
  minWidth: "1.5rem",
  maxHeight: "3rem",
  maxWidth: "3rem",
  borderRadius: "20rem",
  cursor: "pointer",
  position: "absolute",
};

const sxEmbla = {
  overflowX: "hidden",
  overflowY: "visible",
  height: "100%",
};

const sxEmblaContainer = {
  display: "flex",
  height: "100%",
};

const sxEmblaSlide = {
  position: "relative",
  flex: "0 0 100%",
  marginRight: 0,
  transitionProperty: "filter, box-shadow",
  transitionDuration: "1s",
  transitionTimingFunction: "ease",
  width: "100%",
  aspectRatio: "2 / 1",
};

export const HeroSlider = () => {
  const autoplay = Autoplay({ delay: 5000 });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay]);
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [dots, setDots] = useState<any[]>([]);
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    const arr: any[] = [];
    for (let i = 0; i < banners.length; i++) {
      arr.push({ active: false });
    }
    arr[0].active = true;
    setDots(arr);
  }, []);

  useEffect(() => {
    setDots((dots): any[] =>
      dots.map((dot, index) =>
        index === selectedSlide ? { active: true } : { active: false }
      )
    );
  }, [selectedSlide]);

  const changeSelectedSlide = (newSlideIndex) => {
    emblaApi?.scrollTo(newSlideIndex);
  };

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  emblaApi?.on("select", () => {
    setSelectedSlide(emblaApi.selectedScrollSnap());
  });

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{ height: "100%", width: "100%" }}
    >
      <Box
        sx={{ ...defaultButtonProps, marginLeft: "10vw", left: 0 }}
        onClick={scrollPrev}
      >
        <ArrowBackIosIcon {...defaultSvgProps} sx={{ color: "white" }} />
      </Box>
      <Box sx={{ width: "100%", height: "100%" }}>
        <Box sx={sxEmbla}>
          <Box sx={{ height: "100%" }} ref={emblaRef}>
            <Box sx={sxEmblaContainer}>
              {banners.map((slide, index) => (
                <Box sx={sxEmblaSlide} key={index}>
                  <Slide
                    bgImage={getNewImageUrl(
                      slide.attributes.empreendimento.data.attributes
                        .Banner as TNewBannerImage
                    )}
                    logo={
                      slide.attributes.empreendimento.data.attributes.Logo?.data
                        ?.attributes.url as string
                    }
                    enterpriseName={
                      slide.attributes.empreendimento.data.attributes
                        .Nome as string
                    }
                    text={slide.attributes.Texto}
                    buttonText={slide.attributes.TextoBotao}
                    href={
                      slide.attributes.empreendimento.data.attributes
                        .Slug as string
                    }
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{ ...defaultButtonProps, marginRight: "10vw", right: 0 }}
        onClick={scrollNext}
      >
        <ArrowForwardIosIcon {...defaultSvgProps} sx={{ color: "white" }} />
      </Box>
      {md && (
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            bottom: "0",
            left: "50%",
            transform: "translate(-50%, -2rem)",
            gap: "1rem",
          }}
        >
          {dots.map((dot, index) => (
            <Box
              onClick={() => changeSelectedSlide(index)}
              bgcolor="white"
              key={index}
              sx={{
                transition: ".2s ease all",
                height: ".5rem",
                width: ".5rem",
                borderRadius: "1rem",
                cursor: "pointer",
                filter: dot.active ? "opacity(.8)" : "opacity(.25)",
              }}
            />
          ))}
        </Box>
      )}
    </Stack>
  );
};

const banners: THomeBanners = [
  {
    id: 5,
    attributes: {
      Texto: "PRÉ LANÇAMENTO NO AMÉRICA",
      TextoBotao: "SAIBA MAIS",
      empreendimento: {
        data: bolshoi,
      },
    },
  },
  {
    id: 1,
    attributes: {
      Texto: "LANÇAMENTO NO AMÉRICA",
      TextoBotao: "SAIBA MAIS",
      empreendimento: {
        data: {
          id: 1,
          attributes: {
            Nome: "Piazza San Pietro",
            Slug: "piazza-san-pietro",
            Area: "Área privativa de 108 a 126m²",
            Quartos: "2 ou 3 suítes",
            QteBlocos: 1,
            QteAndares: 8,
            QteApartamentos: 17,
            Status: "Em obra",
            TextoPlanta:
              '<ul style="list-style-position: inside;">\n      <li>Torre única | 8 andares | 17 aptos. | 3 por andar</li>\n      <li>7 Aptos. tipo 1 com 126m² privativos | 3 suítes</li>\n      <li>10 Aptos. tipo 2 e 3 com 108m² privativos | 2 suítes e 1 dormitório</li>\n      <li>1 cobertura plana com 168m² privativos</li>\n      <li>1 cobertura plana com 173m² privativos</li>\n      <li>Sacada com churrasqueira a carvão</li>\n      <li>Duas vagas de garagem</li>\n      <li>Ambientes integrados nos apartamentos</li>\n      <li>Infraestrutura para sistema de segurança</li>\n      <li>Infraestrutura para refrigeração em todos os cômodos</li>\n      <li> Empreendimento premiado com o Selo Casa Azul da Caixa</li>\n    </ul>\n    <br/>\n    <strong style="color: #1A47BC;">ENTREGA PREVISTA MAIO 2024</strong>',
            TituloPagina:
              "Inspirado na praça de São Pedro, na cidade do Vaticano:",
            TextoPagina:
              "A Piazza San Pietro, localizada no Vaticano aos pés da Basílica de São Pedro, é uma das maiores e mais impressionantes praças do mundo.\n\nInspirado nessa obra-prima, a Campos traz para Joinville o empreendimento Piazza San Pietro.\n\nLocalizado no coração do bairro América, ele traz todo o conforto e requinte que você e sua família merecem.\n\nO empreendimento também recebeu o Selo Casa Azul da Caixa.\n\nDentre os critérios analisados estão: qualidade urbana e bem-estar, projeto e conforto, eficiência energética, produção sustentável, gestão eficiente de água, inovação e práticas sociais.",
            createdAt: "2022-07-18T12:58:43.335Z",
            updatedAt: "2024-02-09T13:12:20.264Z",
            publishedAt: "2022-07-18T12:58:47.936Z",
            Ordem: 2,
            Descricao2:
              "Torre única | 8 andares | 17 apartamentos\n02 coberturas | Ambientes integrados",
            Descricao1:
              "Área privativa de 108 a 126m²\n3 suítes ou 2 suítes e 1 dormitório",
            StatusGeral: 95,
            Logo: {
              data: {
                id: 85,
                attributes: {
                  name: "piazza-san-pietro.svg",
                  alternativeText: "piazza-san-pietro.svg",
                  caption: "piazza-san-pietro.svg",
                  width: 301,
                  height: 139,
                  formats: null,
                  hash: "piazza_san_pietro_144e4c6609",
                  ext: ".svg",
                  mime: "image/svg+xml",
                  size: 32.27,
                  url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1658165027/piazza_san_pietro_144e4c6609.svg",
                  previewUrl: null,
                  provider: "cloudinary",
                  provider_metadata: {
                    public_id: "piazza_san_pietro_144e4c6609",
                    resource_type: "image",
                  },
                  createdAt: "2022-07-18T17:23:48.869Z",
                  updatedAt: "2022-07-18T17:23:48.869Z",
                },
              },
            },
            Banner: {
              data: {
                id: 80,
                attributes: {
                  name: "BANNER_SAN_PIETRO.jpg",
                  alternativeText: "BANNER_SAN_PIETRO.jpg",
                  caption: "BANNER_SAN_PIETRO.jpg",
                  width: 1920,
                  height: 1080,
                  formats: {
                    large: {
                      ext: ".jpg",
                      url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1658164701/large_BANNER_SAN_PIETRO_343b886bea.jpg",
                      hash: "large_BANNER_SAN_PIETRO_343b886bea",
                      mime: "image/jpeg",
                      name: "large_BANNER_SAN_PIETRO.jpg",
                      path: null,
                      size: 100.27,
                      width: 1000,
                      height: 563,
                      provider_metadata: {
                        public_id: "large_BANNER_SAN_PIETRO_343b886bea",
                        resource_type: "image",
                      },
                    },
                    small: {
                      ext: ".jpg",
                      url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1658164701/small_BANNER_SAN_PIETRO_343b886bea.jpg",
                      hash: "small_BANNER_SAN_PIETRO_343b886bea",
                      mime: "image/jpeg",
                      name: "small_BANNER_SAN_PIETRO.jpg",
                      path: null,
                      size: 28.04,
                      width: 500,
                      height: 281,
                      provider_metadata: {
                        public_id: "small_BANNER_SAN_PIETRO_343b886bea",
                        resource_type: "image",
                      },
                    },
                    medium: {
                      ext: ".jpg",
                      url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1658164701/medium_BANNER_SAN_PIETRO_343b886bea.jpg",
                      hash: "medium_BANNER_SAN_PIETRO_343b886bea",
                      mime: "image/jpeg",
                      name: "medium_BANNER_SAN_PIETRO.jpg",
                      path: null,
                      size: 57.94,
                      width: 750,
                      height: 422,
                      provider_metadata: {
                        public_id: "medium_BANNER_SAN_PIETRO_343b886bea",
                        resource_type: "image",
                      },
                    },
                    thumbnail: {
                      ext: ".jpg",
                      url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1658164700/thumbnail_BANNER_SAN_PIETRO_343b886bea.jpg",
                      hash: "thumbnail_BANNER_SAN_PIETRO_343b886bea",
                      mime: "image/jpeg",
                      name: "thumbnail_BANNER_SAN_PIETRO.jpg",
                      path: null,
                      size: 8.55,
                      width: 245,
                      height: 138,
                      provider_metadata: {
                        public_id: "thumbnail_BANNER_SAN_PIETRO_343b886bea",
                        resource_type: "image",
                      },
                    },
                  },
                  hash: "BANNER_SAN_PIETRO_343b886bea",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  size: 351.55,
                  url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1658164700/BANNER_SAN_PIETRO_343b886bea.jpg",
                  previewUrl: null,
                  provider: "cloudinary",
                  provider_metadata: {
                    public_id: "BANNER_SAN_PIETRO_343b886bea",
                    resource_type: "image",
                  },
                  createdAt: "2022-07-18T17:18:22.054Z",
                  updatedAt: "2022-07-18T17:18:22.054Z",
                },
              },
            },
          },
        },
      },
    },
  },
  {
    id: 2,
    attributes: {
      Texto: "PRÉ LANÇAMENTO EM PIÇARRAS",
      TextoBotao: "SAIBA MAIS",
      empreendimento: {
        data: {
          id: 2,
          attributes: {
            Nome: "Piazza Del Mare",
            Slug: "piazza-del-mare",
            Area: "Área privativa de 99,90 a 123,96m²",
            Quartos: "1 suíte e 2 demi-suítes ou 3 suítes",
            QteBlocos: 1,
            QteAndares: 19,
            QteApartamentos: 45,
            Status: "Em obra",
            TextoPlanta:
              '<ul style="list-style-position: inside;">\n      <li>Torre única / 19 andares / 45 apartamentos / 3 por andar</li>\n      <li>Plantas tipo 1: 123,96m² privativos</li>\n      <li>Plantas tipo 2: 99,90m² privativos</li>\n      <li>Plantas tipo 3: 99,98m² privativos</li>\n      <li>Espaço gourmet no apartamento</li>\n      <li>Sacada com churrasqueira a carvão</li>\n      <li>Ambientes integrados nos apartamentos</li>  \n      <li>Opção de segunda vaga de garagem</li>\n      <li>Infraestrutura para sistema de segurança</li>\n      <li>2 elevadores</li>\n</ul>\n<br/>\n<strong style="color: #1A47BC;"> ENTREGA PREVISTA DEZEMBRO 2025</strong>',
            TituloPagina:
              "INSPIRADO NA PRAÇA DEL MARE, EM RODI GARGANICO - ITÁLIA:",
            TextoPagina:
              "Rodi Garganico é um pequeno vilarejo italiano cercado de paisagens exuberantes da praia e da natureza. E foi inspirado em paisagens de tirar o fôlego, que o Piazza Del Mare foi projetado.\n\nO mar de Balneário Piçarras foi emoldurado em uma vista única, que pode ser apreciada de dentro do seu próprio apartamento.\n\nE até mesmo o Zico, nosso eterno camisa 10, resolveu descer para Santa Catarina e fazer deste belo empreendimento, a sua próxima jogada.",
            createdAt: "2022-07-19T14:23:11.930Z",
            updatedAt: "2024-02-09T14:18:41.038Z",
            publishedAt: "2022-07-19T14:24:37.100Z",
            Ordem: 1,
            Descricao2:
              "Torre única | 19 andares | 45 apartamentos\nInfraestrutura para sistema de segurança\n2 elevadores",
            Descricao1:
              "Área privativa de 99,90 a 123,96m²\n3 suítes ou 1 suíte e 2 demi-suítes",
            StatusGeral: 5,
            Logo: {
              data: {
                id: 133,
                attributes: {
                  name: "DEL_MARE.png",
                  alternativeText: "DEL_MARE.png",
                  caption: "DEL_MARE.png",
                  width: 2184,
                  height: 976,
                  formats: {
                    large: {
                      ext: ".png",
                      url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1679343839/large_DEL_MARE_2cc197efe7.png",
                      hash: "large_DEL_MARE_2cc197efe7",
                      mime: "image/png",
                      name: "large_DEL_MARE.png",
                      path: null,
                      size: 57.86,
                      width: 1000,
                      height: 447,
                      provider_metadata: {
                        public_id: "large_DEL_MARE_2cc197efe7",
                        resource_type: "image",
                      },
                    },
                    small: {
                      ext: ".png",
                      url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1679343839/small_DEL_MARE_2cc197efe7.png",
                      hash: "small_DEL_MARE_2cc197efe7",
                      mime: "image/png",
                      name: "small_DEL_MARE.png",
                      path: null,
                      size: 23.69,
                      width: 500,
                      height: 223,
                      provider_metadata: {
                        public_id: "small_DEL_MARE_2cc197efe7",
                        resource_type: "image",
                      },
                    },
                    medium: {
                      ext: ".png",
                      url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1679343839/medium_DEL_MARE_2cc197efe7.png",
                      hash: "medium_DEL_MARE_2cc197efe7",
                      mime: "image/png",
                      name: "medium_DEL_MARE.png",
                      path: null,
                      size: 40.15,
                      width: 750,
                      height: 335,
                      provider_metadata: {
                        public_id: "medium_DEL_MARE_2cc197efe7",
                        resource_type: "image",
                      },
                    },
                    thumbnail: {
                      ext: ".png",
                      url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1679343838/thumbnail_DEL_MARE_2cc197efe7.png",
                      hash: "thumbnail_DEL_MARE_2cc197efe7",
                      mime: "image/png",
                      name: "thumbnail_DEL_MARE.png",
                      path: null,
                      size: 8.93,
                      width: 245,
                      height: 109,
                      provider_metadata: {
                        public_id: "thumbnail_DEL_MARE_2cc197efe7",
                        resource_type: "image",
                      },
                    },
                  },
                  hash: "DEL_MARE_2cc197efe7",
                  ext: ".png",
                  mime: "image/png",
                  size: 26.76,
                  url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1679343837/DEL_MARE_2cc197efe7.png",
                  previewUrl: null,
                  provider: "cloudinary",
                  provider_metadata: {
                    public_id: "DEL_MARE_2cc197efe7",
                    resource_type: "image",
                  },
                  createdAt: "2022-07-19T14:26:30.994Z",
                  updatedAt: "2023-03-20T20:24:00.546Z",
                },
              },
            },
            Banner: {
              data: {
                id: 260,
                attributes: {
                  name: "DEl_Mare_cam06 (1).jpg",
                  alternativeText: "DEl_Mare_cam06 (1).jpg",
                  caption: "DEl_Mare_cam06 (1).jpg",
                  width: 5000,
                  height: 2825,
                  formats: {
                    large: {
                      ext: ".jpg",
                      url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1679485218/large_D_El_Mare_cam06_1_6cdb5a39fb.jpg",
                      hash: "large_D_El_Mare_cam06_1_6cdb5a39fb",
                      mime: "image/jpeg",
                      name: "large_DEl_Mare_cam06 (1).jpg",
                      path: null,
                      size: 125.81,
                      width: 1000,
                      height: 565,
                      provider_metadata: {
                        public_id: "large_D_El_Mare_cam06_1_6cdb5a39fb",
                        resource_type: "image",
                      },
                    },
                    small: {
                      ext: ".jpg",
                      url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1679485219/small_D_El_Mare_cam06_1_6cdb5a39fb.jpg",
                      hash: "small_D_El_Mare_cam06_1_6cdb5a39fb",
                      mime: "image/jpeg",
                      name: "small_DEl_Mare_cam06 (1).jpg",
                      path: null,
                      size: 37.43,
                      width: 500,
                      height: 282,
                      provider_metadata: {
                        public_id: "small_D_El_Mare_cam06_1_6cdb5a39fb",
                        resource_type: "image",
                      },
                    },
                    medium: {
                      ext: ".jpg",
                      url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1679485219/medium_D_El_Mare_cam06_1_6cdb5a39fb.jpg",
                      hash: "medium_D_El_Mare_cam06_1_6cdb5a39fb",
                      mime: "image/jpeg",
                      name: "medium_DEl_Mare_cam06 (1).jpg",
                      path: null,
                      size: 75.92,
                      width: 750,
                      height: 424,
                      provider_metadata: {
                        public_id: "medium_D_El_Mare_cam06_1_6cdb5a39fb",
                        resource_type: "image",
                      },
                    },
                    thumbnail: {
                      ext: ".jpg",
                      url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1679485218/thumbnail_D_El_Mare_cam06_1_6cdb5a39fb.jpg",
                      hash: "thumbnail_D_El_Mare_cam06_1_6cdb5a39fb",
                      mime: "image/jpeg",
                      name: "thumbnail_DEl_Mare_cam06 (1).jpg",
                      path: null,
                      size: 11.07,
                      width: 245,
                      height: 138,
                      provider_metadata: {
                        public_id: "thumbnail_D_El_Mare_cam06_1_6cdb5a39fb",
                        resource_type: "image",
                      },
                    },
                  },
                  hash: "D_El_Mare_cam06_1_6cdb5a39fb",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  size: 2184.32,
                  url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1679485217/D_El_Mare_cam06_1_6cdb5a39fb.jpg",
                  previewUrl: null,
                  provider: "cloudinary",
                  provider_metadata: {
                    public_id: "D_El_Mare_cam06_1_6cdb5a39fb",
                    resource_type: "image",
                  },
                  createdAt: "2023-03-22T11:40:19.768Z",
                  updatedAt: "2023-03-22T11:40:19.768Z",
                },
              },
            },
          },
        },
      },
    },
  },
  {
    id: 6,
    attributes: {
      Texto: "PRÉ LANÇAMENTO EM BARRA VELHA",
      TextoBotao: "SAIBA MAIS",
      empreendimento: {
        data: {
          id: 6,
          attributes: {
            Nome: "PLAZA BEACH RESIDENCE",
            Slug: "plaza-beach-residence-itajuba",
            Area: "Área privativa de 137 a 160m²",
            Quartos: "3 ou 4 suítes",
            QteBlocos: 1,
            QteAndares: 25,
            QteApartamentos: 59,
            Status: "Pré lançamento",
            TextoPlanta: null,
            TituloPagina:
              "INSPIRADO NO CONCEITO DE TER SUA RESIDENCIA NA PRAIA",
            TextoPagina:
              "Inspirado no conceito de condomínio clube, a Campos Incorporadora Ltda desenvolveu um empreendimento próximo ao mar que oferece maior exclusividade e comodidade.\n\nApartamentos que potencializam a sensação de liberdade. Ambientes de lazer diversificados, sofisticados, que oferecem momentos contrastantes de tranquilidade e diversão.\n\nAguarde. ",
            createdAt: "2022-07-19T16:34:38.481Z",
            updatedAt: "2024-02-09T14:38:19.622Z",
            publishedAt: "2022-07-19T16:34:40.388Z",
            Ordem: 4,
            Descricao2: "Torre única | 26 andares\n02 vagas de garagem",
            Descricao1:
              "Área privativa de 137 a 160m²\n2 coberturas planas com 200m²\nOpções com 3 ou 4 suítes",
            StatusGeral: 100,
            Logo: {
              data: null,
            },
            Banner: {
              data: {
                id: 339,
                attributes: {
                  name: "BannerSite - Plaza - 1920x1080px.png",
                  alternativeText: "BannerSite - Plaza - 1920x1080px.png",
                  caption: "BannerSite - Plaza - 1920x1080px.png",
                  width: 1920,
                  height: 1080,
                  formats: {
                    large: {
                      ext: ".png",
                      url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1699555525/large_Banner_Site_Plaza_1920x1080px_ef26ad29d7.png",
                      hash: "large_Banner_Site_Plaza_1920x1080px_ef26ad29d7",
                      mime: "image/png",
                      name: "large_BannerSite - Plaza - 1920x1080px.png",
                      path: null,
                      size: 831.81,
                      width: 1000,
                      height: 563,
                      provider_metadata: {
                        public_id:
                          "large_Banner_Site_Plaza_1920x1080px_ef26ad29d7",
                        resource_type: "image",
                      },
                    },
                    small: {
                      ext: ".png",
                      url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1699555526/small_Banner_Site_Plaza_1920x1080px_ef26ad29d7.png",
                      hash: "small_Banner_Site_Plaza_1920x1080px_ef26ad29d7",
                      mime: "image/png",
                      name: "small_BannerSite - Plaza - 1920x1080px.png",
                      path: null,
                      size: 219.75,
                      width: 500,
                      height: 281,
                      provider_metadata: {
                        public_id:
                          "small_Banner_Site_Plaza_1920x1080px_ef26ad29d7",
                        resource_type: "image",
                      },
                    },
                    medium: {
                      ext: ".png",
                      url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1699555526/medium_Banner_Site_Plaza_1920x1080px_ef26ad29d7.png",
                      hash: "medium_Banner_Site_Plaza_1920x1080px_ef26ad29d7",
                      mime: "image/png",
                      name: "medium_BannerSite - Plaza - 1920x1080px.png",
                      path: null,
                      size: 476.77,
                      width: 750,
                      height: 422,
                      provider_metadata: {
                        public_id:
                          "medium_Banner_Site_Plaza_1920x1080px_ef26ad29d7",
                        resource_type: "image",
                      },
                    },
                    thumbnail: {
                      ext: ".png",
                      url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1699555524/thumbnail_Banner_Site_Plaza_1920x1080px_ef26ad29d7.png",
                      hash: "thumbnail_Banner_Site_Plaza_1920x1080px_ef26ad29d7",
                      mime: "image/png",
                      name: "thumbnail_BannerSite - Plaza - 1920x1080px.png",
                      path: null,
                      size: 59.1,
                      width: 245,
                      height: 138,
                      provider_metadata: {
                        public_id:
                          "thumbnail_Banner_Site_Plaza_1920x1080px_ef26ad29d7",
                        resource_type: "image",
                      },
                    },
                  },
                  hash: "Banner_Site_Plaza_1920x1080px_ef26ad29d7",
                  ext: ".png",
                  mime: "image/png",
                  size: 705.9,
                  url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1699555524/Banner_Site_Plaza_1920x1080px_ef26ad29d7.png",
                  previewUrl: null,
                  provider: "cloudinary",
                  provider_metadata: {
                    public_id: "Banner_Site_Plaza_1920x1080px_ef26ad29d7",
                    resource_type: "image",
                  },
                  createdAt: "2023-11-09T18:45:26.981Z",
                  updatedAt: "2023-11-09T18:45:26.981Z",
                },
              },
            },
          },
        },
      },
    },
  },
];
