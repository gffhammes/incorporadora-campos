import { SxProps } from "@mui/material";

export const sxEllipsis = (lines: number): SxProps => {
  return {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: lines,
    WebkitBoxOrient: "vertical",
  };
};
