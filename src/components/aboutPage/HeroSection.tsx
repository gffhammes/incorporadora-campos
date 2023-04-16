import { Box, SxProps, Theme } from "@mui/material";
import React from "react";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { FloatingDownArrowScroll } from "../commons/FloatingDownArrowScroll";
import { AboutGradientCover } from "../commons/GradientCover";

const sxContent: SxProps<Theme> = {
  position: "absolute",
  width: "100%",
  height: "100%",
  zIndex: 500,
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
};

const HeroSection = () => {
  const { md } = useBreakpoint();
  return (
    <Box sx={{ position: "relative", zIndex: 500, height: "100%" }}>
      <Box
        sx={{
          position: "absolute",
          height: "100%",
          width: "100%",
          backgroundImage: `url(/images/BANNER_SOBRE_NOS.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <AboutGradientCover />
      {md && (
        <Box sx={sxContent}>
          <FloatingDownArrowScroll targetId="description" />
        </Box>
      )}
    </Box>
  );
};

export default HeroSection;
