import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Image,
} from "@chakra-ui/react";

const Health = () => {
  return (
    <>
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
              Advocates for <br /> healthcare
            </Heading>
            <Image
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
              Our focus is to help facilitate the highest level of care for LEP
              patients.
            </Text>
          </Box>
          <Image
            src="/doc.svg"
            alt=""
            width="35%"
            mr={{ lg: "6rem", md: "auto", sm: "auto" }}
            display={{ md: "block", sm: "block" }}
            ml={{ md: "auto", sm: "auto" }}
          />
        </Flex>
      </Box>
    </>
  );
};

export default Health;
