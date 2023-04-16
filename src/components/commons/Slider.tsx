import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Box, Stack, SxProps, Theme } from "@mui/material";

interface IHeroSliderProps {
  slides: any[];
  selectedSlide: any;
  setSelectedSlide: any;
}

const sxEmbla: SxProps<Theme> = {
  overflowX: "hidden",
  overflowY: "visible",
  height: "100%",
};

const sxEmblaContainer: SxProps<Theme> = {
  display: "flex",
  height: "100%",
};

const sxEmblaSlide: SxProps<Theme> = {
  position: "relative",
  flex: "0 0 100%",
  marginRight: 5,
  width: "100%",
};

export const Slider = ({
  slides,
  selectedSlide,
  setSelectedSlide,
}: IHeroSliderProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  useEffect(() => {
    emblaApi?.scrollTo(selectedSlide);
  }, [emblaApi, selectedSlide]);

  // const scrollPrev = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollPrev()
  // }, [emblaApi])

  // const scrollNext = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollNext()
  // }, [emblaApi])

  emblaApi?.on("select", () => {
    setSelectedSlide(emblaApi.selectedScrollSnap());
  });

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{ height: "100%", width: "100%" }}
    >
      <Box sx={{ width: "100%", height: "100%" }}>
        <Box sx={sxEmbla}>
          <Box sx={{ height: "100%" }} ref={emblaRef}>
            <Box sx={sxEmblaContainer}>
              {slides.map((slide, index) => (
                <Box key={index} sx={sxEmblaSlide}>
                  {slide}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};
