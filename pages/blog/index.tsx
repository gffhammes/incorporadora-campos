import { Box } from "@mui/material";
import * as qs from "qs";
import { HeroSection } from "../../src/components/blog/HeroSection";
import { MainArticles } from "../../src/components/blog/MainArticles/MainArticles";

const Blog = ({ articles }) => {
  return (
    <Box component="main" sx={{ height: "100%" }}>
      <HeroSection />
      <MainArticles articles={articles} />
    </Box>
  );
};

export const getServerSideProps = async () => {
  const { API_URL } = process.env;

  const articlesQuery = qs.stringify(
    {
      populate: ["capa"],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const bannersResponse = await fetch(
    `${API_URL}/api/blog-posts?${articlesQuery}`
  );
  const bannersData = await bannersResponse.json();

  return {
    props: {
      articles: bannersData.data,
    },
  };
};

export default Blog;
