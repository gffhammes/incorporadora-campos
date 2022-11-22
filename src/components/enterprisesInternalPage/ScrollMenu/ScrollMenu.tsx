import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { defaultLinkHoverProps } from "../../../constants/defaultLinkHover";
import { scrollToTarget } from "../../../helpers/scrollToTarget";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import { getScrollLinks } from "./getScrollLinks";
import { MobileScrollMenu } from "./MobileScrollMenu";

export const ScrollMenu = ({ enterpriseData: { Seccoes } }) => {
  const { lg } = useBreakpoint();

  const scrollLinks = getScrollLinks(Seccoes);

  return lg ? (
    <Box
      bgcolor="secondary.main"
      id="internal-scroll-menu"
      sx={{ position: "sticky", top: 50, zIndex: 999 }}
    >
      <Container sx={{ py: { xs: 4, lg: 3 }, color: "white" }}>
        <Grid container spacing={4} justifyContent="center">
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
        </Grid>
      </Container>
    </Box>
  ) : (
    <MobileScrollMenu sections={Seccoes} />
  );
};
