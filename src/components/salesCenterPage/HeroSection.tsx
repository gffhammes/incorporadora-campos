import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { SectionTitle } from "../commons/SectionTitle";

export const HeroSection = () => {
  return (
    <Box
      sx={{
        height: { xs: "35%", md: "45%" },
        minHeight: { xs: "350px", md: "450px" },
        display: "flex",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "linear-gradient(#0E1E42, rgba(26, 80, 188, 0) 50%)",
          zIndex: 200,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage: "url(/images/BANNER_CENTRAL_DE_VENDAS.jpg)",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: 100,
        }}
      />
      <Box
        sx={{
          height: "100%",
          width: "100%",
          my: "auto",
          pt: "5rem",
          position: "absolute",
          zIndex: 300,
          display: "flex",
        }}
      >
        <Container sx={{ mt: { xs: 4, md: "auto" }, mb: "auto" }}>
          <SectionTitle theme="light">CENTRAL DE VENDAS</SectionTitle>
        </Container>
      </Box>
    </Box>
  );
};
