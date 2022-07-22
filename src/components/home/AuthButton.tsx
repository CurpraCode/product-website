import React from 'react'
import { HStack, Button, useMediaQuery } from "@chakra-ui/react";

const AuthButton = () => {

  const [isTablet] = useMediaQuery("(max-width: 560px)");
  const [isBase] = useMediaQuery("(max-width: 360px)");

  return (
    <HStack>
      <Button
        bg="transparent"
        color="#fff"
        border="2px solid #fff"
        w={isBase ? "120px" : isTablet ? "150px" : {sm: "110px", md: "110px"}}
        h={isTablet ? "50px" : {sm: "40px", md: "40px"}}
        p="10px"
        borderRadius="8px"
        _hover={{
          bg: "none",
        }}
        _focus={{
          outline: "none",
          bg: "none",
        }}
      >
        Sign Up
      </Button>
      <Button
        bg="#fff"
        color="#1491B8"
        border="2px solid #fff"
        w={isBase ? "120px" : isTablet ? "150px" : {sm: "110px", md: "110px"}}
        h={isTablet ? "50px" : {sm: "40px", md: "40px"}}
        _hover={{
          bg: "#fff",
        }}
        _focus={{
          outline: "none",
          bg: "#fff",
        }}
      >
        Sign In
      </Button>
    </HStack>
  );
}

export default AuthButton