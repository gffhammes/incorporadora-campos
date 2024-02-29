import { Box, Divider } from "@mui/material";
import Head from "next/head";
import * as qs from "qs";
import { useEffect } from "react";
import { Author } from "../../src/components/blog/Article/Author";
import { MainImage } from "../../src/components/blog/Article/MainImage";
import { Related } from "../../src/components/blog/Article/Related";
import { Text } from "../../src/components/blog/Article/Text";
import { HeroSection } from "../../src/components/blog/HeroSection";
import { Footer } from "../../src/components/commons/Footer/Footer";
import { updateArticleViews } from "../../src/helpers/updateArticleViews";
import { articles } from "../../src/data/blog";
import { useRouter } from "next/router";

const Article = () => {
  const router = useRouter();
  // useEffect(() => {
  //   if (process.env.NODE_ENV !== "production") return;
  //   updateArticleViews(article);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const article = articles.find(
    (article) => article.attributes.slug === router.query.article
  );

  if (!article) return null;

  return (
    <>
      <Head>
        <title>{article.attributes.titulo} | Campos Incorporadora</title>
      </Head>
      <Box component="main" sx={{ height: "100%" }}>
        <HeroSection />

        <MainImage
          title={article.attributes.titulo}
          image={article.attributes.capa.data.attributes.url}
        />

        <Author
          author={article.attributes.autor}
          date={article.attributes.data}
        />

        <Text text={article.attributes.texto} />

        <Divider />

        <Related articles={article.attributes.relacionados.data} />

        <Footer />
      </Box>
    </>
  );
};

// export const getServerSideProps = async (context) => {
//   const { article } = context.query;
//   const { API_URL } = process.env;

//   const articlesQuery = qs.stringify(
//     {
//       // filters: {
//       //   slug: {
//       //     $eq: article,
//       //   },
//       // },
//       populate: ["capa", "relacionados", "relacionados.capa"],
//     },
//     {
//       encodeValuesOnly: true,
//     }
//   );

//   const res = await fetch(`${API_URL}/api/blog-posts?${articlesQuery}`);
//   const data = await res.json();

//   return {
//     props: {
//       article: data,
//     },
//   };
// };

export default Article;
