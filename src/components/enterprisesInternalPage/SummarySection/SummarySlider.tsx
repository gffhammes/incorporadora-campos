import { Box } from "@mui/material";
import { Carousel } from "../../commons/Carousel/Carousel";
import { LoadingImage } from "../../commons/Image/LoadingImage";
import { IStrapiImage } from "../../../interfaces/strapi";
import { useMemo } from "react";

interface ISummarySliderProps {
  enterpriseData: any;
}

export const SummarySlider = ({ enterpriseData }: ISummarySliderProps) => {
  const imageOrSliderMemo = useMemo(() => {
    const carouselImages: IStrapiImage[] =
      enterpriseData.CarrosselPrimeiraSessao.data;

    if (carouselImages.length < 2) {
      return (
        <LoadingImage
          src={carouselImages[0].attributes.url}
          alt={carouselImages[0].attributes.alternativeText}
          layout="fill"
          objectFit="cover"
          objectPosition="left"
        />
      );
    }

    const slides = carouselImages.map((item, index) => {
      return (
        <Box
          key={index}
          sx={{ position: "relative", height: "100%", width: "100%" }}
        >
          <LoadingImage
            src={item.attributes.url}
            alt={item.attributes.caption}
            layout="fill"
            objectFit="cover"
            objectPosition="left"
            priority
          />
        </Box>
      );
    });

    return (
      <Carousel
        dotsInside
        dotsColor="full-white"
        slides={slides}
        options={{ loop: true }}
        showArrows
        showDots
      />
    );
  }, [enterpriseData.CarrosselPrimeiraSessao.data]);

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "unset", md: "100%" },
        width: "100%",
        aspectRatio: "1 / 1",
      }}
    >
      {imageOrSliderMemo}
    </Box>
  );
};
