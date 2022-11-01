import {
  Box,
  Container,
  Grid,
  Stack,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { SlideImage } from "./SlideImage";
import { SlideText } from "./SlideText";

interface ISlideYearProps {
  year: string;
}

export const SlideYear = ({ year }: ISlideYearProps) => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: "secondary.main",
        width: { xs: "5rem", sm: "8rem" },
        height: { xs: "5rem", sm: "8rem" },
        borderRadius: "8rem",
        color: "white",
        p: 2,
        flex: { xs: "5rem", sm: "8rem" },
        position: "relative",
        zIndex: 200,
        mx: "auto",
      }}
    >
      <Typography
        fontSize={{ xs: 12, sm: 25 }}
        textAlign="center"
        letterSpacing={4}
      >
        {year}
      </Typography>
    </Stack>
  );
};
