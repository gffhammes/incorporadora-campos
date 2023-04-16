import { Box, IconButton } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { scrollToTarget } from "../../helpers/scrollToTarget";

interface Props {
  targetId: string;
}

export const FloatingDownArrowScroll = ({ targetId }: Props) => {
  return (
    <Box
      className="float"
      sx={{
        position: "absolute",
        zIndex: 500,
        color: "white",
        bottom: 0,
        right: "50%",
        mb: 5,
      }}
    >
      <IconButton
        onClick={() => {
          scrollToTarget(targetId);
        }}
        sx={{ color: "white", fontSize: "4rem" }}
      >
        <KeyboardArrowDownIcon fontSize="inherit" />
      </IconButton>
    </Box>
  );
};
