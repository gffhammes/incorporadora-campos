import { Box } from "@mui/material";
import { TopBar } from "./TopBar";
import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    <Box
      component="header"
      sx={{ position: "absolute", width: "100%", zIndex: 999 }}
    >
      <TopBar />
      <NavBar />
    </Box>
  );
};
