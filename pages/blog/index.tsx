import { Box, Divider } from "@mui/material";
import * as qs from "qs";
import { HeroSection } from "../../src/components/blog/HeroSection";
import { MainArticles } from "../../src/components/blog/MainArticles/MainArticles";
import { PopularArticles } from "../../src/components/blog/PopularArticles/PopularArticles";
import { Footer } from "../../src/components/commons/Footer/Footer";

const Blog = ({ articles }) => {
  const sortedArticles = [...articles];
  sortedArticles.sort((a, b) => {
    const aViews = parseInt(a.attributes.contadorDeViews);
    const bViews = parseInt(b.attributes.contadorDeViews);
    return bViews - aViews;
  });

  return (
    <Box component="main" sx={{ height: "100%" }}>
      <HeroSection />
      <MainArticles articles={articles} />

      <Divider />

      <PopularArticles articles={sortedArticles} />

      <Footer />
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

  const res = await fetch(`${API_URL}/api/blog-posts?${articlesQuery}`);
  const data = await res.json();

  return {
    props: {
      articles: data.data,
    },
  };
};

export default Blog;
