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
      <Box maxWidth="1220px" m="0 auto" pt="0.1rem" pb="5rem" px="1rem">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          mt="5rem"
          flexDirection={{
            lg: "row",
            md: "column-reverse",
            sm: "column-reverse",
            base: "column-reverse",
          }}
          textAlign={{ lg: "left", md: "center", sm: "center", base: "center" }}
        >
          <Box mt="2rem" mr={{ lg: "19rem", md: "0rem", sm: "0rem" }}>
            <Heading fontWeight="bold" mb="1rem" fontSize="2rem" pb="2rem">
              Manage everything in one workspace
            </Heading>
            <Image
              src="/Lineblue.svg"
              alt=""
              pb="2rem"
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
            mr={{ lg: "10rem", md: "auto", sm: "auto" }}
            display={{ md: "block", sm: "block" }}
            ml={{ md: "auto", sm: "auto" }}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Manage;
