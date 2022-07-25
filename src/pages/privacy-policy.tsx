import React from "react";
import Layout from "../Layout";
import { Box, Container, Text, Heading } from "@chakra-ui/react"

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
            Lorem ipsum dolor sit amet consectetur adipiscing elit, urna
            consequat felis vehicula class ultricies mollis dictumst, aenean non
            a in donec nulla. Phasellus ante pellentesque erat cum risus
            consequat imperdiet aliquam, integer placerat et turpis mi eros nec
            lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.
            Vivamus integer non suscipit taciti mus etiam at primis tempor
            sagittis sit, euismod libero facilisi aptent elementum felis blandit
            cursus gravida sociis erat ante, eleifend lectus nullam dapibus
            netus feugiat curae curabitur est ad. Massa curae fringilla
            porttitor quam sollicitudin iaculis aptent leo ligula euismod
            dictumst, orci penatibus mauris eros etiam praesent erat volutpat
            posuere hac. Metus fringilla nec ullamcorper odio aliquam lacinia
            conubia mauris tempor, etiam ultricies proin quisque lectus sociis
            id tristique, integer phasellus taciti pretium adipiscing tortor
            sagittis ligula.
          </Text>
        </Box>
      </Container>
    </Layout>
  );
};

export default Policy;
