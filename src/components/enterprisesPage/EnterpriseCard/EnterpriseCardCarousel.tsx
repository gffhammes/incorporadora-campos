import { Box } from "@mui/material";
import { Carousel } from "../../commons/Carousel/Carousel";
import { IStrapiEnterprise } from "../../../interfaces/strapi";
import { LoadingImage } from "../../commons/Image/LoadingImage";

export interface IEnterpriseCardCarouselProps {
  photos: IStrapiEnterprise["attributes"]["Galeria"]["data"];
}

export const EnterpriseCardCarousel = ({
  photos,
}: IEnterpriseCardCarouselProps) => {
  if (!photos) {
    return (
      <Box
        sx={{
          gridArea: "carousel",
          height: "100%",
          width: "100%",
          backgroundColor: "#d3d3d3",
        }}
      />
    );
  }

  const slidesMemo = photos.map((photo) => (
    <Box
      key={photo.id}
      sx={{ height: "100%", width: "100%", position: "relative" }}
    >
      <LoadingImage
        src={photo.attributes.url}
        alt={photo.attributes.alternativeText}
        layout="fill"
        objectFit="cover"
        priority
      />
    </Box>
  ));

  return (
    <Box sx={{ gridArea: "carousel" }}>
      <Carousel
        autoplay
        slides={slidesMemo}
        slideFlex={"0 0 100%"}
        spacing={2}
        dotsInside
        dotsColor="full-white"
      />
    </Box>
  );
};
