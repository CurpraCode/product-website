import React from "react";
import {
  Box,
  Text,
  Heading,
  Input,
  Stack,
  Button,
  InputGroup,
  Textarea,
  useMediaQuery,
  Image as ChakraImage,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { contactService } from "../../service/request.service";
import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";

type ContactType = {
  name: string;
  email: string;
  message: string;
};
const Contact = () => {
  const [isTablet] = useMediaQuery("(max-width: 767px)");
  const toast = useToast();
  const { register, handleSubmit, reset } = useForm<ContactType>();
  const { mutateAsync, isLoading } = useMutation(contactService, {
    onSuccess: (data) => {
      console.log(data);
      if (data) {
        toast({ title: "Sent", status: "success", position: "top" });
        console.log(data);
      }
    },
    onError(error, variables, context) {
      console.log(error, variables, context);
    },
  });

  const handleContact = async (data: ContactType) => {
    await mutateAsync({ ...data });
    reset();
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        bgColor={isTablet ? "#F4F6F9" : "#Fff"}
        bgGradient={
          isTablet
            ? "none"
            : " linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 31%, rgba(244,246,249,1) 31%, rgba(244,246,249,1) 67%, rgba(255,255,255,1) 67%, rgba(255,255,255,1) 100%)"
        }
      >
        <Box
          maxWidth="container.lg"
          py="8rem"
          display="flex"
          alignItems="center"
          flexDirection="row"
          ml={{ md: "16rem", lg: "20rem" }}
          position="relative"
        >
          <Box
            bg="#3A76BF"
            borderRadius="8px"
            width={{ md: "300px", lg: "360px" }}
            height={{ md: "360px", lg: "400px" }}
            position="absolute"
            left={{ md: "-16rem", lg: "-18rem" }}
            display={{ base: "none", sm: "none", md: "flex" }}
            flexDirection="column"
            alignItems="center"
            pt="3rem"
          >
            <Heading
              fontSize="24px"
              textTransform="capitalize"
              color="white"
              mb="2rem"
            >
              contact us
            </Heading>
            <Box display="flex" flexDirection="column" gap="1rem" px="4rem">
              <Box
                display="flex"
                alignItems="center"
                flexDirection="row"
                gap="1rem"
              >
                <ChakraImage
                  src="/locationaddress.svg"
                  width="40px"
                  height="40px"
                  alt="location icon"
                />
                <Box color="white">
                  <Heading size="sm">Address</Heading>
                  <Text w={{ md: "100%", lg: "90%" }}>
                    787 N Hampden St Minneapolis, MN
                  </Text>
                </Box>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                flexDirection="row"
                gap="1rem"
              >
                <ChakraImage
                  src="/phoneaddress.svg"
                  width="40px"
                  height="40px"
                  alt="location icon"
                />
                <Box color="white">
                  <Heading size="sm">Phone</Heading>
                  <Text w="100%">1-206-407-9000</Text>
                </Box>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                flexDirection="row"
                gap="1rem"
              >
                <ChakraImage
                  src="/mailaddress.svg"
                  width="40px"
                  height="40px"
                  alt="location icon"
                />
                <Box color="white">
                  <Heading size="sm">Email</Heading>
                  <Text w="100%">support@canvey.io</Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            bg={{ base: "none", md: "white" }}
            width={{ md: "400px", lg: "500px" }}
            height={{ md: "440px", lg: "500px" }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            pt={{ base: "0rem", sm: "0rem", md: "3rem" }}
            boxShadow={{ base: "none", md: "0px 4px 20px rgba(0, 0, 0, 0.12)" }}
          >
            <Heading
              fontSize="24px"
              textTransform="capitalize"
              color="#403E50"
              fontWeight="700"
              mb="2rem"
            >
              Message Us
            </Heading>
            <Box
              display="flex"
              alignItems="stretch"
              flexDirection="column"
              gap="1.5rem"
            >
              <Stack
                as="form"
                w="100%"
                spacing={4}
                onSubmit={handleSubmit(handleContact)}
              >
                <InputGroup bg="#F4F6F9" borderRadius="5px">
                  <Input
                    type="text"
                    placeholder="Name"
                    border="none"
                    required
                    {...register("name", { required: true })}
                  />
                </InputGroup>

                <InputGroup bg="#F4F6F9" borderRadius="5px">
                  <Input
                    type="email"
                    placeholder="Email"
                    border="none"
                    required
                    {...register("email", { required: true })}
                  />
                </InputGroup>

                <InputGroup bg="#F4F6F9" borderRadius="5px">
                  <Textarea
                    placeholder="Message"
                    border="none"
                    rows={isTablet ? 7 : 5}
                    {...register("message", { required: true })}
                  />
                </InputGroup>
                <Button
                  type="submit"
                  isLoading={isLoading}
                  bg="#3A76BF"
                  color="white"
                  fontWeight="500"
                  _hover={{
                    bg: "#3A76BF",
                  }}
                  _focus={{
                    outline: "none",
                    bg: "#3A76BF",
                  }}
                >
                  {isTablet ? "Send Message" : "Contact Us"}
                </Button>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
