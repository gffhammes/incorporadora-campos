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
        width: { xs: "100%", md: "20rem" },
        height: { xs: "7.5rem", sm: "15rem" },
        zIndex: 200,
        ml: "auto",
      }}
    >
      <Image src={src} alt={alt} layout="fill" objectFit="contain" priority />
    </Box>
  );
};
