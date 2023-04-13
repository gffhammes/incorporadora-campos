import { Box } from "@mui/material";
import { Carousel } from "../../commons/Carousel/Carousel";
import { LoadingImage } from "../../commons/Image/LoadingImage";
import { IStrapiImage } from "../../../interfaces/strapi";

interface ISummarySliderProps {
  enterpriseData: any;
}

export const SummarySlider = ({ enterpriseData }: ISummarySliderProps) => {
  const carouselImages: IStrapiImage[] =
    enterpriseData.CarrosselPrimeiraSessao.data;

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
    <Box
      sx={{
        position: "relative",
        height: { xs: "unset", md: "100%" },
        width: "100%",
        aspectRatio: "1 / 1",
      }}
    >
      {/* <Image
        src={enterpriseData.Thumb.data.attributes.url}
        alt={enterpriseData.Nome}
        layout="fill"
        objectFit="cover"
        objectPosition="left"
      /> */}
      <Carousel
        dotsInside
        dotsColor="full-white"
        slides={slides}
        options={{ loop: true }}
        showArrows
      />
    </Box>
  );
};
