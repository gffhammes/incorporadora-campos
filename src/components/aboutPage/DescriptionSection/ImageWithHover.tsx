import { Box, Stack, SxProps, Typography } from "@mui/material";
import { ImageHoverText } from "./ImageHoverText";

export const ImageWithHover = () => {
  return (
    <Box sx={sxContainer}>
      <Box sx={sxImage} />
      <Box sx={sxHover}>
        <ImageHoverText />
      </Box>
    </Box>
  );
};

const sxContainer: SxProps = {
  height: { xs: "unset", sm: "25rem" },
  width: { xs: "100%", sm: "unset" },
  aspectRatio: "1.35 / 1",
  position: "relative",
};

const sxImage: SxProps = {
  position: "absolute",
  width: "100%",
  height: "100%",
  backgroundImage: "url(/images/sobre-nos-campos.png)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "100%",
};

const sxHover: SxProps = {
  position: "absolute",
  width: "100%",
  height: "100%",
  backgroundColor: { xs: "rgba(26, 71, 188, .87)", md: "transparent" },
  transition: "300ms ease all",
  boxShadow: "15px 31px 82px rgba(18, 50, 131, .48)",

  "& > div": {
    color: { xs: "white", md: "transparent" },
  },

  "&:hover": {
    backgroundColor: "rgba(26, 71, 188, .87)",

    "& > div": {
      color: "white",
    },
  },
};
