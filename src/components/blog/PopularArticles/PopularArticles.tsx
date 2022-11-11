import { Container, Typography } from "@mui/material";
import { defaultSectionPadding } from "../../../constants/defaultSectionPadding";
import { PopularArticlesList } from "./PopularArticlesList";
import { IArticle, PopularArticlesListItem } from "./PopularArticlesListItem";

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
      >
        Populares
      </Typography>

      <PopularArticlesList articles={articles} />
    </Container>
  );
};
