import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const Features = () => {
  return (
    <Box maxWidth="container.xl" mx="auto" mt="6rem">
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={6}
      >
        <GridItem>
          <Flex
            mt="2rem"
            justifyContent="space-evenly"
            alignItems="center"
            gap="1rem"
            flexDirection="column"
            textAlign="center"
          >
            <Image src="/location.svg" alt="" width="70px" height="70px" />
            <Box width="150px" ml="0.9rem">
              <Heading mb="0.3rem" fontSize="1rem">
                Quality Interpreters
              </Heading>
              <Text fontSize="0.7rem">60+ languages provided</Text>
            </Box>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex
            mt="2rem"
            justifyContent="space-evenly"
            alignItems="center"
            gap="1rem"
            flexDirection="column"
            textAlign="center"
          >
            <Image src="/instant.svg" alt="" width="70px" height="70px" />
            <Box width="150px" ml="0.9rem">
              <Heading mb="0.3rem" fontSize="1rem">
                Instant Access
              </Heading>
              <Text fontSize="0.7rem">60+ languages provided</Text>
            </Box>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex
            mt="2rem"
            justifyContent="space-evenly"
            alignItems="center"
            gap="1rem"
            flexDirection="column"
            textAlign="center"
          >
            <Image src="/confidential.svg" alt="" width="70px" height="70px" />
            <Box width="150px" ml="0.9rem">
              <Heading mb="0.3rem" fontSize="1rem">
                Confidentiality
              </Heading>
              <Text fontSize="0.7rem">100% secure portal</Text>
            </Box>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex
            mt="2rem"
            justifyContent="space-evenly"
            alignItems="center"
            gap="1rem"
            flexDirection="column"
            textAlign="center"
          >
            <Image src="/support.svg" alt="" width="70px" height="70px" />
            <Box width="150px" ml="0.9rem">
              <Heading mb="0.3rem" fontSize="1rem">
                24/7 Support
              </Heading>
              <Text fontSize="0.7rem">Available to assist</Text>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Features;
