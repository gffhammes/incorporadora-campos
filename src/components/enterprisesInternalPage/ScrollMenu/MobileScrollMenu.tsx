import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useScrollspy } from "../../../hooks/useScrollspy";
import { getScrollLinks } from "./getScrollLinks";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { scrollToTarget } from "../../../helpers/scrollToTarget";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";
import { useBreakpoint } from "../../../hooks/useBreakpoint";

export const MobileScrollMenu = ({ sections }) => {
  const [title, setTitle] = useState("SELECIONE UM MENU");
  const [open, setOpen] = useState(false);
  const scrollLinks = getScrollLinks(sections);
  const ids = scrollLinks.map((link) => link.targetId);
  const { md } = useBreakpoint();

  const yOffset = md ? 225 : 275;

  const activeId = useScrollspy(ids, yOffset);
  const activeLink = scrollLinks.find((link) => link.targetId === activeId);

  const toggleOpen = () => setOpen((open) => !open);

  useEffect(() => {
    if (!activeLink) return;
    setTitle(activeLink.label);
  }, [activeLink]);

  return (
    <Box
      bgcolor="secondary.main"
      id="internal-scroll-menu"
      sx={{
        position: "sticky",
        top: { xs: 50, md: 0 },
        zIndex: 900,
        boxShadow: 3,
      }}
    >
      <StyledAccordion expanded={open} onChange={toggleOpen}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {open ? "SELECIONE UM MENU" : title.toUpperCase()}
        </AccordionSummary>

        <AccordionDetails>
          <Stack spacing={2}>
            {scrollLinks.map((link) => (
              <Typography
                key={link.label}
                onClick={() => {
                  scrollToTarget(link.targetId, yOffset);
                  toggleOpen();
                }}
              >
                {link.label.toUpperCase()}
              </Typography>
            ))}
          </Stack>
        </AccordionDetails>
      </StyledAccordion>
    </Box>
  );
};

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: "white",
}));
