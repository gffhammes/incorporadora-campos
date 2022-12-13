import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { sxEllipsis } from "../../../helpers/sxEllipsis";

interface IArticleListItemProps {
  article: any;
}

export const ArticleListItem = ({ article }: IArticleListItemProps) => {
  return (
    <Link href={`/blog/${article.slug}`} passHref>
      <Stack
        component="a"
        direction="row"
        alignItems="center"
        spacing={3}
        sx={{ maxWidth: "100%" }}
      >
        <Box
          sx={{
            position: "relative",
            height: "10rem",
            width: "16rem",
            borderRadius: 1,
            overflow: "hidden",
          }}
        >
          <Image
            src={article.capa.data.attributes.url}
            alt="teste"
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <Box sx={{ flexBasis: "30%" }}>
          <Typography fontSize={18} fontWeight={600} sx={sxEllipsis(2)}>
            {article.titulo}
          </Typography>
          <Typography fontSize={14} sx={sxEllipsis(2)}>
            {article.texto}
          </Typography>
        </Box>
      </Stack>
    </Link>
  );
};
