import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
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
      <Box>
        <Image src="/canvey-logo.svg" alt="canvey logo" />
      </Box>
      <Box
        display="flex"
        gap={{ base: "1rem", sm: "2rem", md: "4rem" }}
        color="white"
        flexDirection={{ base: "column", sm: "row" }}
      >
        <Text>Privacy Policy</Text>
        <Text>HIPAA Compliance</Text>
        <Text>Terms Of Use</Text>
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
