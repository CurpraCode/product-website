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
    <Box maxWidth="container.lg" mx="auto" mt={{ lg: "-7rem", md: "-2rem", base: "4rem" }}>
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
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
            gap={{base: "0.1rem", sm: "1rem"}}
            flexDirection="column"
            textAlign="center"
          >
            <Image src="/location.svg" alt="" width={{base: "50px", sm: "70px"}} height={{base: "50px", sm: "70px"}} />
            <Box width={{base: "100px", sm: "150px"}}>
              <Heading mb="0.3rem" fontSize={{base: "0.8rem", sm: "1rem"}}>
                Quality Interpreters
              </Heading>
              <Text fontSize={{base: "0.6rem", sm: "0.7rem"}}>60+ languages provided</Text>
            </Box>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex
            mt="2rem"
            justifyContent="space-evenly"
            alignItems="center"
            gap={{base: "0.1rem", sm: "1rem"}}
            flexDirection="column"
            textAlign="center"
          >
            <Image src="/instant.svg" alt="" width={{base: "50px", sm: "70px"}} height={{base: "50px", sm: "70px"}} />
            <Box width={{base: "100px", sm: "150px"}}>
              <Heading mb="0.3rem" fontSize={{base: "0.8rem", sm: "1rem"}}>
                Instant Access
              </Heading>
              <Text fontSize={{base: "0.6rem", sm: "0.7rem"}}>Video and audio options</Text>
            </Box>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex
            mt="2rem"
            justifyContent="space-evenly"
            alignItems="center"
            gap={{base: "0.1rem", sm: "1rem"}}
            flexDirection="column"
            textAlign="center"
          >
            <Image src="/confidential.svg" alt="" width={{base: "50px", sm: "70px"}} height={{base: "50px", sm: "70px"}} />
            <Box width={{base: "100px", sm: "150px"}}>
              <Heading mb="0.3rem" fontSize={{base: "0.8rem", sm: "1rem"}}>
                Confidentiality
              </Heading>
              <Text fontSize={{base: "0.6rem", sm: "0.7rem"}}>100% secure portal</Text>
            </Box>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex
            mt="2rem"
            justifyContent="space-evenly"
            alignItems="center"
            gap={{base: "0.1rem", sm: "1rem"}}
            flexDirection="column"
            textAlign="center"
          >
            <Image src="/support.svg" alt="" width={{base: "50px", sm: "70px"}} height={{base: "50px", sm: "70px"}} />
            <Box width={{base: "100px", sm: "150px"}}>
              <Heading mb="0.3rem" fontSize={{base: "0.8rem", sm: "1rem"}}>
                24/7 Support
              </Heading>
              <Text fontSize={{base: "0.6rem", sm: "0.7rem"}}>Available to assist</Text>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Features;
