import "../styles/globals.css";
import "../styles/circle-animation.css";
import "../styles/healthcare-carousel.css";
import type { AppProps } from "next/app";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import ReactGA from "react-ga";
import "@fontsource/inter/400.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/nunito-sans/400.css";
import "@fontsource/open-sans/700.css";

ReactGA.initialize("G-DBBN3WC1C7");

if (typeof window !== "undefined") {
  // Client-side-only code
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'montserrat', sans-serif`,
  },
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
