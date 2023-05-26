import React from "react";
import { Box, Text,Button, Heading, Stack, VStack, Center } from "@chakra-ui/react";
import ImageSection from "./ImageSection";
import HealthCareSlides from "./HealthCareSlides";
import NextLink from "next/link";

const Health = () => {
  return (
    <Center
      maxW="7xl"
      m="0 auto"
      py="8rem"
      h={[800, 800, 700]}
      px={{ lg: "3rem", md: "3rem", sm: "3rem", base: "2rem" }}
    >
      <Stack
        h="100%"
        direction={["column", "column", "row"]}
        justifyContent="center"
        alignItems="center"
        spacing="20px"
      >
        {/* image and info section */}
        <Center h="100%" width={["100%", "100%", "60%"]}>
          <Center
            h={[250, 300, 400, 500]}
            w={[250, 300, 400, 500]}
            border="4px"
            borderColor="#AE64A740"
            data-group
            borderRadius="full"
            position="relative"
            justifyContent="center"
            alignItems="center"
            cursor="pointer"
          >
            <ImageSection />
            <HealthCareSlides groupHover={{ zIndex: 50, opacity: 1 }} />
          </Center>
        </Center>

        {/* right section */}
        <VStack
          width={["100%", "100%", "40%"]}
          h="100%"
          mt="0"
          spacing={["30px"]}
          alignItems={["center", "center", "start"]}
          justifyContent={["", "", "center"]}
          textAlign={["center", "center", "start"]}
        >
          <Heading fontWeight="700" fontSize={["18px", "25px", "36px"]}>
            Advocates For Healthcare
          </Heading>

          <Box w="60px" border="2.5px solid #AE64A7" borderRadius="5px"></Box>
          <Text
            lineHeight="35px"
            color="#575757"
            fontSize={{
              lg: "22px",
              md: "18px",
              sm: "18px",
              base: "12px",
         
            }}
          >
            We&rsquo;re passionate healthcare advocates dedicated to empowering
            underserved communities with multilingual communication. Our
            innovative services reduce interpretation errors and prevent fraud,
            ensuring access to accurate healthcare information for all.
          </Text>
          <NextLink href="/sign-up" passHref>
              <Button
                bg="#AE64A7"
                borderRadius="8px"
                py="25px"
                color="#fff"
                width="100%"
                fontWeight="700"
                fontSize="18px"
                maxW="200px"
                mt={{ base: "2rem", xl: "2.5rem" }}
                _hover={{
                  bg: "#AE64A7",
                }}
                _focus={{
                  outline: "none",
                  bg: "#AE64A7",
                }}
              >
              Get Started
              </Button>
            </NextLink>
        </VStack>
      </Stack>
    </Center>
  );
};

export default Health;
