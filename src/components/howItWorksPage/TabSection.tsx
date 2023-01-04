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
      title: "1. Lorem ipsum",
      body: "Lorem ipsum dolor sit amet consectetur. Hendrerit nunc pellentesque vitae aenean diam nulla maecenas. Dui accumsan amet vitae amet bibendum sit cum felis.",
    },
    {
      title: "2. Lorem ipsum",
      body: "Lorem ipsum dolor sit amet consectetur. Hendrerit nunc pellentesque vitae aenean diam nulla maecenas. Dui accumsan amet vitae amet bibendum sit cum felis.",
    },
    {
      title: "3. Lorem ipsum",
      body: "Lorem ipsum dolor sit amet consectetur. Hendrerit nunc pellentesque vitae aenean diam nulla maecenas. Dui accumsan amet vitae amet bibendum sit cum felis.",
    },
    {
      title: "4. Lorem ipsum",
      body: "Lorem ipsum dolor sit amet consectetur. Hendrerit nunc pellentesque vitae aenean diam nulla maecenas. Dui accumsan amet vitae amet bibendum sit cum felis.",
    },
    {
      title: "5. Lorem ipsum",
      body: "Lorem ipsum dolor sit amet consectetur. Hendrerit nunc pellentesque vitae aenean diam nulla maecenas. Dui accumsan amet vitae amet bibendum sit cum felis.",
    },
  ]);

  return (
    <Tabs>
      <TabList>
        <Tab w="50%">Interpreters</Tab>
        <Tab w="50%">Health Care Workers</Tab>
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
                <Image src="/random-gradient.svg" alt="gradient-box" />
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
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabSection;
