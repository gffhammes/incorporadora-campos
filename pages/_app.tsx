import { Header } from "../src/components/commons/Header/Header";
import "../styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { PageTitle } from "../src/components/commons/PageTitle";
import TagManager from "react-gtm-module";
import { useEffect } from "react";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";

const theme = createTheme({
  typography: {
    fontFamily: "Satoshi, sans-serif",
  },
  palette: {
    primary: { main: "#0E1E42" },
    secondary: { main: "#1A47BC" },
  },
});

Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => NProgress.done());

Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-W7TDPT6" });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <PageTitle />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
