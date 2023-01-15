import React from "react";
import { Flex, Stack, Text, SystemStyleObject } from "@chakra-ui/react";

const HealthCareSlides = ({
  groupHover,
}: {
  groupHover: SystemStyleObject;
}) => {
  return (
    <Flex
      bg="#AE64A7E5"
      color="#fff"
      borderRadius="full"
      pos="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      zIndex={-1}
      opacity={0}
      transition="0.3s"
      _groupHover={groupHover}
    >
      <Stack
        height={{ base: "250px", sm: "300px", md: "400px", lg: "500px" }}
        align="center"
        justifyContent="center"
        textAlign="center"
        px={["35px", "45px"]}
        w={["240px", "300px", "480px"]}
      >
        <Text fontSize={["15px", "18px", "24px", "28px"]}>
          Nearly half of U.S. physicians say language or other cultural barriers
          are obstacles to providing high-quality patient care
        </Text>
      </Stack>
    </Flex>
  );
};

export default HealthCareSlides;
