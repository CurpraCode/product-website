/* eslint-disable react/no-children-prop */
import React from "react";
import Layout from "../Layout";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Image,
  useMediaQuery,
  Stack,
  Circle,
} from "@chakra-ui/react";

const SignUp = () => {
  const [isTablet] = useMediaQuery("(max-width: 767px)");

  return (
    <Layout>
      <Container minW="full" bgColor="gray.200" centerContent>
        <Flex
          pb="8rem"
          pt="4rem"
          flexDirection={{ base: "column", xl: "row" }}
          gap={{ base: "1rem", lg: "2rem" }}
          alignItems="center"
          justifyContent="center"
          maxW="container.xl"
        >
          <Box w={{ base: "100%", xl: "50%" }}>
            <Image
              src="docScreen.png"
              alt="interpreter-screen"
              pb="2rem"
              margin={{ base: "auto", xl: "0" }}
            />
            <Text
              fontSize="18px"
              w="100%"
              align={{ base: "center", xl: "left" }}
              color="gray.600"
              fontWeight="500"
            >
              Set up an enterpise account for your organization in{" "}
              <Text as="span" fontWeight="800">
                3 Easy Steps
              </Text>
            </Text>
            <Box mt="2rem">
              <VStack spacing={4} align="flex-start">
                <Box>
                  <HStack spacing={{ base: "12px", sm: "24px" }}>
                    <Circle
                      size={{ base: "35px", sm: "50px" }}
                      bg="#754C8B"
                    ></Circle>
                    <VStack spacing={{ base: 1.5, sm: 2 }} align="left">
                      <Text fontWeight="bold">Regsiter</Text>
                      <Text fontSize={{ base: "13px", sm: "16px" }}>
                        Fill out the form to the right. Make sure to include the
                        expected amount of interpretations needed per day
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
                <Box>
                  <HStack spacing={{ base: "12px", sm: "24px" }}>
                    <Circle
                      size={{ base: "35px", sm: "50px" }}
                      bg="#2A689D"
                    ></Circle>
                    <VStack spacing={{ base: 1.5, sm: 2 }} align="left">
                      <Text fontWeight="bold">Onboarding</Text>
                      <Text fontSize={{ base: "13px", sm: "16px" }}>
                        Once your account is approved, we will be in contact to
                        set up account profile.
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
                <Box>
                  <HStack spacing={{ base: "12px", sm: "24px" }}>
                    <Circle
                      size={{ base: "35px", sm: "50px" }}
                      bg="#2BC1D8"
                    ></Circle>
                    <VStack spacing={{ base: 1.5, sm: 2 }} align="left">
                      <Text fontWeight="bold">Learn how to use</Text>
                      <Text fontSize={{ base: "13px", sm: "16px" }}>
                        Watch our step by step instructional video on how our
                        services can benefit your whole team.
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
              </VStack>
            </Box>
          </Box>
          <Container
            w={{ base: "100%", xl: "50%" }}
            mt={{ base: "1rem", md: "3rem", xl: "0" }}
          >
            <Box
              bgColor="white"
              borderRadius="lg"
              px={{ base: "1rem", sm: "2rem" }}
              py={{ base: "1rem", md: "2rem" }}
              mt={{ base: "1rem", sm: "2rem" }}
              boxShadow="xl"
            >
              <VStack spacing={{base: 4, sm: 6, md: 8}}>
                <Heading
                  fontSize={{ base: "14px", sm: "16px", lg: "24px" }}
                  color="gray.700"
                >
                  Interested in bringing our services to your hospital or
                  clinic?{" "}
                  <Text as={"span"} color={"#3A76BF"} fontWeight={700}>
                    Lets Connect!
                  </Text>
                </Heading>
                <Stack spacing={6}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    spacing={{ base: "5", sm: "3" }}
                  >
                    <Box>
                      <FormControl id="firstName" isRequired>
                        <InputGroup bgColor="#F4F6F9">
                          <InputLeftElement
                            children={<Image src="name-1.svg" alt="name" />}
                          />
                          <Input type="text" placeholder="First Name" />
                        </InputGroup>
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl id="lastName">
                        <InputGroup bgColor="#F4F6F9">
                          <InputLeftElement
                            children={<Image src="name-1.svg" alt="name" />}
                          />
                          <Input type="text" placeholder="Last Name" />
                        </InputGroup>
                      </FormControl>
                    </Box>
                  </Stack>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    spacing={{ base: "5", sm: "3" }}
                  >
                    <Box>
                      <FormControl id="phoneNumber" isRequired>
                        <InputGroup bgColor="#F4F6F9">
                          <InputLeftElement
                            children={<Image src="phone.svg" alt="phone" />}
                          />
                          <Input type="number" placeholder="Phone" />
                        </InputGroup>
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl id="email">
                        <InputGroup bgColor="#F4F6F9">
                          <InputLeftElement
                            children={<Image src="mail.svg" alt="name" />}
                          />
                          <Input type="email" placeholder="Email" />
                        </InputGroup>
                      </FormControl>
                    </Box>
                  </Stack>
                  <FormControl id="hospital" isRequired>
                    <InputGroup bgColor="#F4F6F9">
                      <InputLeftElement
                        children={<Image src="hospital.svg" alt="name" />}
                      />
                      <Input type="text" placeholder="Hospital / Clinic" />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <Textarea
                      bgColor="#F4F6F9"
                      name="message"
                      placeholder="How can our team help you?"
                      rows={6}
                      resize="none"
                    />
                  </FormControl>

                  <Stack spacing={10} pt={2}>
                    <Button
                      loadingText="Submitting"
                      colorScheme={"#3A76BF"}
                      size="lg"
                      bg={"#3A76BF"}
                      color={"white"}
                    >
                      Register
                    </Button>
                  </Stack>
                </Stack>
              </VStack>
            </Box>
          </Container>
        </Flex>
      </Container>
    </Layout>
  );
};

export default SignUp;
