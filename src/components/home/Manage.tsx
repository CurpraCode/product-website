import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Image as ChakraImage,
} from "@chakra-ui/react";

const Manage = () => {
  return (
    <Box
      maxWidth="container.lg"
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
            fontSize={{
              lg: "36px",
              md: "24px",
              sm: "18px",
              base: "18px",
            }}
            pb="1rem"
          >
            Social Impact
          </Heading>
          <ChakraImage
            src="/Lineblue.svg"
            alt=""
            pb="1rem"
            m={{ md: "auto", sm: "auto", base: "auto" }}
            display={{ lg: "inline", md: "block", sm: "block" }}
          />
          <Text
            lineHeight="35px"
            fontSize={{
              lg: "24px",
              base: "18px",
            }}
          >
            We proudly advocate for underserved communities by facilitating
            multi-lingual communications. Our services reduce interpretation
            mistakes and fraud.
          </Text>
        </Box>
        <ChakraImage
          src="/circle-icon.svg"
          alt=""
          width="35%"
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
