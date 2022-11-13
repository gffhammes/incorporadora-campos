import { Container, Box } from "@mui/material";
import Image from "next/image";

interface IMainImageProps {
  image: string;
}

export const MainImage = ({ image }: IMainImageProps) => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          position: "relative",
          zIndex: 999,
          width: "100%",
          aspectRatio: "1.25 / 1",
          transform: "translateY(-10rem)",
          borderRadius: 2,
          mb: "-10rem",
          overflow: "hidden",
        }}
      >
        <Image src={image} alt="image" layout="fill" objectFit="cover" />
      </Box>
    </Container>
  );
};
