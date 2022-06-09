import React from 'react'
import { Box, Flex, Text, Heading, Button, Image, Divider } from '@chakra-ui/react'

const Save = () => {
  return (
    <Box maxWidth="1220px" m="0 auto" mb="6rem">
        <Flex justifyContent="space-between" mt="10rem" >
        <Image src="/fem.svg" alt="" width="40%" mr="10rem"/>
            <Box mt="2rem"> 
            <Heading   fontWeight="bold" mb="1rem" fontSize="2rem" pb="2rem">Save time with <br /> Automations </Heading>
            {/* <Divider size="80" /> */}
            <Image src="/Line.svg" alt="" pb="2rem"/>
        <Text lineHeight="35px">In sagittis condimentum vehicula. Morbi ullamcorper egestas orci. Quisque sit amet fringilla mauris. Suspendisse ut tempus ante. Ut volutpat vehicula nibh, id finibus magna pharetra vel. Ut vehicula rhoncus ultricies. Duis euismod tortor vel ante varius fringilla.</Text>

            </Box>
         
        </Flex>
        </Box>
  )
}

export default Save