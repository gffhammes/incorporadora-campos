import { Box } from "@mui/material";
import { Carousel } from "../../commons/Carousel/Carousel";
import { LoadingImage } from "../../commons/Image/LoadingImage";
import { useMemo } from "react";
import { BannerImage, IEnterprise } from "../../../interfaces/strapiLocal";
import { useBreakpoint } from "../../../hooks/useBreakpoint";

interface ISummarySliderProps {
  enterpriseData: IEnterprise["attributes"];
}

export const SummarySlider = ({ enterpriseData }: ISummarySliderProps) => {
  const { md } = useBreakpoint();

  const imageOrSliderMemo = useMemo(() => {
    const carouselImages = enterpriseData.CarrosselPrimeiraSessao.data;

    const carouselImagesToUse = carouselImages?.map(
      (image: string | BannerImage) => {
        if (typeof image === "string") {
          return image;
        }

        return image.attributes.url;
      }
    );

    if (!!carouselImagesToUse && carouselImagesToUse.length < 2) {
      return (
        <LoadingImage
          src={carouselImagesToUse[0]}
          alt=""
          layout="fill"
          objectFit={md ? "cover" : "contain"}
        />
      );
    }

    const slides = carouselImagesToUse?.map((item, index) => {
      return (
        <Box
          key={index}
          sx={{ position: "relative", height: "100%", width: "100%" }}
        >
          <LoadingImage
            src={item}
            alt=""
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
        slides={slides ?? []}
        options={{ loop: true }}
        showArrows
      />
    );
  }, [enterpriseData.CarrosselPrimeiraSessao.data, md]);

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "20rem", md: "100%" },
        width: "100%",
      }}
    >
      {imageOrSliderMemo}
    </Box>
  );
};
