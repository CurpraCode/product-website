import React, { useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
  VStack,
  Heading,
  Text,
  Box,
  Stack,
} from "@chakra-ui/react";

const TabSection = () => {
  const [TabsData] = useState([
    {
      title: "1. Download",
      body: "Install our app on your mobile device from the appropriate app store, such as App Store or Google Play.",
      imgSrc: "/download.svg",
      bg: "#F4F6F9",
    },

    {
      title: "2. Sign Up",
      body: `To sign up with us, simply open the app and click "Sign Up" to create a new account. Follow the onboarding steps to complete the process.`,
      imgSrc: "/signup.svg",
    },
    {
      title: "3. Go Online",
      body: "Accept service requests at your convenience, whether they're virtual or in-person",
      imgSrc: "/goonline.svg",
      bg: "#D4E2FC",
    },
    {
      title: "4. Make Money",
      body: "Track your earnings in real-time and earn more with Canvey's interpreter app designed to help you succeed!",
      imgSrc: "/makemoney.svg",
    },
    {
      title: "5. Refer Friends",
      body: "Refer your healthcare interpreter friends to Canvey and earn rewards. Join us in revolutionizing healthcare communication.",
      imgSrc: "/referfriends.svg",
      bg: "#F4F6F9",
    },
  ]);
  const [TabData] = useState([
    {
      title: "1. Download",
      body: "Install our app on your mobile device from the appropriate app store, such as App Store or Google Play.",
      imgSrc: "/verification.svg",
      bg: "#F4F6F9",
    },

    {
      title: "2. Sign Up",
      body: `Sign up with us by opening the app and clicking "Sign Up." Complete the onboarding steps for healthcare professionals to join us.`,
      imgSrc: "/makerequest.svg",
    },
    {
      title: "3. Verification",
      body: "Once verified, healthcare providers gain secure access to our interpretation service platform, ensuring a trusted connection to their organization.",
      imgSrc: "/stayorganized.svg",
      bg: "#D4E2FC",
    },
    {
      title: "4. Make Request",
      body: "Effortlessly request interpreters for any mode—video, audio, sign language, or in-person—through our platform. Enjoy advanced scheduling and on-demand service with a simple click.",
      imgSrc: "/ratingsystem.svg",
    },
    {
      title: "5. Rating System",
      body: "Your feedback is crucial to us. Please take a moment to rate our services and leave a comment. We are dedicated to continuously enhancing your experience.",
      imgSrc: "/analytics.svg",
      bg: "#F4F6F9",
    },
  ]);

  return (
    <Tabs>
      <TabList>
        <Tab
          w="50%"
          fontSize={["1rem", "1rem", "1.3rem", "1.3rem"]}
          fontWeight="bolder"
        >
          Interpreters
        </Tab>
        <Tab
          w="50%"
          fontSize={["0.8rem", "1rem", "1.3rem", "1.3rem"]}
          fontWeight="bolder"
        >
          Health Care Workers
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          {TabsData.map((item, index) => (
            <Box key={index} bg={item.bg}>
              <VStack alignItems="center" py={{ base:"50px", md:"50px",lg: "50px" }} gap="100px">
                <Stack
                  // bg={item.bg}
                  w={["240px", "540px", "760px"]}
                  gap={["20px", "30px", "30px", "100px"]}
                  direction={["column", "column", "row"]}
                  p={{ base: "10px" }}
                  alignItems={["center"]}
                  px={["10px", "10px", "10px", "0"]}
                >
                  <Image src={item.imgSrc} alt="gradient-box" />
                  <VStack
                    alignItems={["center", "center", "start"]}
                    textAlign={["center", "center", "start"]}
                    gap="4"
                    px="15px"
                  >
                    <Heading fontSize={["18px", "24px"]}>{item.title}</Heading>
                    <Box
                      border="4px solid #8F5273"
                      w="40px"
                      borderRadius="10"
                    ></Box>
                    <Text
                      fontSize={["15px", "15px", "18px", "18px"]}
                      px={["10px", "14px", "14px", "0"]}
                    >
                      {item.body}
                    </Text>
                  </VStack>
                </Stack>
              </VStack>
            </Box>
          ))}
        </TabPanel>
        <TabPanel>
          {TabData.map((item, index) => (
            <Box key={index} bg={item.bg}>
              <VStack alignItems="center" py={{ base:"50px", md:"50px", lg: "90px" }}  gap="100px">
                <Stack
                  key={index}
                  w={["240px", "540px", "760px"]}
                  gap={["20px", "30px", "30px", "100px"]}
                  direction={["column", "column", "row"]}
                  alignItems={["center"]}
                  px={["10px", "10px", "10px", "0"]}
                >
                  <Image src={item.imgSrc} alt="gradient-box" />
                  <VStack
                    alignItems={["center", "center", "start"]}
                    textAlign={["center", "center", "start"]}
                    gap="4"
                    px="15px"
                  >
                    <Heading fontSize={["18px", "24px"]}>{item.title}</Heading>
                    <Box
                      border="4px solid #3A76BF"
                      w="40px"
                      borderRadius="10"
                    ></Box>
                    <Text
                      fontSize={["15px", "15px", "18px", "18px"]}
                      px={["10px", "14px", "14px", "0"]}

                    >
                      {item.body}
                    </Text>
                  </VStack>
                </Stack>
              </VStack>
            </Box>
          ))}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabSection;
