import type { NextPage } from "next";
import Head from "next/head";
import Header from "../common/Header";
import { Box, Image } from "@chakra-ui/react";
import bgcurve from "../../public/bg-curve.svg";
import Screen from "../components/home/screen";
import Features from "../components/home/Features";
import Efficient from "../components/home/Efficient";
import Health from "../components/home/Health";
import Save from "../components/home/Save";
import Manage from "../components/home/Manage";
import Testimonial from "../components/home/Testimonial";
import Support from "../components/home/Support";
import Footer from "../common/Footer";
import How from "../components/home/How";
import { useMediaQuery } from "@chakra-ui/react";

const Home: NextPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 968px)");
  return (
    <div>
      <Head>
        <title>Canvey | Website</title>
        <meta name="description" content="Canvey Interpretation made simple" />
        <link rel="icon" href="/canvey-logo.svg" />
      </Head>

      <Box
        bgGradient={
          isMobile
            ? "linear-gradient(117.32deg, #5C0E62 -41.64%, #00B5D0 174.5%)"
            : bgcurve
        }
      >
        {isMobile ? null : (
          <Image
            src="/bg-curve.svg"
            alt=""
            width="100%"
            pos="absolute"
            zIndex={-5}
          />
        )}
        <Header name="" />
        <Screen />
      </Box>
      <Features />
      <How />
      <Efficient />
      <Health />
      <Save />
      <Manage />
      {/* <Testimonial /> */}
      {/* <Support /> */}

      <Footer />
    </div>
  );
};

export default Home;
