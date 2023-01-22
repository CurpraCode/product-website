import React from "react";
import { Center, Text } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";

const ServiceAnimatedText = () => {
  return (
    <Center my="5rem">
      <Text w={[400, 400, 550]} textAlign="left" fontSize="1.2rem">
        We strive to provide services that express
        <Text
          as="span"
          display="inline"
          fontWeight="bolder"
          ml="0.5rem"
          color="#3A76BF"
        >
          <TypeAnimation
            sequence={[
              "Integrity",
              1000,
              "Inclusion",
              1000,
              "Community",
              1000,
              "Compassion",
              1000,
              "Prosperity",
              1000,
              "Privacy",
              1000,
              
            ]}
            speed={40} // Custom Speed from 1-99 - Default Speed: 40
            wrapper="span" // Animation will be rendered as a <span>
            repeat={Infinity} // Repeat this Animation Sequence infinitely
          />
        </Text>
      </Text>
    </Center>
  );
};

export default ServiceAnimatedText;
