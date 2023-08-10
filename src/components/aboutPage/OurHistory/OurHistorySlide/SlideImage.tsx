import { Box } from "@mui/material";
import Image from "next/image";

interface ISlideImageProps {
  src: string;
  alt: string;
}

export const SlideImage = ({ src, alt }: ISlideImageProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        aspectRatio: "1200 / 795",
        height: { xs: "7.5rem", sm: "15rem" },
        zIndex: 200,
        ml: "auto",
        borderRadius: 4,
        overflow: "hidden",
      }}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        objectPosition={"bottom"}
        priority
      />
    </Box>
  );
};
