import React from "react";
import {
  Box,
  Text,
  Heading,
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
  Textarea,
  useMediaQuery
} from "@chakra-ui/react";
import Image from "next/image";

const Contact = () => {
  const [isTablet] = useMediaQuery("(max-width: 767px)");
  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        bg={{ base: "#F4F6F9", md: "white" }}
      >
        <Box
          maxWidth="container.lg"
          py="8rem"
          display="flex"
          alignItems="center"
          flexDirection="row"
          ml={{ md: "16rem", lg: "20rem" }}
          position="relative"
        >
          <Box
            bg="#3A76BF"
            borderRadius="8px"
            width={{ md: "300px", lg: "360px" }}
            height={{ md: "360px", lg: "400px" }}
            position="absolute"
            left={{ md: "-16rem", lg: "-18rem" }}
            display={{ base: "none", sm: "none", md: "flex" }}
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
          <Box
            bg={{ base: "#F4F6F9", md: "white" }}
            width={{ md: "400px", lg: "500px" }}
            height={{ md: "440px", lg: "500px" }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            pt={{ base: "0rem", sm: "0rem", md: "3rem" }}
            boxShadow={{ base: "none", md: "0px 4px 20px rgba(0, 0, 0, 0.12)" }}
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
            <Box
              display="flex"
              alignItems="stretch"
              flexDirection="column"
              gap="1.5rem"
            >
              <Stack spacing={4}>
                <InputGroup bg="white">
                  <InputLeftElement pointerEvents="none">
                    {
                      <Image
                        src="/name.svg"
                        width="15%"
                        height="15%"
                        alt="name"
                      />
                    }
                  </InputLeftElement>
                  <Input type="text" placeholder="Name" required />
                </InputGroup>

                <InputGroup bg="white">
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    fontSize="1.2em"
                  >
                    {
                      <Image
                        src="/email-black.svg"
                        width="15%"
                        height="15%"
                        alt="name"
                      />
                    }
                  </InputLeftElement>
                  <Input type="email" placeholder="Email" required />
                </InputGroup>

                <InputGroup bg="white">
                  <Textarea placeholder="Message" rows={isTablet ? 7 : 5} />
                </InputGroup>
              </Stack>
              <Input
                type="submit"
                value={isTablet ? "Send Message" : "Contact Us"}
                bg="#3A76BF"
                color="white"
                fontWeight="500"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
