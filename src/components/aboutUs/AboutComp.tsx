import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  useMediaQuery,
  Heading,
  VStack,
  Button,
} from "@chakra-ui/react";
import ServiceAnimatedText from "./ServiceAnimatedText";
import NextLink from "next/link";

const AboutComp = () => {
  const [isTab] = useMediaQuery("(max-width: 660px)");
  const [isTabView] = useMediaQuery("(max-width: 990px)");
  return (
    <Box>
      <Box mt="4rem">
        <Flex
          justifyContent="space-evenly"
          flexDir={["column", "column", "row"]}
        >
          <VStack
            textAlign="center"
            spacing={["30px"]}
            mb={isTabView ? "2rem" : ""}
          >
            <Image src="/ourvision.svg" alt="profile image" />
            <Heading fontWeight="700" fontSize={["18px", "25px", "25px"]}>
              What Is Canvey?
            </Heading>
            <Image
              src="/aboutline.svg"
              alt=""
              pb="1rem"
              m={{ md: "auto", sm: "auto", base: "auto" }}
              display={{ lg: "inline", md: "block", sm: "block" }}
            />
            <Text px="6">
              Interpretation platform that provides both in-person and remote
              interpreting services tailored to your needs.
            </Text>
          </VStack>
          <VStack
            textAlign="center"
            spacing={["30px"]}
            mb={isTabView ? "2rem" : ""}
          >
            <Image src="/theproblem.svg" alt="profile image" />
            <Heading fontWeight="700" fontSize={["18px", "25px", "25px"]}>
              Our Vision
            </Heading>
            <Image
              src="/aboutline.svg"
              alt=""
              pb="1rem"
              m={{ md: "auto", sm: "auto", base: "auto" }}
              display={{ lg: "inline", md: "block", sm: "block" }}
            />
            <Text px="6">
              Our primary focus is to dismantle barriers, enhance patient
              experiences, and elevate healthcare communication to unprecedented
              levels.{" "}
            </Text>
          </VStack>
          <VStack
            textAlign="center"
            spacing={["30px"]}
            mb={isTabView ? "2rem" : ""}
          >
            <Image src="/whatiscanvey.svg" alt="profile image" />
            <Heading fontWeight="700" fontSize={["18px", "25px", "25px"]}>
              The Problem
            </Heading>
            <Image
              src="/aboutline.svg"
              alt=""
              pb="1rem"
              m={{ md: "auto", sm: "auto", base: "auto" }}
              display={{ lg: "inline", md: "block", sm: "block" }}
            />
            <Text px="6">
              Insufficient access to interpretation and cultural services is
              hampering care and creating obstacles in nearly 50% of hospitals
              across the United States.{" "}
            </Text>
          </VStack>
        </Flex>
      </Box>
      <Box bg="#403E50">
        <Box
          maxW="7xl"
          m="0 auto"
          py="1rem"
          mt={isTab ? "8rem" : "2rem"}
          px={{ lg: "6rem", md: "4rem", sm: "3rem", base: "2rem" }}
        >
          <ServiceAnimatedText />
        </Box>
      </Box>

      <Flex
        mt="5rem"
        flexDir="column"
        px={isTab ? "" : [5, 70]}
        alignItems="center"
      >
        <Flex flexDir="column" px={[5, 70]} alignItems="center">
          <Image
            width={isTab ? "20%" : "20%"}
            src="/story.png"
            alt="profile image"
          />
          <Text
            mt="2rem"
            textAlign="center"
            fontSize="1.3rem"
            fontWeight="bolder"
          >
            Passion led us here
          </Text>
          <Box
            mt="2rem"
            w="60px"
            border="4px solid #AE64A7"
            borderRadius="5px"
          ></Box>
          <Text mt="3rem" textAlign="center" fontSize={isTab ? "" : "1.2rem"}>
            Canvey is a healthcare-centered interpretation startup dedicated to
            enhancing healthcare communication between patients and healthcare
            providers. Our mission is to revolutionize the healthcare industry
            by providing affordable and on-demand video, audio, in-person, and
            sign language interpretation services. We carefully curate a team of
            interpreters with a deep understanding of healthcare terminology and
            best practices. Our ultimate objective is to transform the way
            healthcare providers communicate with patients, ensuring optimal
            care regardless of language or communication barriers. At Canvey, we
            recognize the critical importance of improving health outcomes,
            promoting wellness, and fostering healthier lives, especially for
            immigrant individuals confronted with language limitations. Our team
            possesses exceptional language proficiency, serving as an invaluable
            asset in achieving these objectives. With members from diverse
            backgrounds and originating from four different countries, we bring
            a wealth of perspectives and experiences. This diversity empowers us
            to establish meaningful connections with both patients and
            healthcare providers, effectively overcoming language barriers. To
            realize our vision, we leverage cutting-edge technology to deliver a
            seamless user experience. We build a network of highly qualified
            interpreters and establish strategic partnerships with healthcare
            organizations, seamlessly integrating interpretation services into
            their workflows. As a team of immigrants ourselves, we deeply
            understand the significance of language and cultural competence in
            healthcare. We are committed to providing services that are
            sensitive to the unique needs of each patient and healthcare
            provider. Privacy and security are paramount to us, and we strictly
            adhere to all relevant regulations and standards to ensure the
            confidentiality of our users&rsquo; information.
          </Text>
        </Flex>
        <NextLink href="/sign-up" passHref>
          <Button
            bg="#3a76bf"
            borderRadius="8px"
            py="25px"
            color="#fff"
            width="100%"
            fontWeight="700"
            fontSize="18px"
            maxW="200px"
            mt={{ base: "2rem", xl: "2.5rem" }}
            _hover={{
              bg: "#3a76bf",
            }}
            _focus={{
              outline: "none",
              bg: "#3a76bf",
            }}
            mb="5rem"
          >
            Contact Us Today
          </Button>
        </NextLink>
        {/* <Image mt="5rem" src="/cut-bg.png" alt="profile image" /> */}
      </Flex>
    </Box>
  );
};

export default AboutComp;
