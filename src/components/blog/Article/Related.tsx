import { Box, Container, Typography, Stack } from "@mui/material";
import { defaultSectionPadding } from "../../../constants/defaultSectionPadding";
import { RelatedArticleBox } from "./RelatedArticleBox";

interface IRelatedProps {
  articles: any[];
}

export const Related = ({ articles }: IRelatedProps) => {
  return (
    <Container maxWidth="md" sx={{ py: defaultSectionPadding }}>
      <Typography
        variant="h2"
        fontSize={32}
        fontWeight={600}
        textAlign="center"
        sx={{ mb: 6 }}
      >
        Artigos Relacionados
      </Typography>

      <Stack direction="row" spacing={4}>
        {articles.slice(0, 3).map((article) => (
          <RelatedArticleBox key={article.id} article={article.attributes} />
        ))}
      </Stack>
    </Container>
  );
};
