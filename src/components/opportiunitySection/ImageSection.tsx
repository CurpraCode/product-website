import { Box, Image } from "@chakra-ui/react";
import React from "react";

const ImageSection = () => {
  return (
    <Box className="container">
      {/* circle animation with three moons */}
      <Box className="circle">
        <Box className="moon-box one">
          <Box className="moon-color-1"></Box>
        </Box>
        <Box className="moon-box two">
          <Box className="moon-color-2"></Box>
        </Box>
        <Box className="moon-box three">
          <Box className="moon-color-3"></Box>
        </Box>
      </Box>

      {/* fem image */}
      <Box pos="relative">
        <Image
          src="/gradient-circle.svg"
          alt=""
          width="100%"
          height={"100%"}
          pos="absolute"
        />
        <Image src="/fem.png" alt="" width="100%" height={"100%"} />
      </Box>
    </Box>
  );
};

export default ImageSection;
