import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { defaultSectionPadding } from "../../constants/defaultSectionPadding";
import { SectionTitle } from "../commons/SectionTitle";

type Props = {};

const imageStyle = {
  position: "relative",
  width: { xs: "40%", sm: "100%", md: "10rem" },
  height: { xs: "6rem", sm: "10rem" },
};

const PartnersSection = (props: Props) => {
  return (
    <Box bgcolor="#E4E2E7" sx={{ py: 8 }}>
      <Container>
        <SectionTitle theme="blue" divider>
          NOSSOS PARCEIROS
        </SectionTitle>
      </Container>

      <Container maxWidth="sm">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{
            width: "100%",
          }}
          spacing={8}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box sx={imageStyle}>
            <Image
              src="/images/parceiros/bolshoi.png"
              layout="fill"
              alt="Bolshoi"
              objectFit="contain"
            />
          </Box>
          <Box sx={imageStyle}>
            <Box
              component={Image}
              src="/images/parceiros/millebier.png"
              layout="fill"
              alt="Mille Bier"
              objectFit="contain"
            />
          </Box>
          <Box sx={imageStyle}>
            <Image
              src="/images/parceiros/zico.png"
              layout="fill"
              alt="Zico"
              objectFit="contain"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default PartnersSection;
