import React from "react";
import { Box, Flex, Text, Image, useMediaQuery } from "@chakra-ui/react";
import ServiceAnimatedText from "./ServiceAnimatedText";

const AboutComp = () => {
  const [isTab] = useMediaQuery("(max-width: 660px)");
  const [isTabView] = useMediaQuery("(max-width: 990px)");
  return (
    <Box>
      <Text mt="4rem" textAlign="center" fontSize="1.3rem" fontWeight="bolder">
        About Us
      </Text>
      <Box
        mt="4rem"
        bg="#E4EEFF"
        bgGradient="linear(180deg, #FFF 50%, #E4EEFF 50%)"
        py="10px"
        px={[5, 70]}
      >
        <Flex
          justifyContent="space-evenly"
          flexDir={["column", "column", "row"]}
        >
          <Image
            src="/doctor-phone.png"
            alt="profile image"
            mb={isTabView ? "2rem" : ""}
          />
          <Image
            src="/interpreter.png"
            alt="profile image"
            mb={isTabView ? "2rem" : ""}
          />
          <Image src="/white-doctor.png" alt="profile image" />
        </Flex>
        <ServiceAnimatedText />
      </Box>
      <Flex
        mt="5rem"
        flexDir="column"
        px={isTab ? "" : [5, 70]}
        alignItems="center"
      >
        <Image
          width={isTab ? "20%" : "20%"}
          src="/story.png"
          alt="profile image"
        />
        <Flex flexDir="column" px={[5, 70]} alignItems="center">
          <Text
            textAlign="center"
            mt="2rem"
            fontSize="1.3rem"
            fontWeight="bolder"
          >
            Our Story
          </Text>
          <Box
            w="60px"
            mt="2rem"
            border="4px solid #AE64A7"
            borderRadius="5px"
          ></Box>
          <Text textAlign="center" mt="3rem" fontSize={isTab ? "" : "1.2rem"}>
            Lorem ipsum dolor sit amet consectetur. Nibh odio urna fames
            malesuada dignissim. Sed elementum senectus convallis risus et enim
            libero. Quis mi aliquet pulvinar est dolor tincidunt cras nunc.
            Magna at fermentum quis risus ullamcorper vitae purus. In amet sit
            lectus et lacus. Viverra viverra eu est tellus. Tellus quis feugiat
            leo adipiscing sit morbi ac ut.
          </Text>
        </Flex>
      </Flex>
      <Box bg="#F4F6F9" px={isTab ? "" : [5, 70]} mt="5rem" py="5rem">
        <Flex
          flexDirection={{
            lg: "row",
            md: "column",
            sm: "column",
            base: "column",
          }}
          justifyContent="space-evenly"
          alignItems="center"
          px={[5, 70]}
        >
          <Image src="/chart.png" alt="chart" width={isTab ? "20%" : "20%"} />
          <Text
            textAlign="center"
            mt="2rem"
            fontSize="1.3rem"
            fontWeight="bolder"
          >
            The Problem
          </Text>
          <Flex
            flexDir="column"
            mt={isTabView ? "2rem" : ""}
            mb={isTabView ? "5rem" : ""}
            alignItems="center"
          >
            <Box
              w="60px"
              mb={isTabView ? "3rem" : "3rem"}
              border="4px solid #D0CCE9"
              borderRadius="5px"
            ></Box>
            <Text
              fontSize="1.2rem"
              px={isTab ? "" : [5, 70]}
              textAlign={isTabView ? "center" : "left"}
            >
              According to a study released by the Center for Studying Health
              System Change;
              <Text as="span" fontWeight="bold">
                “Nearly half of U.S. physicians say language or other cultural
                barriers are obstacles to providing high-quality patient care.”
              </Text>
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Flex
        mt="5rem"
        flexDir="column"
        px={isTab ? "" : [5, 70]}
        alignItems="center"
      >
        <Flex flexDir="column" px={[5, 70]} alignItems="center">
          <Text
            mt="2rem"
            textAlign="center"
            fontSize="1.3rem"
            fontWeight="bolder"
          >
            Our Promise
          </Text>
          <Box
            mt="2rem"
            w="60px"
            border="4px solid #AE64A7"
            borderRadius="5px"
          ></Box>
          <Text mt="3rem" textAlign="center" fontSize={isTab ? "" : "1.2rem"}>
            Lorem ipsum dolor sit amet consectetur. Nibh odio urna fames
            malesuada dignissim. Sed elementum senectus convallis risus et enim
            libero. Quis mi aliquet pulvinar est dolor tincidunt cras nunc.
            Magna at fermentum quis risus ullamcorper vitae purus. In amet sit
            lectus et lacus. Viverra viverra eu est tellus. Tellus quis feugiat
            leo adipiscing sit morbi ac ut.
          </Text>
        </Flex>
        <Image mt="5rem" src="/cut-bg.png" alt="profile image" />
      </Flex>
    </Box>
  );
};

export default AboutComp;
