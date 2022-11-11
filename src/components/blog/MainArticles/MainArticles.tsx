import { Container } from "@mui/material";
import { defaultSectionPadding } from "../../../constants/defaultSectionPadding";
import { ArticlesBoxes } from "./ArticlesBoxes";
import { ArticlesList } from "./ArticlesList";

interface IMainArticlesProps {
  articles: any[];
}

export const MainArticles = ({ articles }: IMainArticlesProps) => {
  return (
    <Container sx={{ py: defaultSectionPadding }}>
      <ArticlesBoxes articles={articles} />
      <ArticlesList />
    </Container>
  );
};
