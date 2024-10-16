import React, { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Box, Skeleton, Stack } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { EnterpriseCard } from "./EnterpriseCard";
import { getLocationString } from "../../../helpers/getLocationString";
import Autoplay from "embla-carousel-autoplay";
import { IEnterprise } from "../../../interfaces/strapiLocal";

const sxArrowWrapperCommon = {
  position: "absolute",
  height: "fit-content",
  width: "fit-content",
  cursor: "pointer",
};

const sxRightArrowWrapper = {
  ...sxArrowWrapperCommon,
  right: "calc(1rem - 3vw)",
};

const sxLeftArrowWrapper = {
  ...sxArrowWrapperCommon,
  left: "calc(1rem - 3vw)",
};

interface IEnterprisesSliderProps {
  enterprises: IEnterprise[] | null;
  loading: boolean;
}

export const EnterprisesSlider = ({
  enterprises,
  loading,
}: IEnterprisesSliderProps) => {
  const autoplay = Autoplay({ delay: 3000 });
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 0,
      skipSnaps: true,
    },
    [autoplay]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!enterprises || !emblaApi) return;
    emblaApi.reInit();
  }, [emblaApi, enterprises]);

  const slidesMemo = useMemo(() => {
    if (loading) {
      return [0, 1, 2, 3, 4, 5, 6, 7].map((item) => (
        <Skeleton
          key={item}
          variant="rectangular"
          className="embla__slide"
          sx={{ height: "30rem", mt: 2 }}
        />
      ));
    }

    return enterprises?.map((enterprise, index) => (
      <EnterpriseCard
        key={index}
        slug={enterprise.attributes.Slug}
        imageUrl={enterprise.attributes.FotoHome.data?.attributes.url ?? ""}
        name={enterprise.attributes.Nome}
        status={enterprise.attributes.Status}
        description={enterprise.attributes.Descricao1}
        location={getLocationString(enterprise.attributes)}
      />
    ));
  }, [enterprises, loading]);

  return (
    <Stack sx={{ position: "relative" }} spacing={4}>
      <Box className="embla" sx={{ mt: { xs: 0, md: 5 } }}>
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">{slidesMemo}</div>
        </div>
      </Box>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        {emblaApi?.scrollSnapList().map((dot, index) => (
          <Box
            onClick={() => scrollTo(index)}
            bgcolor="secondary.main"
            key={index}
            sx={{
              transition: ".2s ease all",
              height: ".5rem",
              width: ".5rem",
              borderRadius: "1rem",
              cursor: "pointer",
              filter: index === selectedIndex ? "opacity(.8)" : "opacity(.25)",
            }}
          />
        ))}
      </Stack>

      <Stack
        direction="row"
        sx={{
          position: "absolute",
          height: "5rem",
          width: "100%",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <Box sx={sxLeftArrowWrapper} onClick={scrollPrev}>
          <ArrowBackIosIcon
            sx={{
              color: "secondary.main",
            }}
          />
        </Box>
        <Box sx={sxRightArrowWrapper} onClick={scrollNext}>
          <ArrowForwardIosIcon
            sx={{
              color: "secondary.main",
            }}
          />
        </Box>
      </Stack>
    </Stack>
  );
};
