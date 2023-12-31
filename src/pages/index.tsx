import type { NextPage } from "next";
import Head from "next/head";
import Header from "../common/Header";
import { Box, Image } from "@chakra-ui/react";
import bgcurve from "../../public/bg-curve.svg";
import Screen from "../components/bannerSection/screen";
import Efficient from "../components/efficiencySection/Efficient";
import Health from "../components/healthcareSection/Health";
import Opportiunity from "../components/opportiunitySection/Opportiunity";
import Manage from "../components/socialImpactSection/Manage";
import Footer from "../common/Footer";
import { useMediaQuery } from "@chakra-ui/react";
import Secure from "../components/secure";
import Download from "../components/download";

const Home: NextPage = () => {
  const [isTablet] = useMediaQuery("(max-width: 768px)");
  return (
    <div>
      <Head>
        <title>Canvey | Website</title>
        <meta name="description" content="Canvey Interpretation made simple" />
        <link rel="icon" href="/logo.svg" />
        {/* add google analytics */}
      </Head>

      <Box
        bgGradient={isTablet ? null : bgcurve}
      >
        {isTablet ? (
          <Image
            src="/bgsmallcurve.png"
            alt=""
            width="100%"
            height={[550]}
            pos="absolute"
            zIndex={-10}
          />
        ) : (
          <Image
            src="/bg-curve.svg"
            alt=""
            width="100%"
            height={[593]}
            pos="absolute"
            zIndex={-10}
          />
        )}
        <Header name={"blah blah blah"} />
        <Screen />
      </Box>
     
      <Download />

      <Efficient />
      <Secure />
      <Health />
      <Opportiunity />
      <Manage />
      <Footer />
    </div>
  );
};

export default Home;
