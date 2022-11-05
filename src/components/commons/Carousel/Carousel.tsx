import { Box, Stack } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel-react";
import { ReactNode, useCallback, useEffect, useState } from "react";

interface ICarouselProps {
  slides: ReactNode[];
  spacing?: number;
  slideFlex?:
    | string
    | Partial<{ xs: string; sm: string; md: string; lg: string; xl: string }>;
  options?: EmblaOptionsType;
}

export const Carousel = ({
  slides,
  slideFlex,
  spacing,
  options,
}: ICarouselProps) => {
  const [viewportRef, embla] = useEmblaCarousel(options);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Box sx={{ overflow: "hidden" }} ref={viewportRef}>
          <Stack direction="row" spacing={spacing}>
            {slides.map((slide, index) => (
              <Box
                key={index}
                sx={{
                  height: "100%",
                  width: "100%",
                  flex: slideFlex ?? "0 0 100%",
                }}
              >
                {slide}
              </Box>
            ))}
          </Stack>
        </Box>
        {/* <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} /> */}
      </Box>
      <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 4 }}>
        {scrollSnaps.map((_, index) => (
          <Box
            key={index}
            onClick={() => scrollTo(index)}
            sx={{
              height: ".5rem",
              width: ".5rem",
              borderRadius: ".5rem",
              backgroundColor:
                selectedIndex === index ? "white" : "secondary.main",
            }}
          />
        ))}
      </Stack>
    </>
  );
};
