import { Box } from "@mui/material";
import { Carousel } from "../../commons/Carousel/Carousel";
import { LoadingImage } from "../../commons/Image/LoadingImage";
import { useMemo } from "react";
import { BannerImage, IEnterprise } from "../../../interfaces/strapiLocal";

interface ISummarySliderProps {
  enterpriseData: IEnterprise["attributes"];
}

export const SummarySlider = ({ enterpriseData }: ISummarySliderProps) => {
  const imageOrSliderMemo = useMemo(() => {
    const carouselImages = enterpriseData.CarrosselPrimeiraSessao.data;

    const carouselImagesToUse: string[] = carouselImages.map(
      (image: string | BannerImage) => {
        if (typeof image === "string") {
          return image;
        }

        return image.attributes.url;
      }
    );

    if (carouselImages.length < 2) {
      return (
        <LoadingImage
          src={carouselImagesToUse[0]}
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="73%"
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
      />
    );
  }, [enterpriseData.CarrosselPrimeiraSessao]);

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
