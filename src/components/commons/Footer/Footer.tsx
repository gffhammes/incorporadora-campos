import { Box } from "@mui/material";
import { Subscribe } from "./Subscribe/Subscribe";
import { Copyright } from "./Copyright";
import { MainFooter } from "./MainFooter";

export const Footer = () => {
  return (
    <Box component="footer">
      <Subscribe />

      <MainFooter />

      <Copyright />
    </Box>
  );
};
