import { Image, Box, Center } from "@chakra-ui/react";
import React from "react";

const ImageSection = () => {
  return (
    <Center
      pos="relative"
      w={[200, 250, 350, 400, 480]}
      h={[200, 250, 350, 400, 480]}
    >
      {/* circle animation with three moons */}
      <Box className="circle" w="100%" h="100%" borderRadius="50%">
        <Box
          className="moon-box one"
          w={["12px", "18px", "23px", "30px"]}
          h={["12px", "18px", "23px", "30px"]}
        >
          <Box className="moon-color-1"></Box>
        </Box>
        <Box
          className="moon-box two"
          w={["12px", "18px", "23px", "30px"]}
          h={["12px", "18px", "23px", "30px"]}
        >
          <Box className="moon-color-2"></Box>
        </Box>
        <Box
          className="moon-box three"
          w={["12px", "18px", "23px", "30px"]}
          h={["12px", "18px", "23px", "30px"]}
        >
          <Box className="moon-color-3"></Box>
        </Box>
        <Image
          src="/gradient-circle.svg"
          alt=""
          w="100%"
          h="100%"
          pos="absolute"
        />
      </Box>

      {/* fem image */}
      <Center pos="relative" w="100%" h="100%">
        <Image
          src="/inside-circle.svg"
          alt=""
          w="78%"
          h="78%"
          pos="absolute"
          className="circle"
        />
        <Image src="/fem.svg" alt="" w="88%" h="88%" />
      </Center>
    </Center>
  );
};

export default ImageSection;
