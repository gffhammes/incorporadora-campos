import { Box, Divider } from "@mui/material";
import * as qs from "qs";
import { Author } from "../../src/components/blog/Article/Author";
import { MainImage } from "../../src/components/blog/Article/MainImage";
import { Related } from "../../src/components/blog/Article/Related";
import { Text } from "../../src/components/blog/Article/Text";
import { HeroSection } from "../../src/components/blog/HeroSection";
import { Footer } from "../../src/components/commons/Footer/Footer";

const Article = ({ article }) => {
  return (
    <Box component="main" sx={{ height: "100%" }}>
      <HeroSection />

      <MainImage image={article.attributes.capa.data.attributes.url} />

      <Author
        author={article.attributes.autor}
        date={article.attributes.data}
      />

      <Text text={article.attributes.texto} />

      <Divider />

      <Related />

      <Footer />
    </Box>
  );
};

export const getServerSideProps = async (context) => {
  const { article } = context.query;
  const { API_URL } = process.env;

  const articlesQuery = qs.stringify(
    {
      filters: {
        slug: {
          $eq: article,
        },
      },
      populate: ["capa"],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await fetch(`${API_URL}/api/blog-posts?${articlesQuery}`);
  const data = await res.json();

  return {
    props: {
      article: data.data[0],
    },
  };
};

export default Article;
