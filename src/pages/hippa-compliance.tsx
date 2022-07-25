import React from "react";
import Layout from "../Layout";
import { Container, Box, Heading, Text, Stack } from "@chakra-ui/react";

function Feature({ title, desc1, desc2="", desc3="", bgColor, color, ...rest }) {
  return (
    <Box p={{base: 2, sm: 4, md: 6}} bgColor={bgColor} borderRadius="lg" {...rest}>
      <Heading fontSize="3xl" color={color} mb="2rem">
        {title}
      </Heading>
      <Text mt={4} color={color} fontSize="md">
        {desc1} <br /> <br />
        {desc2} <br /> <br />
        {desc3}
      </Text>
    </Box>
  );
}

function StackEx() {
  return (
    <Container
      maxW="container.xl"
      mt={{ base: "2rem", md: "4rem", lg: "8rem" }}
      mb={{ base: "3rem", md: "4rem", lg: "8rem" }}
      px="2rem"
    >
      <Stack
        spacing={{ base: "2", md: "4", lg: "6", xl: "8" }}
        direction={{ base: "column", sm: "column", md: "row" }}
      >
        <Feature
          bgColor={{ base: "none", md: "#3A76BF" }}
          color={{ base: "black", md: "white" }}
          title="What is HIPAA?"
          desc1="HIPAA is an acronym that stands for “Health Insurance Portability and Accountability Act.” It’s a federal law – overseen by the U.S. Department of Health and Human Services (HHS) Office for Civil Rights – that outlines the proper treatment of patient information, which is labeled as Protected Health Information (PHI)."
          desc2=" In the simplest sense, HIPAA requires medical professionals – including medical interpreters – to safeguard patient data. This includes in communications – both verbal and in writing – as those can contain patient details that need to be protected."
        />
        <Feature
          bgColor="white"
          color="black"
          title="Our Commitment to patient confidentiality"
          desc1="Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus."
          desc2=" Vivamus integer non suscipit taciti mus etiam at primis tempor sagittis sit, euismod libero facilisi aptent elementum felis blandit cursus gravida sociis erat ante, eleifend lectus nullam dapibus netus feugiat curae curabitur est ad. Massa curae fringilla porttitor quam sollicitudin iaculis aptent leo ligula euismod dictumst, orci penatibus mauris eros etiam praesent erat volutpat posuere hac. Metus fringilla nec ullamcorper odio aliquam lacinia conubia mauris tempor, etiam ultricies proin quisque lectus sociis id tristique, integer phasellus taciti pretium adipiscing tortor sagittis ligula."
          desc3="Mollis pretium lorem primis senectus habitasse lectus scelerisque donec, ultricies tortor suspendisse adipiscing fusce morbi volutpat pellentesque, consectetur mi risus molestie curae malesuada cum. Dignissim lacus convallis massa mauris enim ad mattis magnis senectus montes, mollis taciti phasellus accumsan bibendum semper blandit suspendisse faucibus nibh est, metus lobortis morbi cras magna vivamus per risus fermentum. Dapibus imperdiet praesent magnis ridiculus congue gravida curabitur dictum sagittis, enim et magna sit inceptos sodales parturient pharetra mollis, aenean vel nostra tellus commodo pretium sapien sociosqu."
        />
      </Stack>
    </Container>
  );
}

const hippa = () => {
  return (
    <Layout>
      <StackEx />
    </Layout>
  );
};

export default hippa;
