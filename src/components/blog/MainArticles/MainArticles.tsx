import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import { defaultSectionPadding } from "../../../constants/defaultSectionPadding";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import { ArticlesBoxes } from "./ArticlesBoxes/ArticlesBoxes";
import { ArticlesBoxesMobile } from "./ArticlesBoxes/ArticlesBoxesMobile";
import { ArticlesList } from "./ArticlesList";

interface IMainArticlesProps {
  articles: any[];
}

export const MainArticles = ({ articles }: IMainArticlesProps) => {
  const { md } = useBreakpoint();

  const getSlicedArticles = () => {
    const boxes = articles.slice(0, 3);
    const list = articles.slice(3, articles.length);

    return { boxes, list };
  };

  const slicedArticles = getSlicedArticles();

  return (
    <Container sx={{ py: { xs: 5, md: defaultSectionPadding } }}>
      <Stack spacing={4}>
        {md ? (
          <ArticlesBoxes articles={slicedArticles.boxes} />
        ) : (
          <ArticlesBoxesMobile articles={articles} />
        )}

        {md && <ArticlesList articles={slicedArticles.list} />}
      </Stack>
    </Container>
  );
};
