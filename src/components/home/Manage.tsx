import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Image,
  Divider,
} from "@chakra-ui/react";

const Manage = () => {
  return (
    <Box
      maxWidth="container.xl"
      m="0 auto"
      pt="0.1rem"
      pb="5rem"
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
        <Box mt="5rem">
          <Heading fontWeight="bold" mb="1rem" fontSize="2rem" pb="1rem">
            Manage everything in one workspace
          </Heading>
          <Image
            src="/Lineblue.svg"
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
        </Box>
        <Image
          src="/circle-icon.svg"
          alt=""
          width="35%"
          mr={{ lg: "6rem", md: "auto", sm: "auto" }}
          display={{ md: "block", sm: "block" }}
          ml={{ md: "auto", sm: "auto" }}
        />
      </Flex>
    </Box>
  );
};

export default Manage;
