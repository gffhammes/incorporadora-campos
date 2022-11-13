import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import { defaultSectionPadding } from "../../../constants/defaultSectionPadding";
import { ArticlesBoxes } from "./ArticlesBoxes";
import { ArticlesList } from "./ArticlesList";

interface IMainArticlesProps {
  articles: any[];
}

export const MainArticles = ({ articles }: IMainArticlesProps) => {
  return (
    <Container sx={{ py: defaultSectionPadding }}>
      <Stack spacing={4}>
        <ArticlesBoxes articles={articles.slice(0, 3)} />
        <ArticlesList articles={articles.slice(3, articles.length)} />
      </Stack>
    </Container>
  );
};
