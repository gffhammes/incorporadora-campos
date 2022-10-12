import {
  Box,
  Container,
  Grid,
  Stack,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

type Props = {
  slide: any;
  index: number;
  lastSlideIndex: number;
};

const sxSlide: SxProps<Theme> = {
  backgroundColor: "white",
  width: "100%",
  height: "100%",
  boxShadow: "15px 31px 82px rgba(18, 50, 131, .12)",
  position: "relative",
};

const DashedLine = ({ index, lastSlideIndex }) => {
  if (index === lastSlideIndex) return null;

  return (
    <Box
      sx={{
        position: "absolute",
        borderBottom: "3px dotted #0E1E42",
        width: "100vw",
        top: "50%",
        left: "45%",
        zIndex: 10,
      }}
    />
  );
};

const OurHistorySlide = ({ slide, index, lastSlideIndex }: Props) => {
  return (
    <Box sx={{ position: "relative", height: "100%" }}>
      <Container sx={{ height: "100%" }}>
        <Box sx={{ ...sxSlide, zIndex: { xs: "unset", sm: 999 } }}>
          <Box
            sx={{
              mx: "auto",
              height: "100%",
              width: "fit-content",
              py: 5,
              px: { xs: 2, sm: 8 },
            }}
          >
            <Grid
              container
              spacing={4}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={12} md={4} order={{ xs: 3, sm: 1 }}>
                <Typography
                  fontSize={21}
                  sx={{
                    maxWidth: { xs: "unset", md: "28ch" },
                    height: { xs: "10rem", sm: "5rem", md: "unset" },
                  }}
                >
                  {slide.texto}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4} md={3} order={{ xs: 1, sm: 2 }}>
                <Box
                  sx={{
                    position: "relative",
                    mx: "auto",
                  }}
                >
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                      backgroundColor: "secondary.main",
                      width: "8rem!important",
                      height: "8rem!important",
                      borderRadius: "8rem",
                      color: "white",
                      p: 2,
                      flex: "8rem",
                      position: "relative",
                      zIndex: 200,
                      mx: "auto",
                    }}
                  >
                    <Typography
                      fontSize={25}
                      textAlign="center"
                      letterSpacing={4}
                    >
                      {slide.ano}
                    </Typography>
                  </Stack>
                  <DashedLine index={index} lastSlideIndex={lastSlideIndex} />
                </Box>
              </Grid>
              <Grid item xs={12} sm={8} md={5} order={{ xs: 2, sm: 3 }}>
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: "100%", md: "20rem" },
                    height: "15rem",
                    zIndex: 200,
                    ml: "auto",
                  }}
                >
                  <Image
                    src={slide.foto.data.attributes.url}
                    alt={slide.year}
                    layout="fill"
                    objectFit="contain"
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default OurHistorySlide;
