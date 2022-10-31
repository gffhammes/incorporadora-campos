import DescriptionSection from "../src/components/aboutPage/DescriptionSection/DescriptionSection";
import FutureProjectsSection from "../src/components/aboutPage/FutureProjectsSection";
import HeroSection from "../src/components/aboutPage/HeroSection";
import OurHistorySection from "../src/components/aboutPage/OurHistory/OurHistorySection";
import PartnersSection from "../src/components/aboutPage/PartnersSection";
import { Footer } from "../src/components/commons/Footer/Footer";
import * as qs from "qs";
import { Box } from "@mui/material";

export default function About({ ourHistorySlides }) {
  return (
    <Box component={"main"} sx={{ height: { xs: "50vw", md: "100%" } }}>
      <HeroSection />
      <DescriptionSection />
      <OurHistorySection slides={ourHistorySlides} />
      <FutureProjectsSection />
      {/* <PurposeSection /> */}
      <PartnersSection />
      {/* <InvestorSection /> */}
      <Footer />
    </Box>
  );
}

export async function getServerSideProps() {
  const { API_URL } = process.env;

  const query = qs.stringify(
    {
      populate: ["nossaHistoria", "nossaHistoria.foto"],
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
    },
  };
}
