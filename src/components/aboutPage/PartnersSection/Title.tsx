import { Typography } from "@mui/material";
import { PropsWithChildren } from "react";

export const Title = ({ children }: PropsWithChildren<any>) => {
  return (
    <Typography
      sx={{ color: "white" }}
      textAlign={{ xs: "center", lg: "left" }}
      fontSize={28}
      letterSpacing={8}
      fontWeight={400}
    >
      {children}
    </Typography>
  );
};
