import { EnterprisesSection } from "../src/components/homePage/EnterprisesSection";
import { HistorySection } from "../src/components/homePage/HistorySection/HistorySection";
import { HeroSlider } from "../src/components/homePage/heroSlider/HeroSlider";
import { Box, Divider } from "@mui/material";
import { Subscribe } from "../src/components/commons/Footer/Subscribe/Subscribe";
import { MainFooter } from "../src/components/commons/Footer/MainFooter";
import { Copyright } from "../src/components/commons/Footer/Copyright";

export default function Home() {
  return (
    <Box component={"main"} sx={{ height: { xs: "70vw", md: "100%" } }}>
      <HeroSlider />

      <EnterprisesSection />

      <Subscribe />

      <HistorySection />

      <Divider />

      <MainFooter />

      <Copyright />
    </Box>
  );
}
