import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { sxEllipsis } from "../../../helpers/sxEllipsis";

interface IRelatedArticleBoxProps {
  article: any;
}

export const RelatedArticleBox = ({ article }: IRelatedArticleBoxProps) => {
  const dateObject = new Date(article.data);

  const dateToUse = dateObject.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/blog/${article.slug}`} passHref>
      <Box component="a" sx={{ width: "100%" }}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: "1.25 / 1",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <Image
            src={article.capa.data.attributes.url}
            alt="Capa"
            layout="fill"
            objectFit="cover"
          />
        </Box>

        <Box sx={{ px: 2, mt: 1 }}>
          <Typography fontWeight={600} sx={sxEllipsis(2)}>
            {article.titulo}
          </Typography>

          <Typography fontSize={12}>{dateToUse.toUpperCase()}</Typography>

          <Typography fontWeight={600} fontSize={12} sx={{ mt: 1 }}>
            <u> Leia mais</u>
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};
