import { Box, SxProps, Stack, Typography } from "@mui/material";

export interface IArticleBannerProps {
  articleData: {
    background: string;
    date: string;
    title: string;
    slug: string;
  };
  sx?: SxProps;
}

export const ArticleBanner = ({
  articleData: { background, date, title, slug },
  sx,
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
        sx={{ height: "100%", width: "100%", color: "white", p: 2 }}
      >
        <Typography fontSize={12}>{dateToUse.toUpperCase()}</Typography>
        <Typography fontSize={24}>{title}</Typography>
      </Stack>
    </Box>
  );
};
