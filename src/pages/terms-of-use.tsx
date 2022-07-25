import React from "react";
import Layout from "../Layout";
import { Text, Heading, Box, Container } from "@chakra-ui/react";

function TextSection({ title, description }) {
  return (
    <Box mb="2rem">
      <Heading as="h4" size="md" mb="1rem">
        {title}
      </Heading>
      <Text>{description}</Text>
    </Box>
  );
}

const terms = () => {
  return (
    <Layout>
      <Container
        maxW="container.xl"
        my={{ base: "2rem", sm: "3rem", md: "4rem", lg: "5rem", xl: "7rem" }}
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        px={{ base: "2rem", md: "3rem", lg: "5rem" }}
      >
        <Box>
          <Heading as="h1" size="xl" mb="2rem">
            Terms of Service
          </Heading>
          <TextSection
            title="Lorem Ipsum Dolor"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Laudantium provident ducimus repudiandae dignissimos dicta
            atque architecto accusamus repellat ea beatae magni iste, vitae enim
            itaque voluptatibus assumenda fugit et commodi?Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Laudantium provident ducimus repudiandae dignissimos dicta
            atque architecto accusamus repellat ea beatae magni iste, vitae enim
            itaque voluptatibus assumenda fugit et commodi?Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Laudantium provident ducimus repudiandae dignissimos dicta
            atque architecto accusamus repellat ea beatae magni iste, vitae enim
            itaque voluptatibus assumenda fugit et commodi?"
          />
          <TextSection
            title="New Ipsum Dolor"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Laudantium provident ducimus repudiandae dignissimos dicta
            atque architecto accusamus repellat ea beatae magni iste, vitae enim
            itaque voluptatibus assumenda fugit et commodi?Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Laudantium provident ducimus repudiandae dignissimos dicta
            atque architecto accusamus repellat ea beatae magni iste, vitae enim
            itaque voluptatibus assumenda fugit et commodi?Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Laudantium provident ducimus repudiandae dignissimos dicta
            atque architecto accusamus repellat ea beatae magni iste, vitae enim
            itaque voluptatibus assumenda fugit et commodi?"
          />
          <TextSection
            title="Old Ipsum Dolor"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Laudantium provident ducimus repudiandae dignissimos dicta
            atque architecto accusamus repellat ea beatae magni iste, vitae enim
            itaque voluptatibus assumenda fugit et commodi?Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Laudantium provident ducimus repudiandae dignissimos dicta
            atque architecto accusamus repellat ea beatae magni iste, vitae enim
            itaque voluptatibus assumenda fugit et commodi?Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Laudantium provident ducimus repudiandae dignissimos dicta
            atque architecto accusamus repellat ea beatae magni iste, vitae enim
            itaque voluptatibus assumenda fugit et commodi?"
          />
        </Box>
      </Container>
    </Layout>
  );
};

export default terms;
