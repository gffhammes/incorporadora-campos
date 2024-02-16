import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { IOurHistoryText } from "../../../interfaces/strapi";

export interface IDescriptionSectionProps {
  ourHistoryText: IOurHistoryText | null;
}

const DescriptionSection = ({ ourHistoryText }: IDescriptionSectionProps) => {
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
              {ourHistoryText?.titulo}
            </Typography>

            <Typography whiteSpace="pre-wrap">
              {ourHistoryText?.texto1}
            </Typography>
          </Stack>

          <Typography whiteSpace="pre-wrap">
            {ourHistoryText?.texto2}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default DescriptionSection;
