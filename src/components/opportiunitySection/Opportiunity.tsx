import React from "react";
import {
  Box,
  Stack,
  Text,
  Heading,
  Button,
  Center,
  VStack,
  Image
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
              Opportunities For <br /> Interpreters
            </Heading>
            <Image
              src="/Line.svg"
              alt=""
              pb="1rem"
              m={{ md: "auto", sm: "auto", base: "auto" }}
              display={{ lg: "inline", md: "block", sm: "block" }}
            />
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
              We&rsquo;re dedicated to creating flexible opportunities for
              interpreters to work from anywhere and at any time. With our
              user-friendly app, interpreters can easily connect with clients,
              get paid for their services, and enjoy the freedom and flexibility
              of remote or in-person work.
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
