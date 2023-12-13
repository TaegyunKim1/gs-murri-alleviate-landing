import { Fragment } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import GlobalStyles from "../libs/styles/global";
import { ThemeProvider } from "styled-components";
import theme from "../libs/styles/theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
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
      </Head>
      <GlobalStyles />
      <ChakraProvider>
        <ThemeProvider theme={theme}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </ChakraProvider>
    </Fragment>
  );
}

export default MyApp;
