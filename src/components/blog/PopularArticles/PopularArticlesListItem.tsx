import { Box, Typography, Paper } from "@mui/material";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Link from "next/link";
import { sxEllipsis } from "../../../helpers/sxEllipsis";

export type IArticle = any;

interface IPopularArticlesListItemProps {
  article: IArticle;
}
export const PopularArticlesListItem = ({
  article,
}: IPopularArticlesListItemProps) => {
  const dateObject = new Date(article.data);

  const dateToUse = dateObject.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/blog/${article.slug}`} passHref>
      <a style={{ maxWidth: "100%" }}>
        <Paper variant="outlined" sx={{ borderRadius: 2, overflow: "hidden" }}>
          <Stack direction="row" alignItems="center">
            <Box
              sx={{
                position: "relative",
                width: "21rem",
                height: "15rem",
                flexShrink: 0,
              }}
            >
              <Image
                src={article.capa.data.attributes.url}
                alt={article.titulo}
                layout="fill"
                objectFit="cover"
              />
            </Box>

            <Box sx={{ flexGrow: "1", p: 4, overflow: "hidden" }}>
              <Typography sx={sxEllipsis(3)} fontWeight={600}>
                {article.titulo}
              </Typography>

              <Typography fontSize={14} fontStyle="italic" sx={{ mb: 2 }}>
                Por <u>{article.autor}</u> em {dateToUse}
              </Typography>

              <Typography fontSize={14} sx={sxEllipsis(2)}>
                {article.texto.replaceAll("**", "")}
              </Typography>

              <Typography fontSize={14} fontWeight={600}>
                <u>Leia mais</u>
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </a>
    </Link>
  );
};
