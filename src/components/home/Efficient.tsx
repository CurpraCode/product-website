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
    <Box bg="#F4F6F9">
      <Box
        maxWidth="container.lg"
        m="0 auto"
        py="8rem"
        px={{ lg: "5rem", md: "4rem", sm: "3rem", base: "2rem" }}
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{
            lg: "row-reverse",
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
            display="block"
            ml={{ base: "0rem", sm: "0rem", lg: "2rem" }}
          />
          <Box
            mb="3rem"
            textAlign={{
              lg: "left",
              md: "center",
              sm: "center",
              base: "center",
            }}
          >
            <Heading
              mb="1rem"
              fontWeight="700"
              fontSize={{
                lg: "36px",
                md: "24px",
                sm: "18px",
                base: "18px",
              }}
              pb="1rem"
            >
              An Efficient End to
              <br /> End Platform{" "}
            </Heading>
            <Image
              src="/Line.svg"
              alt=""
              pb="1rem"
              m={{ md: "auto", sm: "auto", base: "auto" }}
              display={{ lg: "inline", md: "block", sm: "block" }}
            />
            <Text
              lineHeight="35px"
              fontSize={{
                lg: "24px",
                base: "18px",
              }}
            >
              One click request and connect to a language of your choice
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Efficient;
