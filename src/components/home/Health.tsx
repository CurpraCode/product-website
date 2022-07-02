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
  const [isMobile] = useMediaQuery("(max-width: 968px)");
  return (
    <Box maxWidth="container.lg" m="0 auto" pt="0.1rem" px="3rem">
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
        <Box my="5rem" ml={{ lg: "12rem", md: "auto", sm: "auto" }}>
          <Heading fontWeight="bold" mb="1rem" fontSize="2rem" pb="1rem">
            Advocates for <br /> healthcare
          </Heading>
          <Image
            src="/Line.svg"
            alt=""
            pb="1rem"
            m={{ md: "auto", sm: "auto", base: "auto" }}
            display={{ lg: "inline", md: "block", sm: "block" }}
          />
          <Text lineHeight="35px">
            In sagittis condimentum vehicula. Morbi ullamcorper egestas orci.
            Quisque sit amet fringilla mauris. Suspendisse ut tempus ante. Ut
            volutpat vehicula nibh, id finibus magna pharetra vel. Ut vehicula
            rhoncus ultricies. Duis euismod tortor vel ante varius fringilla.
          </Text>
          <Button
            bg="#3a76bf"
            borderRadius="8px"
            padding="10px"
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
