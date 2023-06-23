import React, { useMemo } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { getLocationString } from "../../helpers/getLocationString";

const enterpriseNameProps = {
  fontSize: 19,
  fontWeight: 600,
  lineHeight: 1,
  letterSpacing: 2,
  sx: {
    width: "fit-content",
    color: "#1a47bc",
    borderBottom: "2px solid #1A47BC",
  },
};

const sxImage = {
  position: "relative",
  height: { xs: "unset", sm: "unset", md: "22rem" },
  aspectRatio: { xs: "1 / 1", md: "unset" },
  width: "100%",
  overflow: "hidden",
  maxWidth: { xs: "unset", md: "22rem" },
};

const sxStatus = {
  position: "absolute",
  right: {
    xs: "50%",
    sm: 0,
  },
  top: {
    xs: 0,
    sm: "50%",
    // md: '100%',
    lg: "50%",
  },
  transform: {
    xs: "translate(50%, -50%)",
    sm: "translate(0%, -50%)",
    md: "translate(0%, -50%)",
    // md: 'translate(-25%, -125%)',
    lg: "translate(15%, -50%)",
  },
  width: "12rem",
  py: 3,
  px: 2,
  color: "white",
  textAlign: "center",
};

const sxInfos = {
  p: {
    xs: "5rem 2rem 2rem 2rem",
    sm: "3rem 12rem 3rem 3rem",
  },
  display: "flex",
  flexDirection: "column",
  gap: ".5rem",
  width: "100%",
  position: "relative",
};

const boxShadow =
  "0px 10px 13px -6px rgb(26 71 188 / 20%), 0px 20px 31px 3px rgb(26 71 188 / 14%), 0px 8px 38px 7px rgb(26 71 188 / 12%)";

export const EnterpriseCard = ({ enterprise }) => {
  const statusBgColorMemo = useMemo(() => {
    switch (enterprise.Status) {
      case "Pré Lançamento":
        return "rgb(26, 71, 188)";
      default:
        return "primary.main";
    }
  }, [enterprise.Status]);

  return (
    <Link
      href="/portfolio/[slug]"
      as={`/portfolio/${enterprise.Slug}`}
      passHref
    >
      <a>
        <Box sx={{ height: "fit-content", width: "100%", boxShadow }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            sx={{ height: "100%" }}
          >
            <Box sx={sxImage}>
              <Image
                src={enterprise.Thumb.data.attributes.url}
                alt={enterprise.Nome}
                objectFit="cover"
                width="100%"
                height="100%"
                layout="fill"
                objectPosition="left bottom"
              />
            </Box>
            <Box sx={sxInfos}>
              <Typography {...enterpriseNameProps}>
                {enterprise.Nome.toUpperCase()}
              </Typography>
              <Typography fontSize={16} fontWeight={500}>
                {getLocationString(enterprise)}
              </Typography>
              {enterprise.infosCardEmpreendimentos.Descricao2 && (
                <Typography fontSize={14} sx={{ whiteSpace: "pre-wrap" }}>
                  {enterprise.Descricao2}
                </Typography>
              )}
              {enterprise.infosCardEmpreendimentos.Descricao1 && (
                <Typography
                  fontSize={14}
                  sx={{ mt: "1rem", whiteSpace: "pre-wrap" }}
                >
                  {enterprise.Descricao1}
                </Typography>
              )}
              <Typography
                fontSize={15}
                fontWeight={700}
                sx={{
                  mt: { xs: "1rem", md: "auto" },
                  width: "fit-content",
                  color: "#1a47bc",
                  borderBottom: "1px solid #1A47BC",
                }}
              >
                SAIBA MAIS
              </Typography>
              <Box bgcolor={statusBgColorMemo} sx={sxStatus}>
                <Typography fontSize={13} letterSpacing={3}>
                  {enterprise.Status.toUpperCase()}
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Box>
      </a>
    </Link>
  );
};
