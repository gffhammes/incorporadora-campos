import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { PropsWithChildren } from "react";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import { Carousel } from "../../commons/Carousel/Carousel";
import { Title } from "./Title";

const partners = [
  {
    src: "/images/logo-bolshoi.png",
    alt: "Bolshoi",
  },
  {
    src: "/images/logo_millebier.png",
    alt: "Mille Bier",
  },
  {
    src: "/images/assinatura-zico-pdf.png",
    alt: "Zico",
  },
];

const PartnersSection = () => {
  const { sm } = useBreakpoint();

  const slides = partners.map((partner) => (
    <Box sx={imageStyle} key={partner.alt}>
      <Image
        src={partner.src}
        layout="fill"
        alt={partner.alt}
        objectFit="contain"
      />
    </Box>
  ));

  const StackContainer = ({ children }: PropsWithChildren<{}>) => {
    return (
      <Stack
        direction={{ xs: "column", lg: "row" }}
        spacing={10}
        alignItems="center"
        justifyContent="space-between"
      >
        {children}
      </Stack>
    );
  };

  return (
    <Box bgcolor="#1B3781">
      {sm ? (
        <Container sx={{ py: 8 }}>
          <StackContainer>
            <Title>NOSSOS PARCEIROS</Title>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              sx={{
                flex: "max-content",
                width: { xs: "100%", sm: "70%", lg: "100%" },
                ml: { xs: 0, lg: "10rem!important" },
              }}
              spacing={8}
              alignItems="center"
            >
              {slides}
            </Stack>
          </StackContainer>
        </Container>
      ) : (
        <StackContainer>
          <Container sx={{ pt: 8 }}>
            <Title>NOSSOS PARCEIROS</Title>
          </Container>

          <Box sx={{ width: "100%", pb: 8 }}>
            <Carousel
              slides={slides}
              slideFlex="0 0 50%"
              spacing={4}
              options={{
                align: "center",
              }}
            />
          </Box>
        </StackContainer>
      )}
    </Box>
  );
};

const imageStyle = {
  position: "relative",
  margin: "auto",
  width: `100%`,
  height: { xs: "6rem", sm: "10rem" },
};

export default PartnersSection;
