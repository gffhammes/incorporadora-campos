import { Box, Stack } from "@mui/material";
import { EnterpriseCardData } from "./EnterpriseCardData";
import { EnterpriseCardCarousel } from "./EnterpriseCardCarousel";
import { EnterpriseCardImageModel } from "./EnterpriseCardImageModel";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import { IEnterprise } from "../../../interfaces/strapiLocal";
import { getNewImageUrl } from "../../../helpers/utils";

export interface IEnterpriseCardProps {
  enterprise: IEnterprise["attributes"];
}

export const EnterpriseCard = ({ enterprise }: IEnterpriseCardProps) => {
  const { sm, md } = useBreakpoint();

  return (
    <Stack gap={{ xs: ".5rem", sm: "1rem" }}>
      <Box
        display="grid"
        gridTemplateAreas={gridTemplateArea}
        gridTemplateColumns={gridTemplateColumns}
        gridTemplateRows={gridTemplateRows}
        gap={{
          xs: ".5rem",
          md: "1rem",
        }}
        sx={{
          height: {
            xs: "fit-content",
          },
        }}
      >
        <EnterpriseCardCarousel
          gridArea="carousel"
          photos={enterprise.mosaico?.carrossel.data ?? []}
        />

        <EnterpriseCardImageModel
          gridArea="image1"
          src={getNewImageUrl(enterprise.mosaico?.imagem1 ?? "")}
          alt=""
        />

        <EnterpriseCardImageModel
          gridArea="image2"
          src={getNewImageUrl(enterprise.mosaico?.imagem2 ?? "")}
          alt=""
        />

        {(!sm || md) && (
          <EnterpriseCardImageModel
            gridArea="image3"
            src={getNewImageUrl(enterprise.mosaico?.imagem3 ?? "")}
            alt=""
          />
        )}

        <EnterpriseCardData
          city={enterprise.Endereco.Cidade}
          name={enterprise.Nome}
          slug={enterprise.Slug}
          status={enterprise.Status}
          text={enterprise.Descricao1}
          externalHref={enterprise.redirectLink}
        />
      </Box>
    </Stack>
  );
};

const gridTemplateArea = {
  xs: `
  "image1     image2"
  "carousel   image2"
  "carousel   image3"
  "data       data"
  `,
  sm: `
  "carousel  image1  image1 image2"
  "carousel  data  data   data"
  `,
  md: `
  "carousel  image1  image1 image2"
  "carousel  image3  data   data"
  `,
};

const gridTemplateColumns = {
  xs: "1fr 1fr",
  sm: "6fr 1fr 2fr 3fr",
  md: "400px 2fr 1fr 3fr",
};

const gridTemplateRows = {
  xs: "15vh 7vh 15vh",
  sm: "210px 210px",
};
