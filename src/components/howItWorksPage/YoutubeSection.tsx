import React from "react";
import { Box, Image } from "@chakra-ui/react";

const YoutubeSection = () => {
  return (
    <Box h={["500", "700"]} pos="relative">
      <Box pos="absolute" top="0" left="0" right="0" h="300">
        <Image
          src="/Rectangle-gradient-background.svg"
          alt="gradient background"
          objectFit="cover"
          boxSize="full"
        />
      </Box>
      
      <Box
        as="iframe"
        src="https://www.youtube.com/embed/XVkFtvW3GCE"
        w={["300", "440", "560"]}
        h={["180", "230", "340"]}
        pos="absolute"
        top="200"
        left="50%"
        borderRadius={15}
        transform="translate(-50%)"
        sx={{
          aspectRatio: "16/9",
        }}
      />
    </Box>
  );
};

export default YoutubeSection;
