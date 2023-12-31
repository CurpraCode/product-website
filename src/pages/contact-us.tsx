import React from "react";
import Layout from "../Layout";
import { useMediaQuery } from "@chakra-ui/react";
import Contact from "../components/contact/Contact";
import ContactUs from "../components/contact/ContactUs";

const ContactPage = () => {
  const [isTablet] = useMediaQuery("(max-width: 767px)");
  return (
    <div>
      <Layout>
        <Contact />
        {isTablet ? <ContactUs /> : null}
      </Layout>
    </div>
  );
};

export default ContactPage;
