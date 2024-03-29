import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { ContainedWhiteButton } from "../../commons/Button";
import { SectionTitle } from "../../commons/SectionTitle";
import { Partners } from "./Partners";

export const HistorySection = () => {
  return (
    <Box bgcolor="primary.main">
      <Container maxWidth={false} sx={{ py: 7, maxWidth: "700px" }}>
        <Stack spacing={{ xs: 8, md: 4 }}>
          <Box sx={{ color: "white", textAlign: "center" }}>
            <SectionTitle theme="light">
              {"Mais que empreendimentos criamos conexões".toUpperCase()}
            </SectionTitle>
            <Typography fontSize={21} sx={{ mt: 5 }}>
              Estar na vanguarda dos empreendimentos imobiliários e criar
              conexões com nossos sócios, clientes e comunidade nos impulsiona
              todos os dias.
            </Typography>
          </Box>

          <Partners />

          <Box sx={{ display: "flex" }}>
            <Link href="/sobre-nos" passHref>
              <Box component="a" sx={{ width: "fit-content", mx: "auto" }}>
                <ContainedWhiteButton>SAIBA MAIS</ContainedWhiteButton>
              </Box>
            </Link>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
