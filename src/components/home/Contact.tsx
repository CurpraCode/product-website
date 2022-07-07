import React from "react";
import { Box, Text, Heading, Flex } from "@chakra-ui/react";
import location from "../../../public/location.svg"
import Image from "next/image"

const Contact = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      bg="#F4F6F9"
    >
      <Box
        maxWidth="container.lg"
        py="5rem"
        display="flex"
        alignItems="center"
        flexDirection="row"
        ml="20rem"
        position="relative"
      >
        <Box
          bg="#3A76BF"
          borderRadius="8px"
          width="360px"
          height="400px"
          position="absolute"
          left="-19rem"
          display="flex"
          flexDirection="column"
          alignItems="center"
          pt="3rem"
        >
          <Heading
            fontSize="24px"
            textTransform="capitalize"
            color="white"
            mb="2rem"
          >
            contact us
          </Heading>
          <Box display="flex" flexDirection="column" gap="1rem" px="4rem">
            <Box display="flex" flexDirection="row" gap="1rem">
              <Image
                src="/location-1.svg"
                width="20%"
                height="20%"
                alt="location icon"
              />
              <Box color="white">
                <Heading size="sm">Address</Heading>
                <Text w="90%">787 N Hampden St Minneapolis, MN</Text>
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
        <Box
          bg="white"
          width="500px"
          height="500px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          pt="3rem"
        >
          <Heading
            fontSize="24px"
            textTransform="capitalize"
            color="#403E50"
            fontWeight="700"
            mb="2rem"
          >
            message us
          </Heading>
          <Box display="flex" flexDirection="column" gap="1.5rem">
            <Box>Name</Box>
            <Box>Email</Box>
            <Box>Message</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
