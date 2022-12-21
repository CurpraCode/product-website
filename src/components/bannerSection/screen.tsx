import React from "react";
import { Box, Heading, Flex, Image, useMediaQuery } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

const Screen = () => {
  const [isTablet] = useMediaQuery("(max-width: 560px)");
  const [isTab] = useMediaQuery("(max-width: 760px)");
  return (
    <Box
      maxWidth="container.xl"
      height={isTablet ? "auto" : "550px"}
      m="auto"
      position="relative"
      mb="2rem"
    >
      <Flex
        justifyContent="space-between"
        alignItems={{ base: "center", md: "center", lg: "flex-start" }}
        mt="1rem"
        flexDirection={{
          lg: "row",
          md: "row",
          sm: "column",
          base: "column",
        }}
      >
        <Box
          mt={isTablet ? "4rem" : "4rem"}
          ml={{
            sm: "0rem",
            md: "3rem",
            lg: "3.5rem",
            xl: "3.5rem",
            base: "0rem",
          }}
          pb={{ base: "2rem" }}
          textAlign={isTablet ? "left" : "left"}
        >
          <Heading
            color="#fff"
            fontWeight="800"
            mb="1rem"
            textAlign={{ base: "center", lg: "left" }}
            fontSize={{ base: "38px", sm: "38px", md: "58px" }}
          >
            We Speak your <br /> Language
          </Heading>
          <Heading
            color="#fff"
            textAlign={{ base: "center", md: "center", lg: "left" }}
          >
            <Typewriter
              options={{
                strings: ["Hello", "Hola", "Bonjour", "你好", "مرحبًا"],
                autoStart: true,
                loop: true,
              }}
            />
          </Heading>
        </Box>
        <Image
          src="/screen.png"
          alt="mac and phone"
          mt={isTab ? "5rem" : ""}
          width={{ base: "80%", sm: "65%", md: "50%", lg: "36%", xl: "35%" }}
          right={{ base: "", sm: "0rem", md: "1rem", lg: "8rem", xl: "12rem" }}
          top={{ md: "8.5rem", lg: "4.5rem", sm: "12.5rem" }}
        />
      </Flex>
    </Box>
  );
};

export default Screen;
