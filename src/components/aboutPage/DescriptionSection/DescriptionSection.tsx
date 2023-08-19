import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const text1 = `A Campos Incorporadora tem em seu DNA a inspiração.

Nasceu inspirada na conexão entre amigos motivados pelo desejo de crescer, buscar algo novo e empreender.`;

const text2 = `O que era desejo se tornou realidade através da formação de um grupo de investimentos.

Grupo este que olha para o futuro, que busca o resultado através da relação "ganha-ganha" e que preza pela qualidade de vida dos seus parceiros.

Seus empreendimentos foram cuidadosamente nominados com praças italianas, que denota robustez, imponência, características arquitetônicas marcantes, planejamento dos espaços, convergência e centralidade.`;

const DescriptionSection = () => {
  return (
    <Box id="description">
      <Container
        sx={{ py: { xs: 10, lg: 20 }, maxWidth: 780 }}
        maxWidth={false}
      >
        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }}
          gap={{ xs: 4, sm: 8 }}
        >
          <Stack spacing={4}>
            <Typography
              fontFamily="couturier"
              fontSize={{ xs: 42, sm: 56, md: 64 }}
              lineHeight={1}
              letterSpacing={-2}
              sx={{ fontVariantLigatures: "none" }}
              color="secondary"
            >
              Nossa
              <br />
              História
            </Typography>

            <Typography whiteSpace="pre-wrap">{text1}</Typography>
          </Stack>

          <Typography whiteSpace="pre-wrap">{text2}</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default DescriptionSection;
