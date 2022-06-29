import React from "react";
import Image from "next/image";
import { Box, HStack, Button } from "@chakra-ui/react";
import Link from "next/Link";

interface Props {
  name: string;
}
const Header = ({ name }: Props) => {
  console.log(name);
  return (
    <Box bg={name}>
      <HStack justifyContent="space-between" alignItems="center" p="16px 64px">
        <Link href="/">
          <Image src="/canvey-logo.svg" alt="" width={172} height="32px" />
        </Link>

        <HStack>
          <Button
            bg="transparent"
            color="#fff"
            border="2px solid #fff"
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
      </HStack>
    </Box>
  );
};

export default Header;
