import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Image as ChakraImage,
  VStack,
} from "@chakra-ui/react";

const Manage = () => {
  return (
    <Box
      maxW="7xl"
      m="0 auto"
      py="8rem"
      px={{ lg: "4rem", md: "3rem", sm: "3rem", base: "2rem" }}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{
          lg: "row-reverse",
          md: "column-reverse",
          sm: "column-reverse",
          base: "column-reverse",
        }}
        textAlign={{ lg: "left", md: "center", sm: "center", base: "center" }}
      >
        <Box>
          <Heading
            mb="1rem"
            fontWeight="700"
            fontSize={["18px", "25px", "36px"]}
            pb="1rem"
          >
            Social Impact
          </Heading>
          <VStack
            alignItems={["center", "center", "center", "start"]}
            justifyContent="center"
            textAlign={["center", "center", "center", "start"]}
          >
            <Box
              w="60px"
              mb="1rem"
              border="2.5px solid #3A76BF"
              borderRadius="5px"
            ></Box>
          </VStack>
          <Text
            lineHeight="35px"
            fontSize={{
              lg: "22px",
              md: "18px",
              sm: "18px",
              base: "12px",
            }}
          >
            We are dedicated to making a positive social impact in underserved
            communities. As language barriers can significantly hinder access to
            essential information, we provide innovative multilingual
            communication services that strive to bridge that gap. Join us in
            our mission to empower individuals and communities through accurate
            communication solutions.
          </Text>
        </Box>
        <ChakraImage
          src="/socialimpact.svg"
          alt=""
          width={{ base: "50%", md: "50%", lg: "45%" }}
          mr={{ lg: "6rem", md: "auto", sm: "auto" }}
          display={{ md: "block", sm: "block" }}
          ml={{ md: "auto", sm: "auto" }}
          mb={{ lg: "0rem", sm: "3rem", base: "2rem" }}
        />
      </Flex>
    </Box>
  );
};

export default Manage;
