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

const Save = () => {
  return (
    <Box bg="#F4F6F9">
      <Box
        maxWidth="container.xl"
        m="0 auto"
        mb="6rem"
        px={{ lg: "4rem", md: "3rem", sm: "3rem", base: "2rem" }}
        py="8rem"
      >
        <Flex
          justifyContent="space-between"
          flexDirection={{
            lg: "row-reverse",
            md: "column",
            sm: "column",
            base: "column",
          }}
          alignItems="center"
          textAlign={{ lg: "left", md: "center", sm: "center", base: "center" }}
        >
          <Image
            src="/fem.svg"
            alt=""
            width="40%"
            display={{ md: "block", sm: "block" }}
            ml={{ lg: "4rem", sm: "auto" }}
            mr={{ lg: "auto", sm: "auto" }}
          />
          <Box mt="2rem">
            <Heading fontWeight="bold" mb="1rem" fontSize="2rem" pb="1rem">
              Save time with <br /> Automations{" "}
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
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Save;
