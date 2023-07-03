/* eslint-disable react/no-children-prop */
import React from "react";
import Layout from "../Layout";
import {
  Container,
  Center,
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
  Textarea,
  Image,
  Stack,
  Circle,
  useMediaQuery,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { connectService } from "../service/request.service";
import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";

type ConnectType = {
  firstName: "string";
  lastName: "string";
  phone: "string";
  email: "string";
  hospitalName: "string";
  message: "string";
};
const SignUp = () => {
  const toast = useToast();
  const [isTab] = useMediaQuery("(max-width: 991px)");
  const { register, handleSubmit, reset } = useForm<ConnectType>();
  const { mutateAsync, isLoading } = useMutation(connectService, {
    onSuccess: (data) => {
      console.log(data);
      if (data) {
        toast({ title: "Sent", status: "success" });
        console.log(data);
      }
    },
    onError(error, variables, context) {
      console.log(error, variables, context);
    },
  });

  const handleConnect = async (data: ConnectType) => {
    await mutateAsync({ ...data });
    reset();
  };

  return (
    <Layout>
      <Container
        minW="full"
        bgColor={isTab ? "#F4F6F9" : "#Fff"}
        bgGradient={isTab ? "none" : "linear(180deg, #FFF 20%, #F4F6F9 20%)"}
      >
        <Flex
          pb={{ base: "4rem", md: "8rem" }}
          pt="4rem"
          flexDirection={{ base: "column", md: "column", lg: "row", xl: "row" }}
          gap={{ base: "1rem", lg: "2rem" }}
          alignItems="center"
          justifyContent="center"
          maxW="container.xl"
        >
          <Box w={{ base: "100%", xl: "50%" }}>
            <Center>
              <Image
                src="joinus.svg"
                alt="interpreter-screen"
                pb="2rem"
                margin={{ base: "auto", xl: "0" }}
              />
            </Center>

            <Text
              fontSize="18px"
              w="100%"
              align={{ base: "center", xl: "left" }}
              color="gray.600"
              fontWeight="500"
              textAlign="center"
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
                      bg="#3A76BF"
                      fontWeight="800"
                      color="#fff"
                    >
                      1
                    </Circle>
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
                      bg="#3A76BF"
                      color="#fff"
                    >
                      2
                    </Circle>
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
                      bg="#3A76BF"
                      color="#fff"
                    >
                      3
                    </Circle>
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
            bg={{ base: "white", md: "none" }}
            w={{ base: "100%", xl: "50%" }}
            mt={{ base: "1rem", md: "3rem", xl: "0" }}
          >
            <Box
               bg={{ base: "none", md: "white" }}
              borderRadius="lg"
              px={{ base: "1rem", sm: "2rem" }}
              py={{ base: "1rem", md: "2rem" }}
              mt={{ base: "1rem", sm: "2rem" }}
              boxShadow={{ base: "none", md: "xl" }}
            >
              <VStack spacing={{ base: 4, sm: 6, md: 8 }} align="stretch">
                <Heading
                  fontSize={{ base: "14px", sm: "16px", lg: "24px" }}
                  color="gray.700"
                >
                  Interested in bringing our services to your hospital or
                  clinic?
                  <Text as={"span"} color={"#3A76BF"} ml="1rem" fontWeight={700}>
                    Lets Connect!
                  </Text>
                </Heading>
                <Stack
                  as="form"
                  spacing={6}
                  onSubmit={handleSubmit(handleConnect)}
                >
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    spacing={{ base: "5", sm: "3" }}
                  >
                    <FormControl id="firstName" isRequired>
                      <InputGroup bgColor="#F4F6F9">
                        <Input
                          border="none"
                          type="text"
                          placeholder="First Name"
                          required
                          {...register("firstName", { required: true })}
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl id="lastName">
                      <InputGroup bgColor="#F4F6F9">
                        <Input
                          border="none"
                          type="text"
                          placeholder="Last Name"
                          required
                          {...register("lastName", { required: true })}
                        />
                      </InputGroup>
                    </FormControl>
                  </Stack>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    spacing={{ base: "5", sm: "3" }}
                  >
                    <FormControl id="phoneNumber" isRequired>
                      <InputGroup bgColor="#F4F6F9">
                        <Input
                          border="none"
                          type="number"
                          placeholder="Phone"
                          required
                          {...register("phone", { required: true })}
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl id="email">
                      <InputGroup bgColor="#F4F6F9">
                        <Input
                          border="none"
                          type="email"
                          placeholder="Email"
                          required
                          {...register("email", { required: true })}
                        />
                      </InputGroup>
                    </FormControl>
                  </Stack>
                  <FormControl id="hospital" isRequired>
                    <InputGroup bgColor="#F4F6F9">
                      <Input
                        border="none"
                        type="text"
                        placeholder="Organization Name"
                        required
                        {...register("hospitalName", { required: true })}
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <Textarea
                      border="none"
                      bgColor="#F4F6F9"
                      placeholder="How can our team help you?"
                      rows={6}
                      resize="none"
                      required
                      {...register("message", { required: true })}
                    />
                  </FormControl>

                  <Stack spacing={10} pt={2}>
                    <Button
                      type="submit"
                      isLoading={isLoading}
                      colorScheme={"#3A76BF"}
                      size="lg"
                      bg={"#3A76BF"}
                      color={"white"}
                      _hover={{
                        bg: "#3A76BF",
                      }}
                      _focus={{
                        outline: "none",
                        bg: "#3A76BF",
                      }}
                    >
                      Submit
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
