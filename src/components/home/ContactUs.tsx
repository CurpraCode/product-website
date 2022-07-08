import React from 'react'
import { Box, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";

const ContactUs = () => {
  const [isTablet] = useMediaQuery("(max-width: 768px)");
  return (
    <Box
      bg="#3A76BF"
      display="flex"
      flexDirection="column"
      alignItems="center"
      py="3rem"
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
        px={{ base: "2rem", sm: "2rem", md: "3rem"}}
      >
        <Box display="flex" flexDirection="row" gap="1rem">
          <Image
            src="/location-1.svg"
            width="20%"
            height="20%"
            alt="location icon"
          />
          <Box color="white">
            <Heading size="sm">Address</Heading>
            <Text w={{ md: "100%", lg: "90%" }}>
              787 N Hampden St Minneapolis, MN
            </Text>
          </Box>
        </Box>
        <Box display="flex" flexDirection="row" gap="1rem">
          <Image
            src="/phone-1.svg"
            width="20%"
            height="20%"
            alt="location icon"
          />
          <Box color="white">
            <Heading size="sm">Phone</Heading>
            <Text w="100%">1-206-407-9000</Text>
          </Box>
        </Box>
        <Box display="flex" flexDirection="row" gap="1rem">
          <Image
            src="/mail-1.svg"
            width="20%"
            height="20%"
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