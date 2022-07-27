import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";

const How = () => {
  const [isMobile] = useMediaQuery("(max-width: 520px)");
  const [isBase] = useMediaQuery("(max-width: 430px)");
  return (
    <Box
      bg="rgb(255,255,255)"
      maxWidth="container.lg"
      px={{ lg: "0rem", md: "4rem", sm: "3rem", base: "2rem" }}
      mx="auto"
      py="8rem"
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
        <Box
          mr={{ lg: "3rem" }}
          ml={{ lg: "5rem" }}
          mb={{ lg: "0rem", sm: "3rem", base: "2rem" }}
        >
          <iframe
            width={isBase ? "300" : isMobile ? "400" : "500"}
            height="340"
            src="https://www.youtube.com/embed/XVkFtvW3GCE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>

        <Box
          pr={{ lg: "2rem" }}
          textAlign={{ lg: "left", md: "center", sm: "center", base: "center" }}
        >
          <Heading
            mb="1rem"
            fontWeight="700"
            fontSize={{
              lg: "36px",
              md: "24px",
              sm: "18px",
              base: "18px",
            }}
            pb="1rem"
          >
            Our Focus
          </Heading>

          <Image
            src="/Line.svg"
            alt=""
            pb="1rem"
            display={{ lg: "inline", md: "block", sm: "block" }}
            m={{ md: "auto", sm: "auto", base: "auto" }}
          />
          <Text
            lineHeight="35px"
            fontSize={{
              lg: "24px",
              base: "18px",
            }}
          >
            Providing competitive quality interpreting by innovating the way
            individuals & businesses communicate with people who are limited by
            Language barriers.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default How;
