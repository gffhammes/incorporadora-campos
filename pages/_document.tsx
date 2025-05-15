import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="pt-BR">
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '200090439712055');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=200090439712055&ev=PageView&noscript=1"
          />
        </noscript>
      </Head>
      <body>
        <div role="main" id="fomulario-home-site-838ec025cbb35e661775" />
        <Main />
        <NextScript />

        <Script
          type="text/javascript"
          src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/72d60cff-b961-4024-8a23-313f8ec88a61-loader.js"
        />
      </body>
    </Html>
  );
}
