import { Box, Stack } from "@mui/material";
import { EnterpriseCardData } from "./EnterpriseCardData";
import { IStrapiEnterprise } from "../../../interfaces/strapi";
import { EnterpriseCardCarousel } from "./EnterpriseCardCarousel";
import { EnterpriseCardImageModel } from "./EnterpriseCardImageModel";
import { useBreakpoint } from "../../../hooks/useBreakpoint";

export interface IEnterpriseCardProps {
  enterprise: IStrapiEnterprise["attributes"];
}

export const EnterpriseCard = ({ enterprise }: IEnterpriseCardProps) => {
  const { sm } = useBreakpoint();

  return (
    <Stack gap={{ xs: ".5rem", sm: "1rem" }}>
      <Box
        display="grid"
        gridTemplateAreas={gridTemplateArea}
        gridTemplateColumns={gridTemplateColumns}
        gridTemplateRows={gridTemplateRows}
        gap={{
          xs: ".5rem",
          sm: "1rem",
        }}
        sx={{
          height: { xs: "fit-content", sm: "min(450px, 50vw, 60vh)" },
        }}
      >
        {sm && (
          <EnterpriseCardCarousel
            photos={enterprise.mosaico[0]?.carrossel.data}
          />
        )}

        <EnterpriseCardImageModel
          gridArea="image1"
          src={enterprise.mosaico[0]?.imagem1?.data?.attributes?.url ?? ""}
          alt={
            enterprise.mosaico[0]?.imagem1?.data?.attributes?.alternativeText ??
            ""
          }
        />

        <EnterpriseCardImageModel
          gridArea="image2"
          src={enterprise.mosaico[0]?.imagem2?.data?.attributes?.url ?? ""}
          alt={
            enterprise.mosaico[0]?.imagem2?.data?.attributes?.alternativeText ??
            ""
          }
        />

        <EnterpriseCardImageModel
          gridArea="image3"
          src={enterprise.mosaico[0]?.imagem3?.data?.attributes?.url ?? ""}
          alt={
            enterprise.mosaico[0]?.imagem3?.data?.attributes?.alternativeText ??
            ""
          }
        />

        {!sm && (
          <EnterpriseCardImageModel
            gridArea="image4"
            src={enterprise.mosaico[0]?.imagem4?.data?.attributes?.url ?? ""}
            alt={
              enterprise.mosaico[0]?.imagem4?.data?.attributes
                ?.alternativeText ?? ""
            }
          />
        )}
      </Box>

      <EnterpriseCardData
        city={enterprise.Endereco.Cidade}
        name={enterprise.Nome}
        slug={enterprise.Slug}
        status={enterprise.Status}
        text={enterprise.Descricao1}
      />
    </Stack>
  );
};

const gridTemplateArea = {
  xs: `
  "image1 image2"
  "image3 image2"
  "image3 image4"
  `,
  sm: `
  "carousel  image1  image3"
  "carousel  image1  image3"
  "carousel  image2  image2"
  `,
};

const gridTemplateColumns = {
  xs: "1fr 1fr",
  sm: "2fr 1fr 1fr",
};

const gridTemplateRows = {
  xs: "15vh 7vh 15vh",
  sm: "1fr .5fr 1.5fr",
};
