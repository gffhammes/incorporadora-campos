import { Box, Container, Grid, Stack } from "@mui/material";
import { defaultSectionPadding } from "../../../constants/defaultSectionPadding";
import { ArticleBanner, IArticleBannerProps } from "./ArticleBanner";

interface IMainArticlesProps {
  articles: any[];
}

export const MainArticles = ({ articles }: IMainArticlesProps) => {
  return (
    <Container sx={{ py: defaultSectionPadding }}>
      <Box
        display="grid"
        gridTemplateAreas={gridTemplateAreas}
        gridTemplateRows="250px 250px"
        gridTemplateColumns="71fr 34fr"
        gap={4}
        width="100%"
      >
        <ArticleBanner
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
    </Container>
  );
};

const gridTemplateAreas = `
"big little1"
"big little2"
`;
