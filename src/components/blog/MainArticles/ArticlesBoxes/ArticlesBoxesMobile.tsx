import { Stack } from "@mui/material";
import { useState } from "react";
import { LoadingButton } from "../../../commons/Button";
import { ArticleBanner } from "./ArticleBanner";

interface IArticlesBoxesMobileProps {
  articles: any[];
}

export const ArticlesBoxesMobile = ({
  articles,
}: IArticlesBoxesMobileProps) => {
  const [seeMore, setSeeMore] = useState(false);

  const toggleSeeMore = () => {
    setSeeMore((seeMore) => !seeMore);
  };

  const articlesToShowQuantity = seeMore ? articles.length : 2;

  const articlesToShow = articles.slice(0, articlesToShowQuantity);

  return (
    <Stack alignItems="center" spacing={3}>
      {articlesToShow.map((article) => {
        return (
          <ArticleBanner
            key={JSON.stringify(article)}
            size="small"
            articleData={{
              background: article.attributes.capa?.data.attributes.url,
              date: article.attributes.data,
              slug: article.attributes.slug,
              title: article.attributes.titulo,
            }}
          />
        );
      })}

      <LoadingButton color="primary" type="button" onClick={toggleSeeMore}>
        {seeMore ? "Ver menos" : "Ver mais"}
      </LoadingButton>
    </Stack>
  );
};
