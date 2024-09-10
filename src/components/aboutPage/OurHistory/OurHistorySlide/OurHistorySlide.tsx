import { Box, Container, Grid, SxProps, Theme } from "@mui/material";
import { SlideImage } from "./SlideImage";
import { SlideText } from "./SlideText";
import { SlideYear } from "./SlideYear";
import { IOurHistorySlide } from "../../../../interfaces/strapi";
import { DashedLine } from "./DashedLine";

export interface IOurHistorySlideProps {
  slide: IOurHistorySlide;
  index: number;
  lastSlideIndex: number;
}

export const OurHistorySlide = ({
  slide,
  index,
  lastSlideIndex,
}: IOurHistorySlideProps) => {
  return (
    <Box sx={{ position: "relative", height: "100%" }}>
      <Container sx={{ height: "100%" }}>
        <Box sx={{ ...sxSlide, zIndex: { xs: "unset", md: 999 } }}>
          <Box
            sx={{
              mx: "auto",
              height: "100%",
              width: "fit-content",
              py: { xs: 2, sm: 5 },
              px: { xs: 2, sm: 8 },
            }}
          >
            <Grid
              container
              spacing={4}
              alignItems="center"
              justifyContent="center"
              height="100%"
            >
              <Grid item xs={12} md={4} order={{ xs: 3, sm: 1 }}>
                <SlideText text={slide.texto} />
              </Grid>

              <Grid item xs={4} sm={4} md={3} order={{ xs: 1, sm: 2 }}>
                <Box
                  sx={{
                    position: "relative",
                    mx: "auto",
                  }}
                >
                  <SlideYear year={slide.ano} />

                  <DashedLine hide={index === lastSlideIndex} />
                </Box>
              </Grid>

              <Grid item xs={6} sm={6} md={5} order={{ xs: 2, sm: 3 }}>
                <SlideImage
                  src={slide.foto.data?.attributes.url ?? ""}
                  alt={slide.ano}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

const sxSlide: SxProps<Theme> = {
  backgroundColor: "white",
  width: "100%",
  height: "100%",
  boxShadow: "15px 31px 82px rgba(18, 50, 131, .12)",
  position: "relative",
};
