import React from "react";
import { Box, HStack, useMediaQuery, Image, Button } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import AuthButton from "../components/authButtons/AuthButton";
import AuthButtonMobile from "../components/authButtons/AuthButtonMobile";

interface Props {
  name: string;
}
const Header = ({ name }: Props) => {
  const [isTablet] = useMediaQuery("(max-width: 560px)");
  const router = useRouter();

  return (
    <Box bg={name}>
      <HStack
        justifyContent={isTablet ? "" : "space-between"}
        alignItems="center"
        m="auto"
        maxW="7xl"
        p="24px 96px 16px 32px"
      >
        <Link href="/">
          <Image
            src="/canvey-logo.png"
            alt=""
            mt={isTablet ? "2.5rem" : "null"}
            mb="1rem"
            cursor="pointer"
          />
        </Link>
        {isTablet ? null : <AuthButton />}
      </HStack>
      {router.asPath != "/" ? <AuthButtonMobile /> : null}
    </Box>
  );
};

export default Header;
