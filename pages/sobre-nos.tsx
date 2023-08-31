import DescriptionSection from "../src/components/aboutPage/DescriptionSection/DescriptionSection";
import FutureProjectsSection from "../src/components/aboutPage/FutureProjectsSection";
import HeroSection from "../src/components/aboutPage/HeroSection";
import OurHistorySection from "../src/components/aboutPage/OurHistory/OurHistorySection";
import { Footer } from "../src/components/commons/Footer/Footer";
import * as qs from "qs";
import { Box } from "@mui/material";
import PurposeSection from "../src/components/aboutPage/PurposeSection";
import PartnersSection from "../src/components/aboutPage/PartnersSection/PartnersSection";
import { IOurHistorySlide, IOurHistoryText } from "../src/interfaces/strapi";

interface IAbout {
  ourHistorySlides: IOurHistorySlide[];
  ourHistoryText: IOurHistoryText;
}

export default function About({ ourHistorySlides, ourHistoryText }: IAbout) {
  return (
    <Box component={"main"} sx={{ height: { xs: "50vw", md: "100%" } }}>
      <HeroSection />
      <DescriptionSection ourHistoryText={ourHistoryText} />
      <PartnersSection />
      <OurHistorySection slides={ourHistorySlides} />
      <FutureProjectsSection />
      <PurposeSection />
      {/* <InvestorSection /> */}
      <Footer />
    </Box>
  );
}

export async function getServerSideProps() {
  const { API_URL } = process.env;

  const query = qs.stringify(
    {
      populate: ["nossaHistoria", "nossaHistoria.foto", "tituloETexto"],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const response = await fetch(`${API_URL}/api/sobre-nos?${query}`);
  const data = await response.json();

  return {
    props: {
      ourHistorySlides: data.data.attributes.nossaHistoria,
      ourHistoryText: data.data.attributes.tituloETexto,
    },
  };
}
