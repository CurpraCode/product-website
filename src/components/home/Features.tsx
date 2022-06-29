import React from "react";
import { Box, Flex, Text, Heading, Button, Image } from "@chakra-ui/react";

const Features = () => {
  return (
    <Box maxWidth="1220px" m="0 auto">
      <Flex
        justifyContent="space-evenly"
        flexDirection={{ md: "row", sm: "column" }}
      >
        <Flex
          justifyContent="space-between"
          mt="8rem"
          flexDirection={{ lg: "row", md: "column", sm: "column" }}
        >
          <Flex
            mt="2rem"
            justifyContent="space-evenly"
            alignItems="center"
            flexDirection={{ lg: "row", md: "column", sm: "column" }}
            textAlign={{ lg: "left", md: "center", sm: "center" }}
          >
            <Image
              src="/location.svg"
              alt=""
              width={{ lg: "25%", md: "35%", sm: "15%" }}
            />
            <Box width="150px" ml="0.9rem">
              <Heading mb="0.3rem" fontSize="1rem">
                Quality Interpreters
              </Heading>
              <Text fontSize="0.7rem">60+ languages provided</Text>
            </Box>
          </Flex>

          <Flex
            mt="2rem"
            justifyContent="space-evenly"
            alignItems="center"
            flexDirection={{ lg: "row", md: "column", sm: "column" }}
            textAlign={{ lg: "left", md: "center", sm: "center" }}
          >
            <Image
              src="/instant.svg"
              alt=""
              width={{ lg: "25%", md: "35%", sm: "15%" }}
            />
            <Box width="150px" ml="0.9rem">
              <Heading mb="0.3rem" fontSize="1rem">
                Instant Access
              </Heading>
              <Text fontSize="0.7rem">60+ languages provided</Text>
            </Box>
          </Flex>
        </Flex>
        <Flex
          justifyContent="space-between"
          mt={{ lg: "8rem", md: "8rem", sm: "2rem" }}
          flexDirection={{ lg: "row", md: "column", sm: "column" }}
        >
          <Flex
            mt="2rem"
            justifyContent="space-evenly"
            alignItems="center"
            flexDirection={{ lg: "row", md: "column", sm: "column" }}
            textAlign={{ lg: "left", md: "center", sm: "center" }}
          >
            <Image
              src="/confidential.svg"
              alt=""
              width={{ lg: "25%", md: "35%", sm: "15%" }}
            />
            <Box width="150px" ml="0.9rem">
              <Heading mb="0.3rem" fontSize="1rem">
                Confidentiality
              </Heading>
              <Text fontSize="0.7rem">100% secure portal</Text>
            </Box>
          </Flex>

          <Flex
            mt="2rem"
            justifyContent="space-evenly"
            alignItems="center"
            flexDirection={{ lg: "row", md: "column", sm: "column" }}
            textAlign={{ lg: "left", md: "center", sm: "center" }}
          >
            <Image
              src="/support.svg"
              alt=""
              width={{ lg: "25%", md: "35%", sm: "15%" }}
            />
            <Box width="150px" ml="0.9rem">
              <Heading mb="0.3rem" fontSize="1rem">
                24/7 Support
              </Heading>
              <Text fontSize="0.7rem">Available to assist</Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Features;
