import React from "react";
import Layout from "../Layout";
import { Container, Box, Heading, Text, Stack } from "@chakra-ui/react";

function Feature({
  title,
  desc1,
  desc2 = "",
  desc3 = "",
  bgColor,
  color,
  ...rest
}) {
  return (
    <Box
      p={{ base: 2, sm: 4, md: 6 }}
      bgColor={bgColor}
      borderRadius="lg"
      {...rest}
    >
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
          desc1="Canvey, is committed to maintaining the highest standards of privacy and security for personal health information as outlined in the Health Insurance Portability and Accountability Act (HIPAA). We have implemented a comprehensive compliance program, which includes physical, administrative, and technical safeguards to protect all electronic protected health information (ePHI) in accordance with HIPAA regulations."
          desc2="Our team of dedicated professionals is responsible for ensuring that our organization remains in compliance with HIPAA regulations. All employees and contractors are required to undergo regular HIPAA training and are held to strict standards of confidentiality. We conduct regular audits of our compliance program to identify areas of improvement and ensure that all PHI is handled appropriately."
          desc3="We take any potential violations of HIPAA regulations very seriously and have implemented strict protocols for reporting and investigating any incidents. Any breaches of HIPAA regulations will be promptly addressed and may result in disciplinary action, including termination of employment.
          In summary, our team at Canvey is fully committed to HIPAA compliance and we are dedicated to protecting the privacy and security of personal health information of healthcare providers and patients using our services."
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
