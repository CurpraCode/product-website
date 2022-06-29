import React from "react";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

const How = () => {
  return (
    <Box
      pb="1rem"
      bg="rgb(255,255,255)"
      bgGradient="linear(180deg, rgba(255,255,255,1) 100%, #F4F6F9 0%)"
    >
      <Box maxWidth="1220px" m="0 auto" mb="6rem" pt="6rem">
        <Flex
          justifyContent="space-between"
          mt="5rem"
          flexDirection={{ lg: "row", md: "column", sm: "column" }}
          textAlign={{ lg: "left", md: "center", sm: "center" }}
        >
          <Image
            src="/youtubeimg.png"
            alt=""
            mr={{ lg: "10rem", md: "auto", sm: "auto" }}
            display={{ md: "block", sm: "block" }}
            ml={{ md: "auto", sm: "auto" }}
          />
          <Box mt="2rem">
            <Heading fontWeight="bold" mb="1rem" fontSize="2rem" pb="2rem">
              How is Canvey <br /> bridging the gap?
            </Heading>

            <Image
              src="/Line.svg"
              alt=""
              pb="2rem"
              mr={{ md: "auto", sm: "auto" }}
              display={{ md: "block", sm: "block" }}
              ml={{ md: "auto", sm: "auto" }}
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
