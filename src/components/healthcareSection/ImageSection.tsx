import React from "react";
import { Center, Image } from "@chakra-ui/react";

const ImageSection = () => {
  return (
    <Center
      width="90%"
      height="90%"
      bg="#AE64A740"
      borderRadius="50%"
      overflow="hidden"
      zIndex={10}
    >
      <Image src="/nurse.svg" alt="nurse" width="100%" height="100%" />
    </Center>
  );
};

export default ImageSection;
