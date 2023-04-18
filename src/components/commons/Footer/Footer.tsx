import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { pages } from "../../../constants/pages";
import { FollowUs } from "../FollowUs";
import LogoHorizontal from "../../../../public/vectors/logo-horizontal.svg";
import { defaultLinkHoverProps } from "../../../constants/defaultLinkHover";
import { Subscribe } from "./Subscribe/Subscribe";
import { Copyright } from "./Copyright";
import { useGlobalsContext } from "../../../contexts/useGlobalsContext";

const defaultSpacing = 1.5;

const anchorCommonProps = {
  target: "_blank",
  rel: "noreferrer",
  style: { width: "fit-content" },
};

export const Footer = () => {
  const { data } = useGlobalsContext();

  return (
    <Box component="footer">
      <Subscribe />
      
      <Box bgcolor="primary.main" sx={{ color: "#fff", py: 7 }}>
        <Container>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            justifyContent="space-between"
          >
            <Box
              sx={{
                width: "25vw",
                minWidth: "15rem",
                maxWidth: "20rem",
                height: "100%",
              }}
            >
              <LogoHorizontal width="100%" height="100%" />
            </Box>
            <Stack spacing={defaultSpacing}>
              {pages.map((page, index) => (
                <Link key={index} href={page.route} passHref>
                  <Box component="a" sx={defaultLinkHoverProps}>
                    <Typography fontSize={12} letterSpacing={0.5}>
                      {page.name.toUpperCase()}
                    </Typography>
                  </Box>
                </Link>
              ))}
            </Stack>

            <Stack spacing={1}>
              <a href={`tel:${data.phone}`} {...anchorCommonProps}>
                <Typography fontSize={14} fontWeight="bold">
                  {data.phone}
                </Typography>
              </a>
              <a href={`mailto:${data.email}`} {...anchorCommonProps}>
                <Typography fontSize={14}>{data.email}</Typography>
              </a>
              <a
                href={`https://www.google.com.br/maps/place/${data.address}`}
                {...anchorCommonProps}
              >
                <Typography fontSize={14}>{data.address}</Typography>
              </a>
              <FollowUs />
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Copyright />
    </Box>
  );
};
