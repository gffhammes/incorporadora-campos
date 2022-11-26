import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { defaultSectionPadding } from "../../../constants/defaultSectionPadding";
import { SectionTitle } from "../../commons/SectionTitle";
import { Partners } from "./Partners";

const imageStyle = {
  position: "relative",
  width: { xs: "40%", sm: "100%", md: "10rem" },
  height: { xs: "6rem", sm: "10rem" },
};

const PartnersSection = () => {
  return (
    <Box bgcolor="#E4E2E7" sx={{ py: 8 }}>
      <Container>
        <SectionTitle theme="blue" divider>
          NOSSOS PARCEIROS
        </SectionTitle>
      </Container>

      <Container maxWidth="sm">
        <Partners />
      </Container>
    </Box>
  );
};

export default PartnersSection;
