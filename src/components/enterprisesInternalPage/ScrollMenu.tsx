import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { defaultLinkHoverProps } from "../../constants/defaultLinkHover";
import { scrollToTarget } from "../../helpers/scrollToTarget";

export const ScrollMenu = ({ enterpriseData }) => {
  const { Seccoes } = enterpriseData;

  const scrollLinks = [
    {
      label: "O Empreendimento",
      targetId: "the-enterprise",
    },
  ];

  if (Seccoes.Diferenciais) {
    scrollLinks.push({
      label: "Diferenciais",
      targetId: "differentials",
    });
  }

  if (Seccoes.Plantas) {
    scrollLinks.push({
      label: "Opções de Planta",
      targetId: "plan-options",
    });
  }

  if (Seccoes.Mapa) {
    scrollLinks.push({
      label: "Localização",
      targetId: "localization",
    });
  }

  return (
    <Box bgcolor="secondary.main" id="internal-scroll-menu">
      <Container sx={{ py: { xs: 4, lg: 3 }, color: "white" }}>
        <Grid container spacing={4} justifyContent="center">
          {scrollLinks.map((link, index) => (
            <Grid item key={index} xs={12} lg={3}>
              <Box
                onClick={() => {
                  scrollToTarget(link.targetId);
                }}
                sx={{ width: "fit-content", mx: "auto" }}
              >
                <Typography
                  letterSpacing={1}
                  fontWeight={300}
                  textAlign="center"
                  sx={{
                    ...defaultLinkHoverProps,
                    width: "fit-content",
                    cursor: "pointer",
                  }}
                >
                  {link.label.toUpperCase()}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
