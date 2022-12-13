import { Box, SxProps, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { sxEllipsis } from "../../../../helpers/sxEllipsis";
import { useBreakpoint } from "../../../../hooks/useBreakpoint";

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
  const { md } = useBreakpoint();
  const dateObject = new Date(date);

  const dateToUse = dateObject.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/blog/${slug}`} passHref>
      <Box
        component={md ? "a" : "div"}
        sx={{
          height: { xs: "min(20rem, 53vw)", md: "100%" },
          width: { xs: "80%", md: "100%" },
          maxWidth: { xs: "30rem", md: "unset" },
          borderRadius: 2,
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          position: "relative",
          ...sx,
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            position: "absolute",
            background:
              "linear-gradient(0deg, rgba(14, 30, 66, 1), rgba(14, 30, 66, 0.1))",
          }}
        />
        <Stack
          justifyContent="flex-end"
          alignItems="center"
          spacing={size === "small" ? 1 : 2}
          sx={{
            height: "100%",
            width: "100%",
            color: "white",
            position: "absolute",
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
    </Link>
  );
};
