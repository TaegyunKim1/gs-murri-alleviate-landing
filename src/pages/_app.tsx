import { Fragment, useEffect } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import GlobalStyles from "../libs/styles/global";
import { ThemeProvider } from "styled-components";
import theme from "../libs/styles/theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const handleRouteChange = () => {
      // Google Analytics 페이지 이동 추적
      window.gtag("config", "G-PWWG3KB0RJ", {});
    };
    handleRouteChange();
    // 컴포넌트가 언마운트 될 때 리스너 제거
    return () => {};
  }, []);

  return (
    <Fragment>
      <Head>
        <title>locofy-react-nextjs-project</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />

        <style
          dangerouslySetInnerHTML={{
            __html: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;800&display=swap');`,
          }}
        />
        {/* ga4 sutff */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.DEV_GA4_ID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', ${process.env.DEV_GA4_ID});
            `,
          }}
        />
        {/* hotjar stuff */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:${process.env.DEV_HOTJAR_HJID},hjsv:${process.env.DEV_HOTJAR_HJSV}};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />
      </Head>
      <GlobalStyles />
      {/* <ChakraBaseProvider> */}
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
      {/* </ChakraBaseProvider> */}
    </Fragment>
  );
}

export default MyApp;
