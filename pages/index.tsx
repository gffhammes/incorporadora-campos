import { EnterprisesSection } from "../src/components/homePage/EnterprisesSection";
import { HistorySection } from "../src/components/homePage/HistorySection";
import { BlogSection } from "../src/components/homePage/BlogSection";
import { Footer } from "../src/components/commons/Footer/Footer";
import { HeroSlider } from "../src/components/homePage/heroSlider/HeroSlider";
import * as qs from "qs";
import { Box } from "@mui/material";

export default function Home({ banners }) {
  return (
    <Box component={"main"} sx={{ height: { xs: "60vw", md: "100%" } }}>
      <HeroSlider banners={banners} />
      <HistorySection />
      <EnterprisesSection />
      {/* <BlogSection /> */}
      <Footer />
    </Box>
  );
}

export async function getServerSideProps() {
  const { API_URL } = process.env;

  const bannersQuery = qs.stringify(
    {
      populate: [
        "empreendimento",
        "empreendimento.Banner",
        "empreendimento.Logo",
      ],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const bannersResponse = await fetch(`${API_URL}/api/banners?${bannersQuery}`);
  const bannersData = await bannersResponse.json();

  return {
    props: {
      banners: bannersData.data,
    },
  };
}
