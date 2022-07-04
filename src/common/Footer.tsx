import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import Link from "next/Link";
const Footer = () => {
  return (
    <Box
      bg="#210933"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      gap="5rem"
      py="5rem"
      px={{ base: "1rem", sm: "2rem", md: "3rem" }}
    >
      <Link href="/">
        <Box cursor="pointer">
          <Image src="/canvey-logo.svg" alt="canvey logo" />
        </Box>
      </Link>

      <Box
        display="flex"
        gap={{ base: "1rem", sm: "2rem", md: "4rem" }}
        color="white"
        flexDirection={{ base: "column", sm: "row" }}
      >
        <Link href="/Policy">
          <Text cursor="pointer">Privacy Policy</Text>
        </Link>
        <Link href="/hippa">
          <Text cursor="pointer">HIPAA Compliance</Text>
        </Link>
        <Link href="/terms">
          <Text cursor="pointer">Terms Of Use</Text>
        </Link>
      </Box>
      <Box display="flex" gap="2rem" color="white">
        <Image src="/twitter.svg" alt="social twitter" />
        <Image src="/instagram.svg" alt="social instagram" />
        <Image src="/facebook.svg" alt="social facebook" />
      </Box>
    </Box>
  );
};

export default Footer;
