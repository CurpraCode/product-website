import React from "react";
import { Box, HStack, useMediaQuery, Image } from "@chakra-ui/react";
import Link from "next/link";
import AuthButton from "../components/home/AuthButton"

interface Props {
  name: string;
}
const Header = ({ name }: Props) => {
  const [isTablet] = useMediaQuery("(max-width: 560px)");
  
  return (
    <Box bg={name}>
      <HStack
        justifyContent={isTablet ? "" : "space-between"}
        alignItems="flex-start"
        m="auto"
        maxW="container.lg"
        p="16px 64px"
      >
        <Link href="/">
          <Image
            src="/canvey-logo.png"
            alt=""
            mt={isTablet ? "2.5rem" : "null"}
          />
        </Link>
        {isTablet ? null : <AuthButton />}
      </HStack>
    </Box>
  );
};

export default Header;
