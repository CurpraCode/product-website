import React from "react";
import { Stack, Image, Text, Heading, Icon, Flex } from "@chakra-ui/react";
import { Card, CardBody } from "@chakra-ui/card";

const CarouselCard = ({ IconName, title, body }) => {
  return (
    <Card
      maxW="sm"
      size="sm"
      px="30px"
      bg="white"
      boxShadow="2px 2px 1px rgba(64, 62, 80, 0.12)"
      height="500px"
      width="416px"
      borderRadius="xl"
      // border="2px solid lightgray"
    >
      <CardBody>
        <Stack alignItems="start" justifyContent="space-between" gap="2">
          <Stack mt="6" gap="1">
            <Flex justifyContent={"start"} alignItems="center" gap="5px">
              <Icon as={IconName} color="blue.400" boxSize={6} />
              <Heading size="md">{title}</Heading>
            </Flex>
            <Text mb={body=="24/7 assistance for your need"? "1.5rem !important": "0rem"}>{body}</Text>
          </Stack>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch"
            borderRadius="lg"
            width="350px"
            height="300px"
          />
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CarouselCard;
