import { Box } from "@mui/material";
import { ReactNode } from "react";

export interface IAspectRatioProps {
  aspectRatio?: number;
  width?: string;
  children: ReactNode;
}

export const AspectRatio = ({
  aspectRatio,
  children,
  width,
}: IAspectRatioProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: width ?? "100%",
        paddingTop: aspectRatio ?? "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          bottom: 0,
          top: 0,
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
