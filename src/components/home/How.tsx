import React from "react";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

const How = () => {
  return (
    <Box
      bg="rgb(255,255,255)"
      maxWidth="container.xl"
      px={{ lg: "0rem", md: "4rem", sm: "3rem", base: "2rem" }}
      mx="auto"
      mb="5rem"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        mt="5rem"
        flexDirection={{
          lg: "row",
          md: "column",
          sm: "column",
          base: "column",
        }}
        textAlign={{ lg: "left", md: "center", sm: "center" }}
      >
        <Image
          src="/youtubeimg.png"
          alt=""
          width="512px"
          mr={{ lg: "3rem", md: "auto", sm: "auto" }}
          display={{ md: "block", sm: "block" }}
          ml={{ lg: "5rem", md: "auto", sm: "auto" }}
        />
        <Box
          mt="2rem"
          pr={{ lg: "2rem" }}
          textAlign={{ lg: "left", md: "center", sm: "center", base: "center" }}
        >
          <Heading fontWeight="bold" mb="1rem" fontSize="2rem" pb="1rem">
            What is Canvey?
          </Heading>

          <Image
            src="/Line.svg"
            alt=""
            pb="1rem"
            display={{ lg: "inline", md: "block", sm: "block" }}
            m={{ md: "auto", sm: "auto", base: "auto" }}
          />
          <Text lineHeight="35px">
            In sagittis condimentum vehicula. Morbi ullamcorper egestas orci.
            Quisque sit amet fringilla mauris.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default How;
