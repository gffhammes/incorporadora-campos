import { Header } from "../src/components/commons/Header/Header";
import "../styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { PageTitle } from "../src/components/commons/PageTitle";
import TagManager from "react-gtm-module";
import { useEffect } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import { GlobalsContextProvider } from "../src/contexts/GlobalsContextProvider";

const theme = createTheme({
  typography: {
    fontFamily: "Satoshi, sans-serif",
  },
  palette: {
    primary: { main: "#0E1E42" },
    secondary: { main: "#1A47BC" },
  },
});

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => NProgress.done());

Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "AW-11296495330" });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalsContextProvider>
        <PageTitle />

        <Header />

        <Component {...pageProps} />
      </GlobalsContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
