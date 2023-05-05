import { EnterprisesSection } from "../src/components/homePage/EnterprisesSection";
import { HistorySection } from "../src/components/homePage/HistorySection/HistorySection";
import { HeroSlider } from "../src/components/homePage/heroSlider/HeroSlider";
import * as qs from "qs";
import { Box, Divider } from "@mui/material";
import { Subscribe } from "../src/components/commons/Footer/Subscribe/Subscribe";
import { MainFooter } from "../src/components/commons/Footer/MainFooter";
import { Copyright } from "../src/components/commons/Footer/Copyright";

export default function Home({ banners }) {
  return (
    <Box component={"main"} sx={{ height: { xs: "70vw", md: "100%" } }}>
      <HeroSlider banners={banners} />

      <EnterprisesSection />

      <Subscribe />

      <HistorySection />

      <Divider />

      <MainFooter />

      <Copyright />
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
