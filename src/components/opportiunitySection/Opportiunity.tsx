import React from "react";
import {
  Box,
  Stack,
  Text,
  Heading,
  Button,
  Center,
  VStack,
} from "@chakra-ui/react";
import ImageSection from "./ImageSection";

const Opportiunity = () => {
  return (
    <Box bg="#F4F6F9">
      <Center
        maxW="7xl"
        m="0 auto"
        py="8rem"
        px={{ lg: "3rem", md: "3rem", sm: "3rem", base: "2rem" }}
        h={[800, 800, 700]}
      >
        <Stack
          h="100%"
          direction={["column-reverse", "column-reverse", "row"]}
          justifyContent="center"
          alignItems="center"
          spacing="20px"
          px="5rem"
        >
          {/* left section */}
          <VStack
            width={["100%", "100%", "100%"]}
            h="100%"
            spacing={["40px"]}
            alignItems={["center", "center", "start"]}
            justifyContent="center"
            textAlign={["center", "center", "start"]}
          >
            <Heading fontWeight="700" fontSize={["18px", "25px", "32px"]}>
              Opportunities for <br /> Interpreters
            </Heading>
            <Box w="60px" border="4px solid #686DF1" borderRadius="5px"></Box>
            <Text
              lineHeight="35px"
              color="#575757"
              fontSize={{
                lg: "22px",
                base: "18px",
              }}
            >
              At Canvey we want interpreters to work from anywhere at anytime.
              Get on the app and get paid.
            </Text>
            <Button
              bg="#3a76bf"
              borderRadius="8px"
              py="25px"
              color="#fff"
              width="100%"
              fontWeight="700"
              fontSize="18px"
              maxW="200px"
              mt={{ base: "2rem", xl: "2.5rem" }}
              _hover={{
                bg: "#3a76bf",
              }}
              _focus={{
                outline: "none",
                bg: "#3a76bf",
              }}
            >
              Get Started
            </Button>
          </VStack>

          {/* right - image animation section */}
          <Center h="100%" width={["100%", "100%", "60%"]}>
            <ImageSection />
          </Center>
        </Stack>
      </Center>
    </Box>
  );
};

export default Opportiunity;
