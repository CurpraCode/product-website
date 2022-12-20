import React, { useRef } from "react";
import {
  Box,
  useMediaQuery,
  Image,
  Collapse,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import AuthButton from "../components/authButtons/AuthButton";
import { HamburgerIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

interface Props {
  name: string;
}
const links = [
  { name: "About Us", to: "/about" },
  { name: "Contact Us", to: "/contact-us" },
  { name: "How It Works", to: "/privacy" },
];
const Header = ({ name }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLDivElement | null>(null);
  const [isTab] = useMediaQuery("(max-width: 991px)");
  // const [isTablet] = useMediaQuery("(max-width: 560px)");

  return (
    <Box bg={name}>
      <Flex
        width="100%"
        p={["2rem 2rem", "2rem 2rem", "2rem 2rem", "2rem 2rem"]}
        m="auto"
        maxW="7xl"
        justifyContent="space-between"
        alignItems="center"
        fontWeight="600"
      >
        <NextLink href="/" passHref>
          <Image
            width="25%"
            height="25%"
            objectFit="cover"
            src="/canvey-logo.png"
            alt="logo"
          />
        </NextLink>
        <Box
          display="flex"
          justifyContent={["end", "end", "end", "space-between"]}
          alignItems="center"
        >
          <Box
            display={["none", "none", "none", "flex"]}
            w={["100%", "100%", "100%", "100%"]}
            alignItems="center"
            fontSize={["1rem", "1.1rem"]}
          >
            {links.map(({ name, to }, index) => (
              <NextLink href={to} passHref key={index}>
                <Link
                  px={["2rem", "3rem", "3rem", "2rem"]}
                  color="white"
                  _hover={{
                    textDecor: "none",
                    color: "theme.300",
                  }}
                  _focus={{
                    textDecor: "none",
                    bg: "none",
                    border: "none",
                  }}
                  _active={{
                    textDecor: "none",
                    bg: "none",
                    border: "none",
                  }}
                  onClick={onClose}
                >
                  {name}
                </Link>
              </NextLink>
            ))}
             <AuthButton />
          </Box>

          <Flex
            display={["flex", "flex", "flex", "none"]}
            justifyContent={"flex-end"}
            mr={["1.5rem"]}
            alignItems="center"
          >
            <Box ref={btnRef} onClick={onOpen}>
              <HamburgerIcon fontSize={"1.5rem"} color="white" />
            </Box>
          </Flex>
          {isTab && (
            <Box display={["flex", "flex", "none", "none"]}>
              <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
                size={isTab && "full"}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton
                    mt="2rem"
                    _focus={{
                      outline: 0,
                    }}
                  />
                  <DrawerBody>
                    <Flex
                      direction={"column"}
                      align="center"
                      gap={9}
                      mt={"6rem"}
                    >
                      {links.map(({ name, to }, index) => (
                        <NextLink key={index} href={to}>
                          <Collapse in={isOpen} animateOpacity>
                            <Link
                              fontWeight={700}
                              px={["0.6rem", "0.6rem", "1rem", "2rem"]}
                              py=".8rem"
                              _hover={{
                                textDecor: "none",
                                color: "theme.300",
                              }}
                              _focus={{
                                textDecor: "none",
                                bg: "none",
                                border: "none",
                              }}
                              _active={{
                                textDecor: "none",
                                bg: "none",
                                border: "none",
                              }}
                              onClick={onClose}
                            >
                              {name}
                            </Link>
                          </Collapse>
                        </NextLink>
                      ))}
                      <AuthButton />
                    </Flex>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Box>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
