import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { SummarySlider } from "./SummarySlider";
import { ContactButton } from "../ContactButton";

const sxGrid = {
  display: "grid",
  gridTemplateAreas: {
    xs: `
      'b'
      'a'
      'd'
      'c'
    `,
    md: `
      'a b'
      'a c'
      'a d'
    `,
  },
  gridTemplateColumns: {
    xs: "1fr",
    md: "1fr 1fr",
  },
  gridTemplateRows: "auto",
  columnGap: "5rem",
  rowGap: "2rem",
};

export const SummarySection = ({ enterpriseData }) => {
  return (
    <Box id="the-enterprise">
      <Container sx={{ py: 7 }}>
        <Box sx={sxGrid}>
          <Box sx={{ gridArea: "a" }}>
            <SummarySlider enterpriseData={enterpriseData} />
          </Box>

          <Box sx={{ gridArea: "b", alignSelf: "flex-end" }}>
            <Typography
              fontSize={{ xs: 18, sm: 25 }}
              fontWeight={500}
              letterSpacing={1}
              sx={{ color: "#1a47bc" }}
            >
              {enterpriseData.TituloPagina.toUpperCase()}
            </Typography>
          </Box>

          <Box sx={{ gridArea: "c" }}>
            <Typography sx={{ whiteSpace: "pre-wrap" }}>
              {enterpriseData.TextoPagina}
            </Typography>
            <Box sx={{ color: "#1a47bc", mt: 4 }}>
              {enterpriseData.texoAzulPaginaInterna.Descricao2 && (
                <Typography
                  fontSize={enterpriseData.texoAzulPaginaInterna.tamanhoFonte}
                  fontWeight={600}
                  letterSpacing={1}
                  sx={{ whiteSpace: "pre-wrap" }}
                >
                  {enterpriseData.Descricao2}
                </Typography>
              )}
              {enterpriseData.texoAzulPaginaInterna.Descricao1 && (
                <Typography
                  fontSize={enterpriseData.texoAzulPaginaInterna.tamanhoFonte}
                  fontWeight={600}
                  letterSpacing={1}
                  sx={{ whiteSpace: "pre-wrap" }}
                >
                  {enterpriseData.Descricao1}
                </Typography>
              )}
            </Box>
          </Box>

          <Stack
            sx={{ gridArea: "d", width: { xs: "100%", md: "fit-content" } }}
          >
            <ContactButton />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
