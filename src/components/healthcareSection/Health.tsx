import React from "react";
import { Box, Text, Heading, Stack, VStack, Center } from "@chakra-ui/react";
import ImageSection from "./ImageSection";
import HealthCareSlides from "./HealthCareSlides";

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
        px="5rem"
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
          spacing={["40px"]}
          alignItems={["center", "center", "start"]}
          justifyContent={["", "", "center"]}
          textAlign={["center", "center", "start"]}
        >
          <Heading fontWeight="700" fontSize={["18px", "25px", "36px"]}>
            Advocates for <br /> healthcare
          </Heading>

          <Box w="60px" border="4px solid #AE64A7" borderRadius="5px"></Box>
          <Text
            lineHeight="35px"
            color="#575757"
            fontSize={{
              lg: "24px",
              base: "18px",
            }}
          >
            Our focus is to help facilitate the highest level of care for LEP
            patients.
          </Text>
        </VStack>
      </Stack>
    </Center>
  );
};

export default Health;
