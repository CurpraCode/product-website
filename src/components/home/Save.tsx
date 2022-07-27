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
        maxWidth="container.lg"
        m="0 auto"
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
            mb={{ lg: "0rem", sm: "3rem", base: "2rem" }}
          />
          <Box>
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
              Opportunities for <br /> Interpreters
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
              At Canvey we want interpreters to work from anywhere at anytime.
              Get on the app and get paid.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Save;
