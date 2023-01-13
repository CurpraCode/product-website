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
            alignItems={["center","center", "center", "start"]}
            justifyContent="center"
            textAlign={["center","center", "center", "start"]}
          >
            <Box w="60px" mb="1rem" border="4px solid #686DF1" borderRadius="5px"></Box>
          </VStack>
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
          src="/circle-icon.png"
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
