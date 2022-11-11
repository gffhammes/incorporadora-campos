import { Box, SxProps, Stack, Typography } from "@mui/material";
import { sxEllipsis } from "../../../helpers/sxEllipsis";

export interface IArticleBannerProps {
  articleData: {
    background: string;
    date: string;
    title: string;
    slug: string;
  };
  sx?: SxProps;
  size?: "small" | "big";
}

export const ArticleBanner = ({
  articleData: { background, date, title, slug },
  sx,
  size = "small",
}: IArticleBannerProps) => {
  const dateObject = new Date(date);

  const dateToUse = dateObject.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        borderRadius: 2,
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        ...sx,
      }}
    >
      <Stack
        justifyContent="flex-end"
        alignItems="center"
        spacing={size === "small" ? 1 : 2}
        sx={{
          height: "100%",
          width: "100%",
          color: "white",
          p: size === "small" ? 2 : 4,
        }}
      >
        <Typography fontSize={12}>{dateToUse.toUpperCase()}</Typography>
        <Typography
          fontSize={size === "small" ? 15 : 24}
          fontWeight={600}
          textAlign="center"
          sx={sxEllipsis(3)}
        >
          {title}
        </Typography>
      </Stack>
    </Box>
  );
};
