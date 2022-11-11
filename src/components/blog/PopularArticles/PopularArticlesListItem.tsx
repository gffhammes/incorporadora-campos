import { Box, Typography, Paper } from "@mui/material";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import { sxEllipsis } from "../../../helpers/sxEllipsis";

export type IArticle = any;

interface IPopularArticlesListItemProps {
  article: IArticle;
}
export const PopularArticlesListItem = ({
  article,
}: IPopularArticlesListItemProps) => {
  console.log(article);
  const dateObject = new Date(article.data);

  const dateToUse = dateObject.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <Paper variant="outlined" sx={{ borderRadius: 2, overflow: "hidden" }}>
      <Stack direction="row" alignItems="center">
        <Box
          sx={{
            position: "relative",
            width: "19rem",
            height: "12rem",
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

        <Box sx={{ flexGrow: "1", p: 2 }}>
          <Typography sx={sxEllipsis(3)} fontWeight={600}>
            {article.titulo}
          </Typography>

          <Typography fontSize={14} fontStyle="italic" sx={{ mb: 2 }}>
            Por {article.autor} em {dateToUse}
          </Typography>

          <Typography fontSize={14} sx={sxEllipsis(2)}>
            {article.texto}
          </Typography>

          <a>Leia mais</a>
        </Box>
      </Stack>
    </Paper>
  );
};
