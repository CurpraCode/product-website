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
} from "@chakra-ui/react";

const SignUp = () => {
  const [isTablet] = useMediaQuery("(max-width: 767px)");

  return (
    <Layout>
      <Container minW="full" bgColor="gray.200">
        <Flex
          pl="7rem"
          pr="11rem"
          pb="8rem"
          pt="4rem"
          flexDirection={{ lg: "column", xl: "row" }}
        >
          <Box w={{ lg: "100%", xl: "50%" }}>
            <Image src="docScreen.svg" alt="interpreter-screen" />
            <Text fontSize="18px" w="75%" color="gray.600" fontWeight="500">
              Set up an enterpise account for your organization in{" "}
              <Text as="span" fontWeight="800">
                3 Easy Steps
              </Text>
            </Text>
            <Box mt="2rem">
              <VStack spacing={4} align="flex-start">
                <Box>
                  <HStack spacing="24px">
                    <Box
                      w="50px"
                      h="50px"
                      bgColor="#754C8B"
                      borderRadius="50%"
                    ></Box>
                    <VStack spacing={2} align="left">
                      <Text fontWeight="bold">Regsiter</Text>
                      <Text w="90%">
                        Fill out the form to the right. Make sure to include the
                        expected amount of interpretations needed per day
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
                <Box>
                  <HStack spacing="24px">
                    <Box
                      w="50px"
                      h="50px"
                      bgColor="#2A689D"
                      borderRadius="50%"
                    ></Box>
                    <VStack spacing={2} align="left">
                      <Text fontWeight="bold">Onboarding</Text>
                      <Text w="90%">
                        Once your account is approved, we will be in contact to
                        set up account profile.
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
                <Box>
                  <HStack spacing="24px">
                    <Box
                      w="50px"
                      h="50px"
                      bgColor="#2BC1D8"
                      borderRadius="50%"
                    ></Box>
                    <VStack spacing={2} align="left">
                      <Text fontWeight="bold">Learn how to use</Text>
                      <Text w="90%">
                        Watch our step by step instructional video on how our
                        services can benefit your whole team.
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
              </VStack>
            </Box>
          </Box>
          <Container w={{ lg: "100%", xl: "50%" }}>
            <Box
              bgColor="white"
              borderRadius="lg"
              px="2rem"
              py="1.5rem"
              mt="2rem"
              boxShadow="xl"
            >
              <VStack spacing={8} align="flex-start">
                <Heading fontSize="24px" width="100%" color="gray.700">
                  Interested in bringing our services to your hospital or
                  clinic?{" "}
                  <Text as={"span"} color={"#3A76BF"} fontWeight={700}>
                    Lets Connect!
                  </Text>
                </Heading>
                <Stack spacing={6}>
                  <HStack>
                    <Box>
                      <FormControl id="firstName" isRequired>
                        <InputGroup bgColor="#F4F6F9">
                          <InputLeftElement
                            children={<Image src="name-1.svg" alt="name" />}
                          />
                          <Input
                            type="text"
                            placeholder="First Name"
                          />
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
                  </HStack>
                  <HStack>
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
                  </HStack>
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
