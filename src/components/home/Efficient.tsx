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

const Efficient = () => {
  return (
    <Box maxWidth="1220px" m="0 auto" mb="6rem">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        mt="10rem"
        flexDirection={{
          lg: "row",
          md: "column",
          sm: "column",
          base: "column",
        }}
        textAlign={{ lg: "left", md: "center", sm: "center" }}
      >
        <Image
          src="/mobile-phone.svg"
          alt=""
          width="50%"
          mr={{ lg: "10rem", md: "auto", sm: "auto" }}
          display={{ md: "block", sm: "block" }}
          ml={{ md: "auto", sm: "auto" }}
        />
        <Box mt="2rem" textAlign={{ lg: "left", md: "center", sm: "center", base: "center" }}>
          <Heading fontWeight="bold" mb="1rem" fontSize="2rem" pb="2rem">
            An efficient end to
            <br /> end platform{" "}
          </Heading>
          <Image
            src="/Line.svg"
            alt=""
            pb="2rem"
            mr={{ md: "auto", sm: "auto" }}
            display={{ lg: "inline", md: "block", sm: "block" }}
            ml={{ md: "auto", sm: "auto" }}
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
  );
};

export default Efficient;
