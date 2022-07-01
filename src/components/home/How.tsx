import React from "react";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

const How = () => {
  return (
    <Box
      pb="1rem"
      px="1rem"
      bg="rgb(255,255,255)"
      bgGradient="linear(180deg, rgba(255,255,255,1) 100%, #F4F6F9 0%)"
    >
      <Box maxWidth="container.xl" m="0 auto" mb="6rem" pt="3rem">
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
        >
          <Image
            src="/youtubeimg.png"
            alt=""
            m={{ lg: "10rem", md: "auto", sm: "auto", base: "auto" }}
            display={{ md: "block", sm: "block" }}
          />
          <Box mt="2rem" textAlign="center">
            <Heading fontWeight="bold" mb="1rem" fontSize="2rem" pb="2rem">
              How is Canvey <br /> bridging the gap?
            </Heading>

            <Image
              src="/Line.svg"
              alt=""
              pb="2rem"
              textAlign="center"
              alignItems="center"
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
    </Box>
  );
};

export default How;
