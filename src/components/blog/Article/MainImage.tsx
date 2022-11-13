import { Container, Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

interface IMainImageProps {
  image: string;
  title: string;
}

export const MainImage = ({ image, title }: IMainImageProps) => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          position: "relative",
          zIndex: 999,
          width: "100%",
          aspectRatio: "1.5 / 1",
          borderRadius: 2,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          transform: "translateY(-10rem)",
          mb: "-10rem",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            position: "absolute",
            background:
              "linear-gradient(0deg, rgba(14, 30, 66, 1), rgba(14, 30, 66, 0.1))",
          }}
        />
        <Stack
          justifyContent="flex-end"
          alignItems="center"
          sx={{
            height: "100%",
            width: "100%",
            color: "white",
            position: "absolute",
            p: 6,
          }}
        >
          <Typography fontSize={24} fontWeight={600} textAlign="center">
            {title}
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
};
