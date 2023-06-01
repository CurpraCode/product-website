import React from "react";
import {
  Box,
  Image,
  Flex,
  Heading,
  HStack,
  useMediaQuery,
} from "@chakra-ui/react";

const Download = () => {
  const [isTab] = useMediaQuery("(max-width: 760px)");

  const [isSmall] = useMediaQuery("(max-width: 420px)");
  return (
    <Box bg="#403E50">
      <Box
        maxW="7xl"
        m="0 auto"
        py="4rem"
        mt={isTab ? "8rem" : "2rem"}
        px={{ lg: "6rem", md: "4rem", sm: "3rem", base: "2rem" }}
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
                lg: "22px",
                md: "20px",
                sm: "15px",
                base: "15px",
              }}
              color="#fff"
            >
              Download our App from the PlayStore or App Store
            </Heading>
          </Box>
          <HStack alignItems="center" justifyContent={isSmall ? "center" : ""}>
            <Image
              src="/lgplay.svg"
              alt=""
              width={isSmall ? "35%" : ""}
              mr={{ base: "0rem", sm: "0rem", lg: "2rem" }}
            />
            <Image src="/lgapple.svg" alt="" width={isSmall ? "35%" : ""} />
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Download;
