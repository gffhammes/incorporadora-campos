import { Box, Container, Stack, SxProps, Theme } from "@mui/material";
import { PrimaryGradientCover } from "../../commons/GradientCover";
import { SectionTitle } from "../../commons/SectionTitle";

export const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 500,
        height: "45%",
        minHeight: "450px",
      }}
    >
      <Box sx={sxBanner} />
      <PrimaryGradientCover />

      <Box sx={sxContent}>
        <Container sx={{ display: "flex", height: "100%", pb: 10, pt: 20 }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            sx={{ height: "100%", width: "100%" }}
            alignItems="center"
            justifyContent="center"
          >
            <Box>
              <SectionTitle theme="light">ACOMPANHE O BLOG</SectionTitle>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

const sxContent: SxProps<Theme> = {
  position: "absolute",
  width: "100%",
  height: "100%",
  zIndex: 500,
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
};

const sxBanner: SxProps<Theme> = {
  position: "absolute",
  height: "100%",
  width: "100%",
  //   backgroundImage: `url(${enterpriseData.Banner.data.attributes.url})`,
  backgroundColor: "secondary.main",
  backgroundSize: "cover",
};
