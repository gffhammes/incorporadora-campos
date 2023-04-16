import { Container, Typography } from "@mui/material";
import { defaultSectionPadding } from "../../../constants/defaultSectionPadding";
import { PopularArticlesList } from "./PopularArticlesList";
import { IArticle } from "./PopularArticlesListItem";

interface IPopularArticlesProps {
  articles: IArticle[];
}

export const PopularArticles = ({ articles }: IPopularArticlesProps) => {
  return (
    <Container maxWidth="md" sx={{ py: defaultSectionPadding }}>
      <Typography
        variant="h2"
        fontSize={32}
        fontWeight={600}
        textAlign="center"
        sx={{ mb: 6 }}
      >
        Populares
      </Typography>

      <PopularArticlesList articles={articles} />
    </Container>
  );
};
