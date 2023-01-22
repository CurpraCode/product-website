import React from "react";
import Layout from "../Layout";
import { Box, Container, Text, Heading } from "@chakra-ui/react";

const Policy = () => {
  return (
    <Layout>
      <Container
        display="flex"
        justifyContent="center"
        alignItems="center"
        py={{ base: "2rem", sm: "4rem", md: "6rem", lg: "8rem" }}
      >
        <Box
          bgColor={{ sm: "#3A76BF", base: "none" }}
          color={{ base: "black", sm: "white" }}
          p={{ base: "1rem", sm: "2rem", md: "3rem" }}
          borderRadius="lg"
        >
          <Heading mb="2rem">Our Privacy Policy</Heading>
          <Text>
            At Canvey, we take the privacy of our clients and users very
            seriously. Our privacy policy is designed to provide transparency
            and inform clients and users of the types of information we collect,
            how we use it, and the steps we take to protect it. This policy
            applies solely to the information collected through our website.
            As the sole proprietors of the information collected through our
            website, we collect personally identifiable information such as
            name, contact information, and payment information from our clients
            and users in order to provide our language translation and
            interpreting services. This information is used to respond to
            requests, improve our services, and communicate with our clients and
            users. We do not share this information with any third parties
            outside of our organization, except as necessary to fulfill
            requests. Clients and users have the right to opt-out of any
            future communications from us at any time, and can also access,
            change, or delete any information we have about them. We take
            necessary precautions to protect the information collected on our
            website, including implementing encryption and physical and
            administrative safeguards. If clients and users have any concerns
            regarding our adherence to this privacy policy, they may contact us
            immediately via email or phone.
          </Text>
        </Box>
      </Container>
    </Layout>
  );
};

export default Policy;
