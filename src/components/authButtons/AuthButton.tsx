import React from "react";
import {
  HStack,
  Button,
  useMediaQuery,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";

const AuthButton = () => {
  const [isTablet] = useMediaQuery("(max-width: 560px)");
  const [isBase] = useMediaQuery("(max-width: 360px)");

  return (
    <HStack ml="-10px !important">
      <Button
        bg="transparent"
        color="#fff"
        border="2px solid #fff"
        w={isBase ? "120px" : isTablet ? "150px" : { sm: "90px", md: "110px" }}
        h={isTablet ? "50px" : { sm: "40px", md: "40px" }}
        p="10px"
        borderRadius="8px"
        _hover={{
          bg: "none",
        }}
        _focus={{
          outline: "none",
          bg: "none",
        }}
      >
        Sign In
      </Button>

      {isTablet ? (
        <Button
          bg="#fff"
          color="#1491B8"
          border="2px solid #fff"
          w={
            isBase ? "120px" : isTablet ? "150px" : { sm: "110px", md: "110px" }
          }
          h={isTablet ? "50px" : { sm: "40px", md: "40px" }}
          _hover={{
            bg: "#fff",
          }}
          _focus={{
            outline: "none",
            bg: "#fff",
          }}
        >
          Sign Up
        </Button>
      ) : (
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                as={Button}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
                bg="#fff"
                color="#1491B8"
                border="2px solid #fff"
                w={
                  isBase
                    ? "120px"
                    : isTablet
                    ? "150px"
                    : { sm: "175px", md: "190px" }
                }
                h={isTablet ? "50px" : { sm: "40px", md: "40px" }}
                _hover={{
                  bg: "#fff",
                }}
                _focus={{
                  outline: "none",
                  bg: "#fff",
                }}
                _active={{ color: "#1491B8" }}
              >
                <Box
                  display="flex"
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  Create an account{" "}
                  {isOpen ? (
                    <Image src="arrow-up.svg" alt="arrow" ml="6px" />
                  ) : (
                    <Image src="arrow-down.svg" alt="arrow" ml="6px" />
                  )}
                </Box>
              </MenuButton>
              <MenuList width="190px">
                <MenuItem
                  _hover={{ color: "#403E50", fontWeight: "600" }}
                  transition="all .8s ease-out"
                >
                  As an interpreter
                </MenuItem>
                <MenuDivider />
                <MenuItem
                  _hover={{ color: "#403E50", fontWeight: "600" }}
                  transition="all .8s ease-out"
                >
                  As a health care worker
                </MenuItem>
                <MenuDivider />
                <MenuItem
                  _hover={{ color: "#403E50", fontWeight: "600" }}
                  transition="all .8s ease-out"
                >
                  <Link href="/sign-up">As an enterprise</Link>
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      )}
    </HStack>
  );
};

export default AuthButton;
