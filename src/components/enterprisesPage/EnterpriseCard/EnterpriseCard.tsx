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
    <Stack gap={{ xs: ".5rem", md: "1rem" }}>
      <Box
        display="grid"
        gridTemplateAreas={gridTemplateArea}
        gridTemplateColumns={gridTemplateColumns}
        gridTemplateRows={gridTemplateRows}
        gap={{ xs: ".5rem", md: "1rem" }}
      >
        {sm && <EnterpriseCardCarousel photos={enterprise.Galeria.data} />}

        <EnterpriseCardImageModel
          gridArea="image1"
          src={enterprise.Galeria?.data?.[0].attributes.url ?? ""}
          alt={enterprise.Galeria?.data?.[0].attributes.url ?? ""}
        />

        <EnterpriseCardImageModel
          gridArea="image2"
          src={enterprise.Galeria?.data?.[1].attributes.url ?? ""}
          alt={enterprise.Galeria?.data?.[1].attributes.url ?? ""}
        />

        <EnterpriseCardImageModel
          gridArea="image3"
          src={enterprise.Galeria?.data?.[2]?.attributes.url ?? ""}
          alt={enterprise.Galeria?.data?.[2]?.attributes.url ?? ""}
        />

        <EnterpriseCardImageModel
          gridArea="image4"
          src={enterprise.Galeria?.data?.[3]?.attributes.url ?? ""}
          alt={enterprise.Galeria?.data?.[3]?.attributes.url ?? ""}
        />
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
  "data   data"
  `,
  sm: `
  "carousel  image1  image3"
  "carousel  image1  image4"
  "carousel  image2  image4"
  `,
};

const gridTemplateColumns = {
  xs: "1fr 1fr",
  sm: "400px 1fr 1fr",
};

const gridTemplateRows = {
  xs: "15vh 7vh 15vh 1fr",
  sm: "175px 100px 175px",
};
