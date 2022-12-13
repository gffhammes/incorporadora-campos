import { Container, Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { sxEllipsis } from "../../../helpers/sxEllipsis";
import { useBreakpoint } from "../../../hooks/useBreakpoint";

interface IMainImageProps {
  image: string;
  title: string;
}

export const MainImage = ({ image, title }: IMainImageProps) => {
  const { md } = useBreakpoint();

  const translation = md ? "-7rem" : "-3rem";

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          position: "relative",
          zIndex: 900,
          width: "100%",
          aspectRatio: "1.5 / 1",
          borderRadius: 2,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          transform: `translateY(${translation})`,
          mb: translation,

          boxShadow: {
            xs: "7px 15px 40px rgba(18, 50, 131, .48)",
            md: "15px 31px 82px rgba(18, 50, 131, .48)",
          },
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
            p: { xs: 2, sm: 4, md: 6 },
          }}
        >
          <Typography
            fontSize={{ xs: "16pt", sm: "20pt", md: "24pt" }}
            fontWeight={600}
            textAlign="center"
            sx={{ ...sxEllipsis(4) }}
          >
            {title}
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
};
