import { Box, Container, Grid, Typography } from "@mui/material";
import { link } from "fs";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { defaultLinkHoverProps } from "../../../constants/defaultLinkHover";
import { scrollToTarget } from "../../../helpers/scrollToTarget";
import { useScrollspy } from "../../../hooks/useScrollspy";
import { getScrollLinks } from "./getScrollLinks";

export const MobileScrollMenu = ({ sections }) => {
  const scrollLinks = getScrollLinks(sections);
  const ids = scrollLinks.map((link) => link.targetId);

  const activeId = useScrollspy(ids, 50);
  const activeLink = scrollLinks.find((link) => link.targetId === activeId);

  const [title, setTitle] = useState(scrollLinks[0].label);

  useEffect(() => {
    if (!activeLink) return;
    setTitle(activeLink.label);
  }, [activeLink]);

  return (
    <Box
      bgcolor="secondary.main"
      id="internal-scroll-menu"
      sx={{ position: "sticky", top: 50, zIndex: 999 }}
    >
      <Container sx={{ py: { xs: 4, lg: 3 }, color: "white" }}>
        <Typography>{title}</Typography>

        {/* <Grid container spacing={4} justifyContent="center">
          {scrollLinks.map((link, index) => (
            <Grid item key={index} xs={12} lg={3}>
              <Box
                onClick={() => {
                  scrollToTarget(link.targetId);
                }}
                sx={{ width: "fit-content", mx: "auto" }}
              >
                <Typography
                  letterSpacing={1}
                  fontWeight={300}
                  textAlign="center"
                  sx={{
                    ...defaultLinkHoverProps,
                    width: "fit-content",
                    cursor: "pointer",
                  }}
                >
                  {link.label.toUpperCase()}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid> */}
      </Container>
    </Box>
  );
};
