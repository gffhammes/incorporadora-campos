import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { Carousel } from "../commons/Carousel/Carousel";

const banks = [
  {
    name: "Santander",
    imageSrc: "/images/logos/logo-santander.png",
    href: "https://www.santander.com.br/creditos-e-financiamentos/para-sua-casa/credito-imobiliario",
  },
  {
    name: "Bradesco",
    imageSrc: "/images/logos/logo-bradesco.png",
    href: "https://banco.bradesco/html/classic/produtos-servicos/emprestimo-e-financiamento/encontre-seu-credito/simuladores-imoveis.shtm",
  },
  {
    name: "Caixa",
    imageSrc: "/images/logos/logo-caixa.png",
    href: "http://www8.caixa.gov.br/siopiinternet-web/simulaOperacaoInternet.do?method=iniciarCasoDeUsoSiteFeirao&isVoltar=true&vaEnquadra=10407",
  },
  {
    name: "Banco do Brasil",
    imageSrc: "/images/logos/logo-banco-do-brasil.png",
    href: "https://www42.bb.com.br/portalbb/imobiliario/creditoimobiliario/simular,802,2250,2250.bbx",
  },
];

const hoverFilter = {
  filter: "saturate(0)",
  transition: "filter 300ms ease",
  "&:hover": {
    filter: "saturate(100%)",
  },
};

export const SimulatorsSection = () => {
  const { md } = useBreakpoint();

  const slides = banks.map((bank, index) => (
    <Box key={index} sx={{ p: 2 }}>
      <Link href={bank.href} passHref>
        <a target="_blank">
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: "15rem",
              height: "4rem",
              m: "auto",
              ...hoverFilter,
            }}
          >
            <Image
              src={bank.imageSrc}
              alt={bank.name}
              layout="fill"
              objectFit="contain"
            />
          </Box>
        </a>
      </Link>
    </Box>
  ));

  return (
    <Box bgcolor="#f4f4f4">
      <Container sx={{ py: 3 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 5, md: 20 }}
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: "100%" }}
        >
          <Typography
            fontSize={{ xs: 16, sm: 28 }}
            letterSpacing={1}
            sx={{ width: "fit-content" }}
          >
            SIMULADORES
          </Typography>

          {md ? (
            <div style={{ width: "100%" }}>
              <Grid container spacing={5}>
                {banks.map((bank, index) => (
                  <Grid key={index} item xs={6} md={3}>
                    <Box
                      sx={{
                        width: "100%",
                        margin: { xs: "0 auto 0 auto", md: "0 0 0 auto" },
                      }}
                    >
                      <Link href={bank.href} passHref>
                        <a target="_blank">
                          <Box
                            sx={{
                              position: "relative",
                              width: "100%",
                              maxWidth: "10rem",
                              height: "4rem",
                              margin: "auto",
                              ...hoverFilter,
                            }}
                          >
                            <Image
                              src={bank.imageSrc}
                              alt={bank.name}
                              layout="fill"
                              objectFit="contain"
                            />
                          </Box>
                        </a>
                      </Link>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </div>
          ) : (
            <Box sx={{ width: "100%" }}>
              <Carousel
                slides={slides}
                showDots
                dotsColor="secondary"
                slideFlex="0 0 50%"
                options={{
                  align: 0,
                  containScroll: "trimSnaps",
                  slidesToScroll: 2,
                }}
              />
            </Box>
          )}
        </Stack>
      </Container>
    </Box>
  );
};
