import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const NotFound = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      sx={{ minHeight: "60vh" }}
      alignItems="center"
      justifyContent="center"
      spacing={5}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "20rem",
          height: "10rem",
        }}
      >
        <Image
          src="/vectors/undraw_house_searching_re_stk8.svg"
          alt="Não encontrado"
          layout="fill"
          objectFit="contain"
        />
      </Box>
      <Box>
        <Typography textAlign={{ xs: "center", md: "left" }} variant="h5">
          Nenhum empreendimento encontrado
        </Typography>
        <Typography textAlign={{ xs: "center", md: "left" }}>
          Se você fez algum filtro, tente refazê-lo
        </Typography>
      </Box>
    </Stack>
  );
};
