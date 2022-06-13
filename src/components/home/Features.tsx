import React from "react";
import { Box, Flex, Text, Heading, Button, Image } from "@chakra-ui/react";

const Features = () => {
  return (
    <Box maxWidth="1220px" m="0 auto">
      <Flex justifyContent="space-between" mt="8rem">
        <Flex mt="2rem" justifyContent="space-evenly" alignItems="center">
          <Image src="/location.svg" alt="" width="25%" />
          <Box width="150px" ml="0.9rem">
            <Heading mb="0.3rem" fontSize="1rem">
              Quality Interpreters
            </Heading>
            <Text fontSize="0.7rem">60+ languages provided</Text>
          </Box>
        </Flex>

        <Flex mt="2rem" justifyContent="space-evenly" alignItems="center">
          <Image src="/instant.svg" alt="" width="25%" />
          <Box width="150px" ml="0.9rem">
            <Heading mb="0.3rem" fontSize="1rem">
              Instant Access
            </Heading>
            <Text fontSize="0.7rem">60+ languages provided</Text>
          </Box>
        </Flex>
        <Flex mt="2rem" justifyContent="space-evenly" alignItems="center">
          <Image src="/confidential.svg" alt="" width="25%" />
          <Box width="150px" ml="0.9rem">
            <Heading mb="0.3rem" fontSize="1rem">
              Confidentiality
            </Heading>
            <Text fontSize="0.7rem">100% secure portal</Text>
          </Box>
        </Flex>

        <Flex mt="2rem" justifyContent="space-evenly" alignItems="center">
          <Image src="/support.svg" alt="" width="25%" />
          <Box width="150px" ml="0.9rem">
            <Heading mb="0.3rem" fontSize="1rem">
              24/7 Support
            </Heading>
            <Text fontSize="0.7rem">Available to assist</Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Features;
