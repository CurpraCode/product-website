import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import "@fontsource/inter/400.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/nunito-sans/400.css";
import "@fontsource/open-sans/700.css";

type LayoutProps = {
  children: React.ReactNode;
};

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'montserrat', sans-serif`,
  },
});

const index = ({ children }: LayoutProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Header name="linear-gradient(117.32deg, #5C0E62 -41.64%, #00B5D0 174.5%)" />
      {children}
      <Footer />
    </ChakraProvider>
  );
};

export default index;
