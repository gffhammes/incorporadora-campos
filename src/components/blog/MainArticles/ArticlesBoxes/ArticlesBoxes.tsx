import { Box } from "@mui/material";
import { ArticleBanner } from "./ArticleBanner";

interface IArticlesBoxesProps {
  articles: any[];
}

export const ArticlesBoxes = ({ articles }: IArticlesBoxesProps) => {
  return (
    <Box
      display="grid"
      gridTemplateAreas={gridTemplateAreas}
      gridTemplateRows="250px 250px"
      gridTemplateColumns="71fr 34fr"
      gap={4}
      width="100%"
    >
      <ArticleBanner
        size="big"
        sx={{ gridArea: "big" }}
        articleData={{
          background: articles[0].attributes.capa?.data.attributes.url,
          date: articles[0].attributes.data,
          slug: articles[0].attributes.slug,
          title: articles[0].attributes.titulo,
        }}
      />
      <ArticleBanner
        sx={{ gridArea: "little1" }}
        articleData={{
          background: articles[1].attributes.capa?.data.attributes.url,
          date: articles[1].attributes.data,
          slug: articles[1].attributes.slug,
          title: articles[1].attributes.titulo,
        }}
      />
      <ArticleBanner
        sx={{ gridArea: "little2" }}
        articleData={{
          background: articles[2].attributes.capa?.data.attributes.url,
          date: articles[2].attributes.data,
          slug: articles[2].attributes.slug,
          title: articles[2].attributes.titulo,
        }}
      />
    </Box>
  );
};

const gridTemplateAreas = `
"big little1"
"big little2"
`;
