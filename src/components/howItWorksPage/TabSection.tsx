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
      body: "At Canvey we want interpreters to work from anywhere at anytime. Get on the app and get paid",
      imgSrc: "/download.svg",
    },

    {
      title: "2. Sign Up",
      body: "At Canvey we want interpreters to work from anywhere at anytime. Get on the app and get paid",
      imgSrc: "/signup.svg",
    },
    {
      title: "3. Go Online",
      body: "At Canvey we want interpreters to work from anywhere at anytime. Get on the app and get paid",
      imgSrc: "/goonline.svg",
    },
    {
      title: "4. Make Money",
      body: "At Canvey we want interpreters to work from anywhere at anytime. Get on the app and get paid",
      imgSrc: "/makemoney.svg",
    },
    {
      title: "5. Refer Friends",
      body: "At Canvey we want interpreters to work from anywhere at anytime. Get on the app and get paid",
      imgSrc: "/referfriends.svg",
    },
  ]);
  const [TabData] = useState([
    {
      title: "1. Verification",
      body: "At Canvey we want interpreters to work from anywhere at anytime. Get on the app and get paid",
      imgSrc: "/verification.svg",
    },

    {
      title: "2. Make Request",
      body: "At Canvey we want interpreters to work from anywhere at anytime. Get on the app and get paid",
      imgSrc: "/makerequest.svg",
    },
    {
      title: "3. Stay Organized",
      body: "At Canvey we want interpreters to work from anywhere at anytime. Get on the app and get paid",
      imgSrc: "/stayorganized.svg",
    },
    {
      title: "4. Rating System",
      body: "At Canvey we want interpreters to work from anywhere at anytime. Get on the app and get paid",
      imgSrc: "/ratingsystem.svg",
    },
    {
      title: "5. Analytics",
      body: "At Canvey we want interpreters to work from anywhere at anytime. Get on the app and get paid",
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
