import React from "react";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

const How = () => {
  return (
    <Box pb="1rem">
      <Box maxWidth="1220px" m="0 auto" mb="6rem" pt="6rem">
        <Flex justifyContent="space-between" mt="5rem">
          <Image src="/youtubeimg.png" alt="" mr="10rem" />
          <Box mt="2rem">
            <Heading fontWeight="bold" mb="1rem" fontSize="2rem" pb="2rem">
              How is Canvey <br /> bridging the gap?
            </Heading>
            <Text lineHeight="35px">
              In sagittis condimentum vehicula. Morbi ullamcorper egestas orci.
              Quisque sit amet fringilla mauris.{" "}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default How;
