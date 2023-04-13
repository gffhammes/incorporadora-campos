import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Carousel } from "../../commons/Carousel/Carousel";
import { IStrapiImage } from "../../../interfaces/strapi";
import { LoadingImage } from "../../commons/Image/LoadingImage";

const sxGrid = {
  display: "grid",
  gridTemplateAreas: {
    xs: `
      'b'
      'a'
      'c'
    `,
    md: `
      'a b'
      'a c'
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
  const carouselImages: IStrapiImage[] =
    enterpriseData.CarrosselPrimeiraSessao.data;

  const slides = carouselImages.map((item, index) => {
    return (
      <Box
        key={index}
        sx={{ position: "relative", height: "100%", width: "100%" }}
      >
        <LoadingImage
          src={item.attributes.url}
          alt={item.attributes.caption}
          layout="fill"
          objectFit="cover"
          objectPosition="left"
          priority
        />
      </Box>
    );
  });

  return (
    <Box id="the-enterprise">
      <Container sx={{ py: 7 }}>
        <Box sx={sxGrid}>
          <Box sx={{ gridArea: "a" }}>
            <Box
              sx={{
                position: "relative",
                height: { xs: "unset", md: "100%" },
                width: "100%",
                aspectRatio: "1 / 1",
              }}
            >
              {/* <Image
                src={enterpriseData.Thumb.data.attributes.url}
                alt={enterpriseData.Nome}
                layout="fill"
                objectFit="cover"
                objectPosition="left"
              /> */}
              <Carousel
                dotsColor="secondary"
                slideFlex="0 0 100%"
                slides={slides}
              />
            </Box>
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
        </Box>
      </Container>
    </Box>
  );
};
