import { ContainedSecondaryButton } from "../commons/Button";
import { useWhatsappLink } from "../../hooks/useWhatsappLink";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box } from "@mui/material";

export const ContactButton = () => {
  const whatsappLink = useWhatsappLink();

  return (
    <Box display="flex">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-button"
        // style={{ width: "fit-content" }}
      >
        <ContainedSecondaryButton>
          <WhatsAppIcon sx={{ mr: 1 }} />
          FALE CONOSCO
        </ContainedSecondaryButton>
      </a>
    </Box>
  );
};
