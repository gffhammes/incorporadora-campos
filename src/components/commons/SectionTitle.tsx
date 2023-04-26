import { Box, SxProps, Typography } from "@mui/material";
import React, { FC } from "react";

type TTheme = "light" | "dark" | "blue";

interface SectionTitleProps {
  children: any;
  theme?: TTheme;
  textAlign?: "left" | "center" | "right";
  marginBottom?: boolean;
  divider?: boolean;
  sx?: SxProps;
}

const getBorderColor = (theme: TTheme) => {
  switch (theme) {
    case "light":
      return "#fff";
    case "dark":
      return "#c6c6c6";
    case "blue":
      return "#0E1E42";
  }
};

export const SectionTitle: FC<SectionTitleProps> = ({
  theme = "dark",
  textAlign,
  marginBottom,
  children,
  divider = true,
  sx,
}) => {
  const textColor = theme === "light" ? "#fff" : "#0E1E42";
  const borderColor = getBorderColor(theme);

  const getMarginBottom = () => {
    if (marginBottom === false) {
      return 0;
    }

    return 4;
  };

  return (
    <>
      <Typography
        variant="h2"
        fontSize={{ xs: 16, sm: 24 }}
        fontWeight={500}
        letterSpacing={6}
        textAlign={textAlign ? textAlign : "center"}
        sx={{
          color: textColor,
          width: "fit-content",
          mx: textAlign ? "" : "auto",
          ...sx,
        }}
      >
        {children}
      </Typography>

      {divider && (
        <Box
          bgcolor={borderColor}
          sx={{
            width: "100%",
            maxWidth: { xs: "20ch", md: "42ch" },
            height: "1px",
            mx: "auto",
            mt: 4,
            mb: getMarginBottom(),
          }}
        />
      )}
    </>
  );
};
