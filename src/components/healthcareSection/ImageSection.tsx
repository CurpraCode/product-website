import React from "react";
import { Flex, Image } from "@chakra-ui/react";

const ImageSection = () => {
  return (
    <Flex
      width="90%"
      height="90%"
      bg="#AE64A740"
      // border="2px"

      borderRadius="50%"
      zIndex={10}
      alignItems={"center"}
      justifyContent="center"
      overflow={"hidden"}
    >
      <Image src="/nurse.svg" alt="" width="100%" height="100%" />
    </Flex>
  );
};

export default ImageSection;
