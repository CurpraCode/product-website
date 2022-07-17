import React from "react";
import {
  Box,
  Heading,
  Flex,
  Button,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import AuthButton from "./AuthButton";

const Screen = () => {
  const [isTablet] = useMediaQuery("(max-width: 500px)");
  return (
    <Box
      maxWidth="container.xl"
      height={{ base: "500px", sm: "520px", md: "550px" }}
      m="auto"
      position="relative"
    >
      <Flex
        justifyContent="space-between"
        alignItems={isTablet ? "center" : ""}
        mt="2rem"
        flexDirection={{
          lg: "row",
          md: "column",
          sm: "column",
          base: "column",
        }}
      >
        <Box
          mt="4rem"
          ml={{ sm: "3rem", md: "3rem", lg: "3.5rem" }}
          textAlign={isTablet ? "center" : "left"}
        >
          <Heading
            color="#fff"
            fontWeight="bold"
            mb="1rem"
            fontSize={{ base: "24px", sm: "32px", md: "48px" }}
          >
            We Speak your <br /> Language
          </Heading>

          {isTablet ? (
            <Box mt="5rem" alignItems="center" justifyContent="center">
              <AuthButton />
            </Box>
          ) : null}

          {isTablet ? null : (
            <Button
              bg="#3a76bf"
              borderRadius="8px"
              py="25px"
              color="#fff"
              width="100%"
              fontWeight="700"
              fontSize="18px"
              maxW="200px"
              mt="3rem"
              _hover={{
                bg: "#3a76bf",
              }}
              _focus={{
                outline: "none",
                bg: "#3a76bf",
              }}
            >
              Start Now
            </Button>
          )}
        </Box>
        <Image
          src="/screen.png"
          alt=""
          width={{ base: "80%", sm: "65%", md: "50%" }}
          position="absolute"
          right={isTablet ? "" : "0px"}
          bottom="-6.5rem"
        />
      </Flex>
    </Box>
  );
};

export default Screen;
