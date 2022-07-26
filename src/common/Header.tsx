import React from "react";
import { Box, HStack, useMediaQuery, Image, Button } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import AuthButton from "../components/home/AuthButton";
import AuthButtonMobile from "../components/home/AuthButtonMobile";

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
        maxW="8xl"
        p="16px 48px"
        mb="1rem"
      >
        <Link href="/">
          <Image
            src="/canvey-logo.svg"
            alt=""
            mt={isTablet ? "2.5rem" : "null"}
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
