import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { SectionTitle } from "../commons/SectionTitle";
import Filters from "./Filters";
import { IEnterprise } from "../../interfaces/strapiLocal";

interface IProps {
  enterprises: IEnterprise[];
  handleFilter({
    city,
    district,
    buildingStatus,
  }: {
    city: string;
    district: string;
    buildingStatus: string;
  }): void;
}

export const HeroSection = ({ enterprises, handleFilter }: IProps) => {
  return (
    <Box
      sx={{
        height: { xs: "40%", sm: "35%" },
        minHeight: { xs: "530px", sm: "460px" },
        display: "flex",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage: "url(/images/empreendimentos-banner.png)",
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
          display: "flex",
          pt: { xs: "5rem", md: "10rem" },
          position: "absolute",
          zIndex: 300,
        }}
      >
        <Container sx={{ my: "auto" }}>
          <Stack spacing={{ xs: 3, lg: 5 }}>
            <Box>
              <SectionTitle theme="light">PORTFÓLIO</SectionTitle>
            </Box>

            <Box>
              <Filters enterprises={enterprises} handleFilter={handleFilter} />
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
