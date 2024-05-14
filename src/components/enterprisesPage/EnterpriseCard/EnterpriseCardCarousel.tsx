import { Box } from "@mui/material";
import { Carousel } from "../../commons/Carousel/Carousel";
import { LoadingImage } from "../../commons/Image/LoadingImage";
import { BannerImage, IEnterprise } from "../../../interfaces/strapiLocal";

export interface IEnterpriseCardCarouselProps {
  photos?: IEnterprise["attributes"]["Galeria"]["data"] | string[];
  gridArea: string;
}

export const EnterpriseCardCarousel = ({
  photos,
  gridArea,
}: IEnterpriseCardCarouselProps) => {
  if (!photos) {
    return (
      <Box
        sx={{
          gridArea,
          height: "100%",
          width: "100%",
          backgroundColor: "#d3d3d3",
        }}
      />
    );
  }

  const slidesMemo = photos.map((photo: string | BannerImage, index) => (
    <Box
      key={index}
      sx={{ height: "100%", width: "100%", position: "relative" }}
    >
      <LoadingImage
        src={typeof photo === "string" ? photo : photo.attributes.url}
        alt=""
        layout="fill"
        objectFit="cover"
        objectPosition="70%"
        priority
      />
    </Box>
  ));

  return (
    <Box sx={{ gridArea }}>
      <Carousel
        slides={slidesMemo}
        slideFlex={"0 0 100%"}
        spacing={2}
        dotsInside
        dotsColor="full-white"
        autoplay
      />
    </Box>
  );
};
