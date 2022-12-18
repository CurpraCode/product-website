import React from "react";
import {
  HStack,
  Button,
  useMediaQuery,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuDivider,
  MenuItem,
  Text,
  Box,
  AccordionPanel,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
} from "@chakra-ui/react";
import Link from "next/link";

const AuthButton = () => {
  const [isTablet] = useMediaQuery("(max-width: 560px)");
  const [isBase] = useMediaQuery("(max-width: 360px)");

  return (
    <HStack ml="-10px !important">
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
        <Menu closeOnSelect={false}>
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
                  Our Members
                  {isOpen ? (
                    <Image src="arrow-up.svg" alt="arrow" ml="6px" />
                  ) : (
                    <Image src="arrow-down.svg" alt="arrow" ml="6px" />
                  )}
                </Box>
              </MenuButton>
              <MenuList width="190px">
                <Accordion allowToggle>
                  <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Interpreters
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>

                    <AccordionPanel pb={4} fontSize="0.6rem">
                      <Text color="#3A76BF">Sign in</Text>
                      <p>I am a registered interpreter</p>
                    </AccordionPanel>
                    <AccordionPanel pb={4} fontSize="0.6rem">
                      <Text color="#3A76BF">Sign Up</Text>
                      <p>I need to set up my account</p>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>

                <MenuDivider />

                <Accordion allowToggle>
                  <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Health Care Worker
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>

                    <AccordionPanel pb={4} fontSize="0.6rem">
                      <Text color="#3A76BF">Sign in</Text>
                      <p>I am a registered Health Care Worker</p>
                    </AccordionPanel>
                    <AccordionPanel pb={4} fontSize="0.6rem">
                      <Text color="#3A76BF">Sign Up</Text>
                      <p>I need to set up my account</p>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>

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
