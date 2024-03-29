import { Box, Stack } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel-react";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { Dots, TDotsColors } from "./Dots";
import { Arrows } from "./Arrows";
import Autoplay from "embla-carousel-autoplay";

interface ICarouselProps {
  slides: ReactNode[];
  spacing?: number;
  slideFlex?:
    | string
    | Partial<{ xs: string; sm: string; md: string; lg: string; xl: string }>;
  options?: EmblaOptionsType;
  dotsColor?: TDotsColors;
  dotsInside?: boolean;
  showArrows?: boolean;
  autoplay?: boolean;
}

export const Carousel = ({
  slides,
  slideFlex,
  spacing,
  options,
  dotsColor = "white",
  dotsInside = false,
  showArrows = false,
  autoplay = false,
}: ICarouselProps) => {
  const autoplayPlugin = Autoplay({ delay: 3000 });

  const [viewportRef, embla] = useEmblaCarousel(
    options,
    autoplay ? [autoplayPlugin] : undefined
  );
  const [, setPrevBtnEnabled] = useState(false);
  const [, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
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
      <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
        <Box
          sx={{ overflow: "hidden", width: "100%", height: "100%" }}
          ref={viewportRef}
        >
          <Stack
            direction="row"
            spacing={spacing}
            sx={{ width: "100%", height: "100%" }}
          >
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
      </Box>

      {showArrows && <Arrows scrollPrev={scrollPrev} scrollNext={scrollNext} />}

      <Dots
        handleClick={scrollTo}
        scrollSnaps={scrollSnaps}
        selectedIndex={selectedIndex}
        dotsColor={dotsColor}
        dotsInside={dotsInside}
      />
    </>
  );
};
