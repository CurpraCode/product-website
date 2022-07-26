import React from "react";
import { Box, HStack, useMediaQuery, Image, Button } from "@chakra-ui/react";
import Link from "next/link";
import AuthButton from "../components/home/AuthButton"

interface Props {
  name: string;
}
const Header = ({ name }: Props) => {
  const [isTablet] = useMediaQuery("(max-width: 560px)");
  const [isBase] = useMediaQuery("(max-width: 360px)");
  
  return (
    <Box bg={name}>
      <HStack
        justifyContent={isTablet ? "" : "space-between"}
        alignItems="center"
        m="auto"
        maxW="8xl"
        p="16px 64px"
        mb="1rem"
      >
        <Link href="/">
          <Image
            src="/canvey-logo.png"
            alt=""
            mt={isTablet ? "2.5rem" : "null"}
            cursor="pointer"
          />
        </Link>
        {/* <AuthButton /> */}
        {isTablet ? null : <AuthButton />}
      </HStack>
      {isTablet ? (
        <HStack p="16px 64px 64px 64px">
          <Button
            bg="transparent"
            color="#fff"
            border="2px solid #fff"
            w={
              isBase
                ? "120px"
                : isTablet
                ? "150px"
                : { sm: "110px", md: "110px" }
            }
            h={isTablet ? "50px" : { sm: "40px", md: "40px" }}
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
            w={
              isBase
                ? "120px"
                : isTablet
                ? "150px"
                : { sm: "110px", md: "110px" }
            }
            h={isTablet ? "50px" : { sm: "40px", md: "40px" }}
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
      ) : null}
    </Box>
  );
};

export default Header;
