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
      body: "Download and install the app on your mobile device from the appropriate app store (e.g. App Store, Google Play).",
      imgSrc: "/download.svg",
    },

    {
      title: "2. Sign Up",
      body: "Open the app and create a new account by clicking sign up, then follow the onboarding steps.",
      imgSrc: "/signup.svg",
    },
    {
      title: "3. Go Online",
      body: "Take requests for interpretation services, be it virtual or in-person, scheduled now or later, at the convenience of your own schedule.",
      imgSrc: "/goonline.svg",
    },
    {
      title: "4. Make Money",
      body: "Earn money on the app which includes features that will help interpreters track their earnings in real time.",
      imgSrc: "/makemoney.svg",
    },
    {
      title: "5. Refer Friends",
      body: "Refer your friends and earn rewards for each successful referral, making it easy for you to earn extra money while helping your friends join the platform.",
      imgSrc: "/referfriends.svg",
    },
  ]);
  const [TabData] = useState([
    {
      title: "1. Verification",
      body: "As a healthcare provider, you will have access to our interpretation service platform once your employer verifies you, this ensures that we maintain the highest level of quality and professionalism for our users.",
      imgSrc: "/verification.svg",
    },

    {
      title: "2. Make Request",
      body: "You have the flexibility to request interpretation services in a specific language, on a specific date and time, whether you need an in-person or virtual interpreter.",
      imgSrc: "/makerequest.svg",
    },
    {
      title: "3. Stay Organized",
      body: "Our platform provides features such as viewing recent activity to help  healthcare providers streamline their day to day workflow.",
      imgSrc: "/stayorganized.svg",
    },
    {
      title: "4. Rating System",
      body: "Help us increase the quality of interpretation services by providing feedback on the interpreters performance.",
      imgSrc: "/ratingsystem.svg",
    },
    {
      title: "5. Analytics",
      body: "Hospital administrators can view analytics of usage to benefit improved decision-making, cost-saving, and the ability to measure the impact of the interpretation services.",
      imgSrc: "/analytics.svg",
    },
  ]);

  return (
    <Tabs>
      <TabList>
        <Tab w="50%" fontSize="1.3rem" fontWeight="bolder">
          Interpreters
        </Tab>
        <Tab w="50%" fontSize="1.3rem" fontWeight="bolder">
          Health Care Workers
        </Tab>
      </TabList>

      <TabPanels py="100px">
        <TabPanel>
          <VStack alignItems="center" gap="100px">
            {TabsData.map((item, index) => (
              <Stack
                key={index}
                w={["240px", "540px", "760px"]}
                gap={["20px", "30px", "30px", "100px"]}
                direction={["column", "column", "row"]}
                alignItems={["center"]}
                px={["0", "10px", "10px", "0"]}
              >
                <Image src={item.imgSrc} alt="gradient-box" />
                <VStack
                  alignItems={["center", "center", "start"]}
                  textAlign={["center", "center", "start"]}
                  gap="4"
                >
                  <Heading fontSize={["18px", "24px"]}>{item.title}</Heading>
                  <Box
                    border="4px solid #8F5273"
                    w="40px"
                    borderRadius="10"
                  ></Box>
                  <Text fontSize="18px">{item.body}</Text>
                </VStack>
              </Stack>
            ))}
          </VStack>
        </TabPanel>
        <TabPanel>
          <VStack alignItems="center" gap="100px">
            {TabData.map((item, index) => (
              <Stack
                key={index}
                w={["240px", "540px", "760px"]}
                gap={["20px", "30px", "30px", "100px"]}
                direction={["column", "column", "row"]}
                alignItems={["center"]}
                px={["0", "10px", "10px", "0"]}
              >
                <Image src={item.imgSrc} alt="gradient-box" />
                <VStack
                  alignItems={["center", "center", "start"]}
                  textAlign={["center", "center", "start"]}
                  gap="4"
                >
                  <Heading fontSize={["18px", "24px"]}>{item.title}</Heading>
                  <Box
                    border="4px solid #3A76BF"
                    w="40px"
                    borderRadius="10"
                  ></Box>
                  <Text fontSize="18px">{item.body}</Text>
                </VStack>
              </Stack>
            ))}
          </VStack>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabSection;
