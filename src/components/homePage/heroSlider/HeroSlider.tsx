import React, { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import { defaultSvgProps } from "../../../constants/defaultSvgProps";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Autoplay from "embla-carousel-autoplay";
import { Slide } from "./Slide";

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

export const HeroSlider = ({ banners }) => {
  const autoplay = Autoplay({ delay: 5000 });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay]);
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [dots, setDots] = useState([]);
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < banners.length; i++) {
      arr.push({ active: false });
    }
    arr[0].active = true;
    setDots(arr);
  }, [banners]);

  useEffect(() => {
    setDots((dots): any[] =>
      dots.map((dot, index) =>
        index === selectedSlide ? { active: true } : { active: false }
      )
    );
  }, [selectedSlide]);

  const changeSelectedSlide = (newSlideIndex) => {
    emblaApi.scrollTo(newSlideIndex);
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
                    bgImage={
                      slide.attributes.empreendimento.data.attributes.Banner
                        .data.attributes.url
                    }
                    logo={
                      slide.attributes.empreendimento.data.attributes.Logo.data
                        .attributes.url
                    }
                    enterpriseName={
                      slide.attributes.empreendimento.data.attributes.Nome
                    }
                    text={slide.attributes.Texto}
                    buttonText={slide.attributes.TextoBotao}
                    href={slide.attributes.empreendimento.data.attributes.Slug}
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
