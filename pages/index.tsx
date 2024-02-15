import { EnterprisesSection } from "../src/components/homePage/EnterprisesSection";
import { HistorySection } from "../src/components/homePage/HistorySection/HistorySection";
import { HeroSlider } from "../src/components/homePage/heroSlider/HeroSlider";
import { Box, Divider } from "@mui/material";
import { Subscribe } from "../src/components/commons/Footer/Subscribe/Subscribe";
import { MainFooter } from "../src/components/commons/Footer/MainFooter";
import { Copyright } from "../src/components/commons/Footer/Copyright";

export default function Home() {
  return (
    <Box component={"main"} sx={{ height: { xs: "70vw", md: "100%" } }}>
      <HeroSlider banners={banners} />

      <EnterprisesSection />

      <Subscribe />

      <HistorySection />

      <Divider />

      <MainFooter />

      <Copyright />
    </Box>
  );
}

const banners = [
  {
    id: 1,
    attributes: {
      Texto: "LANÇAMENTO NO AMÉRICA",
      TextoBotao: "SAIBA MAIS",
      createdAt: "2022-07-19T20:29:22.438Z",
      updatedAt: "2022-07-19T20:29:24.490Z",
      publishedAt: "2022-07-19T20:29:24.487Z",
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
      createdAt: "2022-07-19T20:29:46.554Z",
      updatedAt: "2022-07-19T20:29:47.500Z",
      publishedAt: "2022-07-19T20:29:47.497Z",
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
    id: 5,
    attributes: {
      Texto: "PRÉ LANÇAMENTO NO AMÉRICA",
      TextoBotao: "SAIBA MAIS",
      createdAt: "2023-11-09T18:50:05.643Z",
      updatedAt: "2023-11-09T18:50:06.764Z",
      publishedAt: "2023-11-09T18:50:06.762Z",
      empreendimento: {
        data: {
          id: 7,
          attributes: {
            Nome: "Bolshoi Brasil",
            Slug: "bolshoi-brasil",
            Area: "De 155 a 205m² privativos",
            Quartos: "Apartamento com 3 e 4 suítes ",
            QteBlocos: 1,
            QteAndares: 15,
            QteApartamentos: 47,
            Status: "Pré lançamento",
            TextoPlanta: null,
            TituloPagina: "Inspirado pela dança, pela arte e pela cultura",
            TextoPagina:
              "Em uma parceria inédita no mundo, nasce o Residencial Bolshoi Brasil.\n\nUm projeto que não só será um marco na arquitetura de Santa Catarina, mas também no coração das crianças e das famílias atendidas pela Escola Bolshoi.\n\nReforçando o nosso compromisso para com a comunidade, a escola receberá uma participação dos lucros que será destinada à manutenção e a política de concessão de bolsas a crianças e jovens de todo o país.\n\nUm incentivo a cultura, a dança e a arte no Brasil.\n\nAguarde.",
            createdAt: "2022-07-19T16:37:50.970Z",
            updatedAt: "2023-11-15T14:48:50.383Z",
            publishedAt: "2022-07-19T16:37:52.706Z",
            Ordem: 5,
            Descricao2:
              "Localização Privilegiada | Torre Única \n15 andares | 02 coberturas planas\n02 a 03 vagas de garagem",
            Descricao1: "Área privativa a partir de 155m²\n",
            StatusGeral: 100,
            Logo: {
              data: null,
            },
            Banner: {
              data: {
                id: 336,
                attributes: {
                  name: "BannerSite - Bolshoi - 1920x1080px.png",
                  alternativeText: "BannerSite - Bolshoi - 1920x1080px.png",
                  caption: "BannerSite - Bolshoi - 1920x1080px.png",
                  width: 1920,
                  height: 1080,
                  formats: {
                    large: {
                      ext: ".png",
                      url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1699555203/large_Banner_Site_Bolshoi_1920x1080px_b2aa10a3ee.png",
                      hash: "large_Banner_Site_Bolshoi_1920x1080px_b2aa10a3ee",
                      mime: "image/png",
                      name: "large_BannerSite - Bolshoi - 1920x1080px.png",
                      path: null,
                      size: 210.73,
                      width: 1000,
                      height: 563,
                      provider_metadata: {
                        public_id:
                          "large_Banner_Site_Bolshoi_1920x1080px_b2aa10a3ee",
                        resource_type: "image",
                      },
                    },
                    small: {
                      ext: ".png",
                      url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1699555204/small_Banner_Site_Bolshoi_1920x1080px_b2aa10a3ee.png",
                      hash: "small_Banner_Site_Bolshoi_1920x1080px_b2aa10a3ee",
                      mime: "image/png",
                      name: "small_BannerSite - Bolshoi - 1920x1080px.png",
                      path: null,
                      size: 61.53,
                      width: 500,
                      height: 281,
                      provider_metadata: {
                        public_id:
                          "small_Banner_Site_Bolshoi_1920x1080px_b2aa10a3ee",
                        resource_type: "image",
                      },
                    },
                    medium: {
                      ext: ".png",
                      url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1699555204/medium_Banner_Site_Bolshoi_1920x1080px_b2aa10a3ee.png",
                      hash: "medium_Banner_Site_Bolshoi_1920x1080px_b2aa10a3ee",
                      mime: "image/png",
                      name: "medium_BannerSite - Bolshoi - 1920x1080px.png",
                      path: null,
                      size: 124.68,
                      width: 750,
                      height: 422,
                      provider_metadata: {
                        public_id:
                          "medium_Banner_Site_Bolshoi_1920x1080px_b2aa10a3ee",
                        resource_type: "image",
                      },
                    },
                    thumbnail: {
                      ext: ".png",
                      url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1699555203/thumbnail_Banner_Site_Bolshoi_1920x1080px_b2aa10a3ee.png",
                      hash: "thumbnail_Banner_Site_Bolshoi_1920x1080px_b2aa10a3ee",
                      mime: "image/png",
                      name: "thumbnail_BannerSite - Bolshoi - 1920x1080px.png",
                      path: null,
                      size: 18.87,
                      width: 245,
                      height: 138,
                      provider_metadata: {
                        public_id:
                          "thumbnail_Banner_Site_Bolshoi_1920x1080px_b2aa10a3ee",
                        resource_type: "image",
                      },
                    },
                  },
                  hash: "Banner_Site_Bolshoi_1920x1080px_b2aa10a3ee",
                  ext: ".png",
                  mime: "image/png",
                  size: 154.93,
                  url: "https://res.cloudinary.com/de5rrszh7/image/upload/v1699555202/Banner_Site_Bolshoi_1920x1080px_b2aa10a3ee.png",
                  previewUrl: null,
                  provider: "cloudinary",
                  provider_metadata: {
                    public_id: "Banner_Site_Bolshoi_1920x1080px_b2aa10a3ee",
                    resource_type: "image",
                  },
                  createdAt: "2023-11-09T18:40:05.419Z",
                  updatedAt: "2023-11-09T18:40:05.419Z",
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
      createdAt: "2023-11-09T18:57:11.612Z",
      updatedAt: "2023-11-09T19:00:07.059Z",
      publishedAt: "2023-11-09T18:57:14.199Z",
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
