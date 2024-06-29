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
import { plaza_beach_residence } from "../../../data/enterprises/plaza_beach_residence";
import { san_pietro } from "../../../data/enterprises/san_pietro";
import { del_mare } from "../../../data/enterprises/del_mare";

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
    id: 2,
    attributes: {
      Texto: "EM CONSTRUÇÃO EM PIÇARRAS",
      TextoBotao: "SAIBA MAIS",
      empreendimento: {
        data: del_mare,
      },
    },
  },
  {
    id: 5,
    attributes: {
      Texto: "BREVE LANÇAMENTO NO AMÉRICA",
      TextoBotao: "SAIBA MAIS",
      empreendimento: {
        data: bolshoi,
      },
    },
  },
  {
    id: 6,
    attributes: {
      Texto: "PRÉ LANÇAMENTO EM BARRA VELHA",
      TextoBotao: "SAIBA MAIS",
      empreendimento: {
        data: plaza_beach_residence,
      },
    },
  },
  {
    id: 1,
    attributes: {
      Texto: "PRONTO PARA MORAR - Somente 3 unidades disponíveis",
      TextoBotao: "SAIBA MAIS",
      empreendimento: {
        data: san_pietro,
      },
    },
  },
];
