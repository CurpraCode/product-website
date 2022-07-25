import React from "react";
import { Box, Flex, Heading, Text, Image, useMediaQuery } from "@chakra-ui/react";

const How = () => {
  const isMobile = useMediaQuery("(max-width: 991px)")
  return (
    <Box
      bg="rgb(255,255,255)"
      maxWidth="container.lg"
      px={{ lg: "0rem", md: "4rem", sm: "3rem", base: "2rem" }}
      mx="auto"
      mb="8rem"
      mt="8rem"
    >
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
        textAlign={{ lg: "left", md: "center", sm: "center" }}
      >
        <Box
          mr={{ lg: "3rem", md: "auto", sm: "auto" }}
          ml={{ lg: "5rem", md: "auto", sm: "auto" }}
        >
          <video width={isMobile ? "800px" : "800px"} autoPlay={true} muted loop>
            <source src="/videos/canvey_how.mp4" type="video/mp4" />
          </video>
        </Box>

        <Box
          mt="2rem"
          pr={{ lg: "2rem" }}
          textAlign={{ lg: "left", md: "center", sm: "center", base: "center" }}
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
            Our Focus
          </Heading>

          <Image
            src="/Line.svg"
            alt=""
            pb="1rem"
            display={{ lg: "inline", md: "block", sm: "block" }}
            m={{ md: "auto", sm: "auto", base: "auto" }}
          />
          <Text
            lineHeight="35px"
            fontSize={{
              lg: "24px",
              base: "18px",
            }}
          >
            Providing competitive quality interpreting by innovating the way
            individuals & businesses communicate with people who are limited by
            Language barriers.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default How;
