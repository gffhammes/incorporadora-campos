import { Stack, Typography } from "@mui/material";

export const ImageHoverText = () => {
  return (
    <Stack
      sx={{
        transition: "300ms ease all",
        position: "absolute",
        width: "100%",
        height: "100%",
        p: { xs: 5, sm: 10 },
      }}
      justifyContent="center"
    >
      <Typography
        fontSize={{ xs: 16, sm: 32 }}
        fontWeight={300}
        letterSpacing={5}
        lineHeight={2.25}
      >
        MAIS DO QUE
        <br />
        EMPREENDIMENTOS,
        <br />
        <strong style={{ fontWeight: 500 }}>
          VERDADEIRAS
          <br />
          CONEXÕES
        </strong>
      </Typography>
    </Stack>
  );
};
