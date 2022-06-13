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

const Health = () => {
  return (
    <Box bg="#F4F6F9">
      <Box maxWidth="1220px" m="0 auto" pt="0.1rem">
        <Flex justifyContent="space-between" mt="5rem">
          <Box mt="2rem" mr="19rem">
            <Heading fontWeight="bold" mb="1rem" fontSize="2rem" pb="2rem">
              Advocates for <br /> healthcare
            </Heading>
            <Image src="/Line.svg" alt="" pb="2rem" />
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
          <Image src="/doc.png" alt="" width="30%" />
        </Flex>
      </Box>
    </Box>
  );
};

export default Health;
