import {
  Box,
  Container,
  Stack,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback } from "react";
import { OutlinedWhiteButton } from "../../commons/Button";
import { PrimaryGradientCover } from "../../commons/GradientCover";
import { SectionTitle } from "../../commons/SectionTitle";

interface IProps {
  bgImage: string;
  logo: string;
  enterpriseName: string;
  text: string;
  buttonText: string;
  href: string;
  externalHref?: string;
}

const sxImage: SxProps<Theme> = {
  position: "absolute",
  height: "100%",
  width: "100%",
  backgroundSize: "cover",
};

const sxContent: SxProps<Theme> = {
  position: "absolute",
  width: "100%",
  height: "100%",
  zIndex: 500,
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
};

const sxLogo: SxProps<Theme> = {
  position: "relative",
  height: "100%",
  width: "20vw",
  minWidth: "7rem",
  maxWidth: "20rem",
  mb: 2,
};

export const Slide = ({
  bgImage,
  logo,
  enterpriseName,
  text,
  href,
  buttonText,
  externalHref,
}: IProps) => {
  const getLogo = useCallback(() => {
    if (logo) {
      return (
        <Box sx={sxLogo}>
          <Image
            src={logo}
            alt={enterpriseName}
            layout="fill"
            objectFit="contain"
          />
        </Box>
      );
    }
    return (
      <Stack height="100%" justifyContent="center">
        <SectionTitle theme="light">
          {enterpriseName.toUpperCase()}
        </SectionTitle>
      </Stack>
    );
  }, [enterpriseName, logo]);

  return (
    <Box sx={{ position: "relative", zIndex: 500, height: "100%" }}>
      <Box
        sx={{
          ...sxImage,
          backgroundImage: `url("${bgImage}")`,
        }}
      />
      <PrimaryGradientCover />
      <Box sx={sxContent}>
        <Container
          sx={{
            display: "flex",
            height: "100%",
            pb: { xs: 2, md: 10 },
            pt: { xs: 10, md: 20 },
          }}
        >
          <Stack
            sx={{ mx: "auto" }}
            alignItems="center"
            justifyContent="flex-end"
          >
            {getLogo()}

            <Typography
              fontSize={{ xs: 12, md: 21 }}
              letterSpacing={4}
              textAlign="center"
              sx={{ color: "white", mt: "auto", mb: 2 }}
            >
              {text}
            </Typography>

            <Link
              href={externalHref ?? "/portfolio/[slug]"}
              as={externalHref ? undefined : "/portfolio/" + href}
              passHref
            >
              <a target={externalHref ? "_blank" : "_self"}>
                <OutlinedWhiteButton sx={{ width: "fit-content" }}>
                  {buttonText}
                </OutlinedWhiteButton>
              </a>
            </Link>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
