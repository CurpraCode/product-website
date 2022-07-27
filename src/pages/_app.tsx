import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import ReactGA from "react-ga";
ReactGA.initialize("G-DBBN3WC1C7");
ReactGA.pageview(window.location.pathname + window.location.search);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
