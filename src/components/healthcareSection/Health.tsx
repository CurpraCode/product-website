import React from "react";
import { Box, Flex, Text, Heading, Image, Button } from "@chakra-ui/react";
import ImageSection from "./ImageSection";
import HealthCareSlides from "./HealthCareSlides";

const Health = () => {
  return (
    <>
      <Box
        maxWidth="container.lg"
        m="0 auto"
        py="8rem"
        px={{ lg: "4rem", md: "3rem", sm: "3rem", base: "2rem" }}
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{
            lg: "row-reverse",
            md: "column-reverse",
            sm: "column-reverse",
            base: "column-reverse",
          }}
          textAlign={{ lg: "left", md: "center", sm: "center", base: "center" }}
          height="500px"
        >
          <Box width={{ base: "100%", md: "100%", lg: "50%" }} h={"100%"}>
            <Heading
              mb="1rem"
              fontWeight="700"
              fontSize={{
                lg: "36px",
                md: "24px",
                sm: "18px",
                base: "18px",
              }}
              pb="1rem"
            >
              Advocates for <br /> healthcare
            </Heading>
            <Image
              src="/Lineblue.svg"
              alt=""
              pb="1rem"
              m={{ md: "auto", sm: "auto", base: "auto" }}
              display={{ lg: "inline", md: "block", sm: "block" }}
            />
            <Text lineHeight="35px" color="#575757" fontSize="24px">
              We proudly advocate for underserved communities by facilitating
              multi-lingual communications. Our services reduce interpretation
              mistakes and fraud
            </Text>
          </Box>

          {/* image and info section */}
          <Box h="100%" width="60%">
            <Flex
              h={{ base: "200px", md: "250px", lg: "400px" }}
              w={{ base: "200px", md: "250px", lg: "400px" }}
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
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Health;
