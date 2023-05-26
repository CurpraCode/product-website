import React from "react";
import { Box, Flex, Text, Heading, Image } from "@chakra-ui/react";


const Efficient = () => {
  return (
    <Box>
      <Box
        maxW="7xl"
        m="0 auto"
        py="8rem"
        px={{ lg: "6rem", md: "4rem", sm: "3rem", base: "2rem" }}
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{
            lg: "row",
            md: "column",
            sm: "column",
            base: "column",
          }}
          textAlign={{ lg: "left", md: "center", sm: "center" }}
        >
          <Image
            src="/InterpreteChart.svg"
            alt=""
            width="50%"
            display="block"
            mr={{ base: "0rem", sm: "0rem", lg: "5rem" }}
            mb={{ lg: "0rem", sm: "3rem", base: "2rem" }}
          />
          <Box
            mb="3rem"
            textAlign={{
              lg: "left",
              md: "center",
              sm: "center",
              base: "center",
            }}
          >
            <Heading
              mb="1rem"
              fontWeight="700"
              fontSize={{
                lg: "32px",
                md: "24px",
                sm: "18px",
                base: "18px",
              }}
              pb="1rem"
            >
              Interpretation Made Simple
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
              fontSize={{
                lg: "22px",
                md: "18px",
                sm: "18px",
                base: "12px",
              }}
            >
              Our company offers innovative interpreting services that break
              down language barriers and provide efficient communication
              solutions for businesses and individuals. Let Canvey help you
              effectively communicate with a diverse audience by providing both
              in-person and remote interpreting services tailored to your needs.
              Join us today and experience the power of seamless communication.
            </Text>
           
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Efficient;
