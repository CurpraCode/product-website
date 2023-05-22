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
            We, the founders of Canvey, come from immigrant families and
            understand firsthand the struggles of navigating a new country where
            the primary language is not our first language. Growing up, we often
            saw our loved ones struggle to communicate with health care
            providers. That&#39;s why we started Canvey, a technology-driven
            interpretation company that specializes in providing professional
            interpreting services via our application. Together, we set out to
            create a personalized approach to interpreting that would meet the
            specific needs of our users, while being sensitive to cultural
            differences. Our platform is designed to be user-friendly and easy
            to use, making it accessible for anyone to access our services.
            We&#39;re dedicated to helping others, just like our families, to
            communicate effectively and to fully participate in their own
            healthcare journey.
          </Text>
        </Flex>
      </Flex>
      <Box bg="#F4F6F9" px={isTab ? "" : [5, 70]} mt="5rem" py="5rem">
        <Flex
          flexDirection={{
            lg: "column",
            md: "column",
            sm: "column",
            base: "column",
          }}
          justifyContent="space-evenly"
          alignItems="center"
          px={[5, 70]}
        >
          <Image src="/chart.png" alt="chart" width={isTab ? "20%" : "20%"} />
          <Box>
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
              mt={isTabView ? "2rem" : "2rem"}
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
                px={isTabView ? "" : [5, 70]}
                textAlign={isTabView ? "center" : "center"}
              >
                The U.S. Census Bureau has reported that 21% of the population
                speaks a language other than English at home. This is more than
                60 million people who may have limited proficiency in English.
                According to a study released by the center for studying health
                system change;
                <Text as="span" fontWeight="bold">
                  “Nearly half of U.S. physicians say language or other cultural
                  barriers are obstacles to providing high-quality patient
                  care.”
                </Text>
                Inadequate communication with patients can make the healthcare
                process more difficult for both patients and providers, and it’s
                important to address them to ensure high quality and safe care
                for all.
              </Text>
            </Flex>
          </Box>
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
            We promise to revolutionize the interpretation industry by providing
            cutting-edge technology, fast and reliable service, and high-quality
            in-person and virtual interpretation for people of all languages,
            cultures and backgrounds. Our commitment is to ensure equal access
            to effective communication. You can trust that we will always put
            our clients first and work tirelessly to break down barriers.
          </Text>
        </Flex>
        <Image mt="5rem" src="/cut-bg.png" alt="profile image" />
      </Flex>
    </Box>
  );
};

export default AboutComp;
