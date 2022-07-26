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
  const [isTablet] = useMediaQuery("(max-width: 560px)");
  const [isDesktop] = useMediaQuery("(max-width: 991px)");
  return (
    <Box
      maxWidth="container.xl"
      height={isTablet ? "auto" : "550px"}
      m="auto"
      position="relative"
    >
      <Flex
        justifyContent="space-between"
        alignItems={isTablet ? "" : ""}
        mt="1rem"
        flexDirection={{
          lg: "row",
          md: "column",
          sm: "column",
          base: "column",
        }}
      >
        <Box
          mt={isTablet ? "0rem" : "4rem"}
          ml={{
            sm: "3rem",
            md: "3rem",
            lg: "3.5rem",
            xl: "3.5rem",
            base: "3rem",
          }}
          pb={{ base: "2rem" }}
          textAlign={isTablet ? "left" : "left"}
        >
          <Image
            src="/screen.svg"
            alt=""
            display={isTablet ? "block" : "none"}
            width="80%"
          />
          <Heading
            color="#fff"
            fontWeight="bold"
            mb="1rem"
            fontSize={{ base: "24px", sm: "32px", md: "48px" }}
          >
            We Speak your <br /> Language
          </Heading>

          {isTablet ? (
            <Box mt="3rem" alignItems="center" justifyContent="center">
              <AuthButton />
            </Box>
          ) : null}

          {isDesktop ? null : (
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
          src="/screen.svg"
          alt="mac and phone"
          display={isTablet ? "none" : "block"}
          width={{ base: "80%", sm: "65%", md: "50%", lg: "36%", xl: "35%" }}
          position="absolute"
          right={isTablet ? "" : "0px"}
          top={{ md: "10.5rem", lg: "4.5rem", sm: "10rem" }}
        />
      </Flex>
    </Box>
  );
};

export default Screen;
