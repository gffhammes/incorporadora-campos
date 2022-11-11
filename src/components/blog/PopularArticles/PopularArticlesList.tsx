import { Stack } from "@mui/material";
import { useState } from "react";
import { LoadingButton } from "../../commons/Button";
import { PopularArticlesListItem } from "./PopularArticlesListItem";

interface IArticlesListProps {
  articles: any[];
}

export const PopularArticlesList = ({ articles }: IArticlesListProps) => {
  const [seeMore, setSeeMore] = useState(false);

  const toggleSeeMore = () => {
    setSeeMore((seeMore) => !seeMore);
  };

  const articlesToShowQuantity = seeMore ? 4 : 2;

  const articlesToShow = articles.slice(0, articlesToShowQuantity);

  return (
    <Stack spacing={4} alignItems="center">
      {articlesToShow.map((article) => (
        <PopularArticlesListItem
          key={article.id}
          article={article.attributes}
        />
      ))}

      <LoadingButton color="primary" type="button" onClick={toggleSeeMore}>
        {seeMore ? "Ver menos" : "Ver mais"}
      </LoadingButton>
    </Stack>
  );
};
