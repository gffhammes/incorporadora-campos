import React from "react";
import { Footer } from "../../src/components/commons/Footer/Footer";
import { Box } from "@mui/material";
import { ScrollMenu } from "../../src/components/enterprisesInternalPage/ScrollMenu/ScrollMenu";
import { SummarySection } from "../../src/components/enterprisesInternalPage/SummarySection/SummarySection";
import { DetailsSection } from "../../src/components/enterprisesInternalPage/DetailsSection";
import { DifferentialsSections } from "../../src/components/enterprisesInternalPage/DifferentialsSections";
import { PlanOptionsSection } from "../../src/components/enterprisesInternalPage/PlanOptionsSection";
import { ConstructionStatusSection } from "../../src/components/enterprisesInternalPage/ConstructionStatusSection";
import { MapsSection } from "../../src/components/enterprisesInternalPage/MapsSection";
import { SimulatorsSection } from "../../src/components/enterprisesInternalPage/SimulatorsSection";
import { HeroSection } from "../../src/components/enterprisesInternalPage/HeroSection";
import CustomMedia from "../../src/components/enterprisesInternalPage/delMare/CustomMedia";
import fetch from "isomorphic-unfetch";
import * as qs from "qs";
import Head from "next/head";
import { IStrapiEnterprise } from "../../src/interfaces/strapi";

interface IEnterprise {
  enterprise: IStrapiEnterprise;
}

const Enterprise = ({ enterprise }: IEnterprise) => {
  const { Seccoes } = enterprise.attributes;

  return (
    <>
      <Head>
        <title>{enterprise.attributes.Nome + " | Campos Incorporadora"}</title>
      </Head>
      <Box component={"main"} sx={{ height: { lg: "100%" } }}>
        <HeroSection enterpriseData={enterprise.attributes} />
        {Seccoes.Menu && <ScrollMenu enterpriseData={enterprise.attributes} />}
        <SummarySection enterpriseData={enterprise.attributes} />

        {enterprise.attributes.Slug === "piazza-del-mare" && <CustomMedia />}

        {Seccoes.Detalhes && (
          <DetailsSection enterpriseData={enterprise.attributes} />
        )}
        {Seccoes.Diferenciais && (
          <DifferentialsSections enterpriseData={enterprise.attributes} />
        )}
        {Seccoes.Plantas && (
          <PlanOptionsSection enterpriseData={enterprise.attributes} />
        )}
        {Seccoes.Status && (
          <ConstructionStatusSection enterpriseData={enterprise.attributes} />
        )}
        {Seccoes.Mapa && (
          <MapsSection address={enterprise.attributes.Endereco} />
        )}
        <SimulatorsSection />
        <Footer />
      </Box>
    </>
  );
};

export async function getServerSideProps(context) {
  const { API_URL } = process.env;
  const { slug } = context.query;

  const query = qs.stringify(
    {
      filters: {
        Slug: {
          $eq: slug,
        },
      },
      populate: [
        "Logo",
        "Banner",
        "Thumb",
        "Galeria",
        "Endereco",
        "Seccoes",
        "StatusDetalhado",
        "diferenciais",
        "diferenciais.Imagem",
        "Plantas",
        "Plantas.Foto",
        "texoAzulPaginaInterna",
        "CarrosselPrimeiraSessao",
      ],
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  const res = await fetch(`${API_URL}/api/empreendimentos?${query}`);
  const data = await res.json();

  return {
    props: {
      enterprise: data.data[0],
    },
  };
}

export default Enterprise;