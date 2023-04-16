import { Box, Stack, SxProps, Theme, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import React from "react";
import { useWhatsappLink } from "../../hooks/useWhatsappLink";

const sxButton: SxProps<Theme> = {
  position: "fixed",
  zIndex: 500,
  height: "fit-content",
  width: "fit-content",
  backgroundColor: "#51c33a",
  left: 0,
  boxShadow: 10,
  color: "#fff",
  borderRadius: "0 1rem 1rem 0",
  bottom: "20%",
};

export const WhatsAppFloatButton = () => {
  const whatsappLink = useWhatsappLink();

  return (
    <Box sx={sxButton}>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-button"
      >
        <Stack alignItems="center" spacing={1} sx={{ p: 2 }}>
          <WhatsAppIcon sx={{ fontSize: 40 }} />
          <Typography fontWeight={500} letterSpacing={1} fontSize={12}>
            WHATSAPP
          </Typography>
        </Stack>
      </a>
    </Box>
  );
};
