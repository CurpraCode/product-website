import React from 'react'
import { Box, Heading, Flex, Text, Button, HStack, Image } from '@chakra-ui/react'
// import Image from 'next/image'
const Screen = () => {
  return (
    <Box maxWidth="1220px" m="0 auto"> 
        <Flex justifyContent="space-between" mt="7rem" >
            <Box mt="2rem"> <Heading color="#fff" fontWeight="bold" mb="1rem" fontSize="3rem">Interpretation <br /> made simple</Heading>
        <Text color="#fff">In sagittis condimentum vehicula. Morbi ullamcorper egestas orci.</Text>
<Button bg="#3a76bf" borderRadius="8px" padding="10px" color="#fff" width="200px" mt="3rem"
 _hover={{
    bg:"#3a76bf",

  }}
  _focus={{
    outline:"none",
    bg:"#3a76bf"
  }}>Start Now</Button>

            </Box>
           <Image src="/screen.png" alt="" width="50%"/>
        </Flex>
        
    </Box>
  )
}

export default Screen;