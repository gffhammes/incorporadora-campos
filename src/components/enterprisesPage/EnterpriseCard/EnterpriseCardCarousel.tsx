import { Box } from "@mui/material";
import { Carousel } from "../../commons/Carousel/Carousel";
import { IStrapiEnterprise } from "../../../interfaces/strapi";
import Image from "next/image";

export interface IEnterpriseCardCarouselProps {
  photos: IStrapiEnterprise["attributes"]["Galeria"]["data"];
}

export const EnterpriseCardCarousel = ({
  photos,
}: IEnterpriseCardCarouselProps) => {
  console.log(photos);

  if (!photos) return null;

  const slidesMemo = photos.slice(0, 5).map((photo) => (
    <Box
      key={photo.id}
      sx={{ height: "100%", width: "100%", position: "relative" }}
    >
      <Image
        src={photo.attributes.url}
        alt={photo.attributes.alternativeText}
        layout="fill"
        objectFit="cover"
        priority
      />
    </Box>
  ));

  return (
    <Box sx={{ flex: "0 0 33.33%", width: "33.33%" }}>
      <Carousel
        slides={slidesMemo}
        slideFlex={"0 0 100%"}
        spacing={2}
        dotsInside
        dotsColor="full-white"
      />
    </Box>
  );
};
