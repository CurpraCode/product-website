import React from "react";
import { Box, Text, Heading, Image, Flex } from "@chakra-ui/react";

const Secure = () => {
  return (
    <Box bg="#F4F6F9">
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
            lg: "row-reverse",
            md: "column",
            sm: "column",
            base: "column",
          }}
          textAlign={{ lg: "left", md: "center", sm: "center" }}
        >
          <Image
            src="/Secure.svg"
            alt=""
            width="50%"
            display="block"
            ml={{ base: "0rem", sm: "0rem", lg: "5rem" }}
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
              Secure Connections 
        
            </Heading>
            <Image
              src="/secureline.svg"
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
              We prioritize top-notch security in our operations by employing a
              combination of cutting-edge measures. Our industry-leading
              security grade is achieved through a robust lineup of safeguards,
              including AWS Security & Compliance Hub, Orca Cybersecurity, and
              Sprinto for HIPAA compliance. Rest assured, your data and privacy
              are in safe hands.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Secure;
