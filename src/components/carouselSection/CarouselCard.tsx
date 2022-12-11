import React from "react";
import { Stack, Image, Text, Heading, Icon, Flex } from "@chakra-ui/react";
import { Card, CardBody } from "@chakra-ui/card";

const CarouselCard = ({ IconName }) => {
  return (
    <Card
      maxW="sm"
      size="sm"
      px="30px"
      bg="white"
      boxShadow="md"
      height="500px"
      width="416px"
      borderRadius="md"
      border="1px solid lightgray"
    >
      <CardBody>
        <Stack align="center" justifyContent="center" gap="2">
          <Stack mt="6" gap="2">
            <Flex justifyContent={"start"} alignItems="center" gap="5px">
              <Icon as={IconName} color="blue.400" boxSize={6} />
              <Heading size="md">Living room Sofa</Heading>
            </Flex>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design
              with a sprinkle of vintage design.
            </Text>
          </Stack>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            width="100%"
            height="130px"
          />
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CarouselCard;
