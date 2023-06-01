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
import { useRouter } from "next/router";
interface Props {
  name: string;
}
const links = [
  { name: "About Us", to: "/about-us" },
  { name: "Contact Us", to: "/contact-us" },
  { name: "How It Works", to: "/how-it-works" },
];
const Header = ({ name }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLDivElement | null>(null);
  const [isTab] = useMediaQuery("(max-width: 991px)");
  const { pathname } = useRouter();
  return (
    <Box bg={name}>
      <Flex
        width="100%"
        p={["2rem 2rem", "2rem 2rem", "2rem 2rem", "2rem 2rem"]}
        m="auto"
        maxW="7xl"
        justifyContent="space-between"
        alignItems="center"
      >
        <NextLink href="/" passHref>
          <Image
            cursor="pointer"
            width={{ base: "37%", md: "25%", lg: "20%" }}
            height="25%"
            objectFit="cover"
            src="/canvey-logo.svg"
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
                  px={["2rem", "3rem", "3rem", "1rem"]}
                  color="white"
                  ml="0.5rem"
                  _hover={{
                    textDecor: "none",
                    color: "theme.300",

                    borderRadius: "8px",
                    px: "1rem",
                    py: "0.6rem",
                    fontWeight: "800",
                  }}
                  _focus={{
                    textDecor: "none",
                    bg: "rgba(255, 255, 255, 0.2)",
                    border: "none",
                    borderRadius: "8px",
                    px: "1rem",
                    py: "0.6rem",
                  }}
                  _active={{
                    textDecor: "none",
                    bg: "rgba(255, 255, 255, 0.2)",
                    border: "none",
                    borderRadius: "8px",
                    px: "1rem",
                    py: "0.6rem",
                  }}
                  onClick={onClose}
                  py={pathname === to ? "0.6rem" : ""}
                  bg={pathname === to ? "rgba(255, 255, 255, 0.2)" : ""}
                  borderRadius={pathname === to ? "8px" : ""}
                  fontWeight={pathname === to ? "800" : ""}
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
