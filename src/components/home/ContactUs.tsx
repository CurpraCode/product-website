import React from 'react'
import { Box, Heading, Text, Image as ChakraImage } from "@chakra-ui/react";
import Image from "next/image";

const ContactUs = () => {
  return (
    <Box
      bg="#3A76BF"
      display="flex"
      flexDirection="column"
      alignItems="center"
      py="6rem"
    >
      <Heading
        fontSize="24px"
        textTransform="capitalize"
        color="white"
        mb="2rem"
      >
        contact us
      </Heading>
      <Box
        display="flex"
        flexDirection="column"
        gap="1rem"
        px={{ base: "2rem", sm: "2rem", md: "3rem" }}
      >
        <Box display="flex" alignItems="center" flexDirection="row" gap="1rem">
          <ChakraImage
            src="/location-1.svg"
            width="20px"
            height="20px"
            alt="location icon"
          />
          <Box color="white">
            <Heading size="sm">Address</Heading>
            <Text w={{ md: "100%", lg: "90%" }}>
              787 N Hampden St Minneapolis, MN
            </Text>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" flexDirection="row" gap="1rem">
          <ChakraImage
            src="/phone-1.svg"
            width="20px"
            height="20px"
            alt="location icon"
          />
          <Box color="white">
            <Heading size="sm">Phone</Heading>
            <Text w="100%">1-206-407-9000</Text>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" flexDirection="row" gap="1rem">
          <ChakraImage
            src="/mail-1.svg"
            width="20px"
            height="20px"
            alt="location icon"
          />
          <Box color="white">
            <Heading size="sm">Email</Heading>
            <Text w="100%">support@canvey.io</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactUs