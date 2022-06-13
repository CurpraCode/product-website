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
    <Box bg="#F4F6F9">
      <Box maxWidth="1220px" m="0 auto" pt="0.1rem" pb="5rem">
        <Flex justifyContent="space-between" mt="5rem">
          <Box mt="2rem" mr="19rem">
            <Heading fontWeight="bold" mb="1rem" fontSize="2rem" pb="2rem">
              Manage everything in <br /> one workspace
            </Heading>
            <Image src="/Lineblue.svg" alt="" pb="2rem" />
            <Text lineHeight="35px">
              In sagittis condimentum vehicula. Morbi ullamcorper egestas orci.
              Quisque sit amet fringilla mauris. Suspendisse ut tempus ante. Ut
              volutpat vehicula nibh, id finibus magna pharetra vel. Ut vehicula
              rhoncus ultricies. Duis euismod tortor vel ante varius fringilla.
            </Text>
          </Box>
          <Image src="/circle-icon.svg" alt="" width="30%" />
        </Flex>
      </Box>
    </Box>
  );
};

export default Manage;
