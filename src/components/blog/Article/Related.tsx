import { Box, Container, Typography, Stack } from "@mui/material";
import { defaultSectionPadding } from "../../../constants/defaultSectionPadding";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import { Carousel } from "../../commons/Carousel/Carousel";
import { ArticleBanner } from "../MainArticles/ArticlesBoxes/ArticleBanner";
import { RelatedArticleBox } from "./RelatedArticleBox";

interface IRelatedProps {
  articles: any[];
}

export const Related = ({ articles }: IRelatedProps) => {
  const { md } = useBreakpoint();

  const slides = articles.map((article) => (
    <ArticleBanner
      key={article.id}
      articleData={{
        background: article.attributes.capa.data.attributes.url,
        date: article.attributes.data,
        title: article.attributes.titulo,
        slug: article.attributes.slug,
      }}
      sx={{ mx: "auto" }}
    />
  ));

  return (
    <>
      <Container maxWidth="md" sx={{ pt: defaultSectionPadding }}>
        <Typography
          variant="h2"
          fontSize={{ xs: 20, md: 32 }}
          fontWeight={600}
          textAlign="center"
          sx={{ mb: 6 }}
        >
          Artigos Relacionados
        </Typography>
      </Container>

      {md ? (
        <Container maxWidth="md" sx={{ pb: defaultSectionPadding }}>
          <Stack direction="row" spacing={4}>
            {articles.slice(0, 3).map((article) => (
              <RelatedArticleBox
                key={article.id}
                article={article.attributes}
              />
            ))}
          </Stack>
        </Container>
      ) : (
        <Box sx={{ pb: defaultSectionPadding }}>
          <Carousel slides={slides} dotsColor="secondary" showDots />
        </Box>
      )}
    </>
  );
};
