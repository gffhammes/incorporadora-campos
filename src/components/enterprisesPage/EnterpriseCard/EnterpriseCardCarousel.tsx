import { Box } from "@mui/material";
import { Carousel } from "../../commons/Carousel/Carousel";
import { LoadingImage } from "../../commons/Image/LoadingImage";
import { IEnterprise } from "../../../interfaces/strapiLocal";

export interface IEnterpriseCardCarouselProps {
  photos?: IEnterprise["attributes"]["Galeria"]["data"];
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
