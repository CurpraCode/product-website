import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Image,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

const Health = () => {
  const [isMobile] = useMediaQuery("(max-width: 991px)");
  return (
    <Box
      maxWidth="container.xl"
      m="0 auto"
      pt="0.1rem"
      px={{ lg: "4rem", md: "3rem", sm: "3rem", base: "2rem" }}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{
          lg: "row-reverse",
          md: "column",
          sm: "column",
          base: "column",
        }}
        textAlign={{ lg: "left", md: "center", sm: "center", base: "center" }}
      >
        <Box my="5rem" ml={{ lg: "8rem", md: "auto", sm: "auto" }}>
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
            src="/Line.svg"
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
            patients
          </Text>
          <Button
            bg="#3a76bf"
            borderRadius="8px"
            py="25px"
            color="#fff"
            width="200px"
            mt="3rem"
            mb={{ lg: "0rem", md: "3rem", sm: "3rem" }}
            _hover={{
              bg: "#3a76bf",
            }}
            _focus={{
              outline: "none",
              bg: "#3a76bf",
            }}
          >
            Learn More
          </Button>
        </Box>
        {isMobile ? null : <Image src="/doc.png" alt="" width="30%" />}
      </Flex>
    </Box>
  );
};

export default Health;
