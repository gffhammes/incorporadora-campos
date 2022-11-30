import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { FollowUs, FollowUsIcons } from "../FollowUs";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useWhatsappLink } from "../../../hooks/useWhatsappLink";
import { useGlobalsContext } from "../../../contexts/useGlobalsContext";

export const TopBar = () => {
  const { data } = useGlobalsContext();
  const theme = useTheme();
  const sizeSm = useMediaQuery(theme.breakpoints.up("sm"));
  const whatsappLink = useWhatsappLink();

  return (
    <Box bgcolor="#0d235e" sx={{ color: "white", py: 0.75 }}>
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          {sizeSm ? <FollowUs /> : <FollowUsIcons />}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="whatsapp-header"
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <WhatsAppIcon sx={{ fontSize: 18 }} />
              <Typography fontSize={12}>{data.phone}</Typography>
            </Stack>
          </a>
        </Stack>
      </Container>
    </Box>
  );
};
