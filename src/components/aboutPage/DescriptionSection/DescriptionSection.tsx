import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { defaultSectionPadding } from "../../../constants/defaultSectionPadding";
import { ImageWithHover } from "./ImageWithHover";
import { Text } from "./Text";

type Props = {};

const text = `<strong>A Campos Incorporadora tem em seu DNA a inspiração.</strong>

Nasceu inspirada na conexão entre amigos motivados pelo desejo de crescer, buscar algo novo e empreender. O que era desejo se tornou realidade através da formação de um grupo de investimentos. Grupo este que olha para o futuro, que busca o resultado através da relação "ganha-ganha" e que preza pela qualidade de vida dos seus parceiros.

Seus empreendimentos foram cuidadosamente nominados com praças italianas. Que denota robustez, imponência, características arquitetônicas marcantes, planejamento dos espaços, convergência e centralidade.
`;

const DescriptionSection = (props: Props) => {
  return (
    <Box id="description">
      <Container sx={{ py: { xs: 10, lg: 20 } }}>
        <Stack
          direction={{ xs: "column", lg: "row" }}
          spacing={10}
          alignItems="center"
          justifyContent="center"
        >
          <ImageWithHover />

          <Text text={text} />
        </Stack>
      </Container>
    </Box>
  );
};

export default DescriptionSection;
