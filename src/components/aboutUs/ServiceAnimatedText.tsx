import React from "react";
import { Center, Text, useMediaQuery } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";

const ServiceAnimatedText = () => {
   const [isBase] = useMediaQuery("(max-width: 390px)");

  return (
    <Center my="5rem">
      <Text
        w={[700, 700, 750]}
        textAlign="left"
        fontSize={isBase? "0.9rem":"1.2rem"}
        color="#ffffff"
      >
        We strive to provide services that express
        <Text
          as="span"
          display="inline"
          fontWeight="bolder"
          ml="0.5rem"
          color="#D4E0EF"
        >
          <TypeAnimation
            sequence={[
              "Compassion",
              1000,
              "Patient-centeredness",
              1000,
              "Wellness",
              1000,
              "Healing",
              1000,
              "Empathy",
              1000,
              "Reliability",
              1000,
              "Accessibility",
              1000,
              "Continuity of care",
              1000,
              "Community care",
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
