import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
  return (
    <Box
      bg="#403E50"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      gap="2rem"
      py={"2rem"}
      h={["600px", "400px"]}
      px={{ base: "1rem", sm: "1rem", md: "3rem" }}
    >
      <Link href="/">
        <Box cursor="pointer">
          <Image src="/logo.png" alt="canvey logo" />
        </Box>
      </Link>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={{ base: "3rem", sm: "3rem", md: "5rem" }}
        color="white"
        flexDirection={{ base: "column", sm: "row", md: "row" }}
        mt="2rem"
      >
        <Link href="/privacy-policy">
          <Text cursor="pointer">Privacy Policy</Text>
        </Link>
        <Link href="/hippa-compliance">
          <Text cursor="pointer">HIPAA Compliance</Text>
        </Link>
        <Link href="/terms-of-use">
          <Text cursor="pointer">Terms Of Use</Text>
        </Link>
        <Link href="/contact-us">
          <Text cursor="pointer">Contact Us</Text>
        </Link>
      </Box>
      <Box display="flex" gap="4.5rem" color="white" mb="2rem" mt="2rem">
        <Image src="/twitter.svg" alt="social twitter" />
        <Image src="/instagram.svg" alt="social instagram" />
        <Image src="/facebook.svg" alt="social facebook" />
      </Box>
    </Box>
  );
};

export default Footer;
