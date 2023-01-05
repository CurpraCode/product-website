import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

const AboutComp = () => {
  return (
    <Box>
      <Text mt="4rem" textAlign="center" fontWeight="bold">
        About Us
      </Text>
      <Box
        mt="5rem"
        bg="#F4F6F9"
        bgGradient="linear(180deg, #FFF 50%, #F4F6F9 50%)"
        py="10px"
        px={[5, 70]}
      >
        <Flex
          justifyContent="space-evenly"
          flexDir={["column", "column", "row"]}
        >
          <Image src="/doctor-phone.png" alt="profile image" />
          <Image src="/interpreter.png" alt="profile image" />
          <Image src="/white-doctor.png" alt="profile image" />
        </Flex>
        <Text textAlign="center" mt="5rem" mb="5rem">
          We strive to provide services that express
        </Text>
      </Box>
      <Flex mt="5rem" flexDir="column" px={[5, 70]} alignItems="center">
        <Image width="10%" src="/story.png" alt="profile image" />
        <Box>
          <Text textAlign="center" fontWeight="bold">
            Our Story
          </Text>
          <Box w="60px" border="4px solid #AE64A7" borderRadius="5px"></Box>
          <Text textAlign="center" px={[5, 70]}>
            Lorem ipsum dolor sit amet consectetur. Nibh odio urna fames
            malesuada dignissim. Sed elementum senectus convallis risus et enim
            libero. Quis mi aliquet pulvinar est dolor tincidunt cras nunc.
            Magna at fermentum quis risus ullamcorper vitae purus. In amet sit
            lectus et lacus. Viverra viverra eu est tellus. Tellus quis feugiat
            leo adipiscing sit morbi ac ut.
          </Text>
        </Box>
      </Flex>
      <Box bg="#F4F6F9">
        <Flex justifyContent="space-evenly" alignItems="center">
          <Image src="/chart.png" alt="chart" />
          <Box>
            <Box w="160px" border="4px solid #403E50" borderRadius="5px"></Box>
            <Text>
              According to a study released by the Center for Studying Health
              System Change; “Nearly half of U.S. physicians say language or
              other cultural barriers are obstacles to providing high-quality
              patient care.”
            </Text>
            <Box w="60px" border="4px solid #403E50" borderRadius="5px"></Box>
          </Box>
        </Flex>
      </Box>
      <Flex mt="5rem" flexDir="column" px={[5, 70]} alignItems="center">
        <Box>
          <Text textAlign="center" fontWeight="bold">
            Our Promise
          </Text>
          <Box w="60px" border="4px solid #AE64A7" borderRadius="5px"></Box>
          <Text textAlign="center" px={[5, 70]}>
            Lorem ipsum dolor sit amet consectetur. Nibh odio urna fames
            malesuada dignissim. Sed elementum senectus convallis risus et enim
            libero. Quis mi aliquet pulvinar est dolor tincidunt cras nunc.
            Magna at fermentum quis risus ullamcorper vitae purus. In amet sit
            lectus et lacus. Viverra viverra eu est tellus. Tellus quis feugiat
            leo adipiscing sit morbi ac ut.
          </Text>
        </Box>
        <Image mt="5rem" src="/cut-bg.png" alt="profile image" />
      </Flex>
    </Box>
  );
};

export default AboutComp;
