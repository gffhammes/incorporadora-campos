import { Box, Divider } from "@mui/material";
import { HeroSection } from "../../src/components/blog/HeroSection";
import { MainArticles } from "../../src/components/blog/MainArticles/MainArticles";
import { PopularArticles } from "../../src/components/blog/PopularArticles/PopularArticles";
import { Footer } from "../../src/components/commons/Footer/Footer";
import { useBreakpoint } from "../../src/hooks/useBreakpoint";
import { articles } from "../../src/data/blog";

const Blog = () => {
  const { md } = useBreakpoint();
  const articlesSortedByViews = [...articles];

  articlesSortedByViews.sort((a, b) => {
    const aViews = parseInt(a.attributes.contadorDeViews);
    const bViews = parseInt(b.attributes.contadorDeViews);
    return bViews - aViews;
  });

  const articlesSortedByDate = [...articles];

  articlesSortedByDate.sort((a, b) => {
    const aDate = new Date(a.attributes.data);
    const bDate = new Date(b.attributes.data);
    return bDate.getTime() - aDate.getTime();
  });

  return (
    <Box component="main" sx={{ height: "100%" }}>
      <HeroSection />

      <MainArticles articles={articlesSortedByDate} />

      {md && (
        <>
          <Divider />

          <PopularArticles articles={articlesSortedByViews} />
        </>
      )}

      <Footer />
    </Box>
  );
};

// export const getServerSideProps = async () => {
//   const { API_URL } = process.env;

//   const articlesQuery = qs.stringify(
//     {
//       populate: ["capa"],
//     },
//     {
//       encodeValuesOnly: true,
//     }
//   );

//   const res = await fetch(`${API_URL}/api/blog-posts?${articlesQuery}`);
//   const data = await res.json();

//   return {
//     props: {
//       articles: data.data,
//     },
//   };
// };

export default Blog;
