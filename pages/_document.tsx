import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="pt">
      <Head>
        <meta
          name="description"
          content="Descubra a sua visão de um lar perfeito com a nossa incorporadora líder em Joinville e no litoral catarinense. Construímos prédios excepcionais que combinam sofisticação e conforto, proporcionando o estilo de vida dos seus sonhos. Explore os nossos empreendimentos agora e encontre o seu refúgio ideal na bela região de Santa Catarina."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://api.fontshare.com/css?f[]=satoshi@300,301,400,401,500,501,700,701,900,901&display=swap"
          rel="stylesheet"
        />

        <meta
          name="facebook-domain-verification"
          content="judrkaywuvzux703ez2d1cpv31tqrm"
        />
      </Head>
      <body>
        <div role="main" id="fomulario-home-site-838ec025cbb35e661775" />
        <Main />
        <NextScript />

        <Script
          type="text/javascript"
          src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/a3a1172b-ccbf-41dd-ac9a-35c63259f972-loader.js"
        />
        <Script
          type="text/javascript"
          src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"
        />
        <Script type="text/javascript" id="show-form">
          {`new RDStationForms('fomulario-home-site-838ec025cbb35e661775',
          'UA-219092936-1').createForm();`}
        </Script>
      </body>
    </Html>
  );
}
