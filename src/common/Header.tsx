import React from "react";
import { Box, HStack, useMediaQuery, Image } from "@chakra-ui/react";
import Link from "next/link";
import AuthButton from "../components/home/AuthButton"

interface Props {
  name: string;
}
const Header = ({ name }: Props) => {
  const [isTablet] = useMediaQuery("(max-width: 500px)");
  
  return (
    <Box bg={name}>
      <HStack
        justifyContent={isTablet ? "center" : "space-between"}
        alignItems="center"
        p="16px 64px"
      >
        <Link href="/">
          <Image
            src="/canvey-logo.svg"
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
