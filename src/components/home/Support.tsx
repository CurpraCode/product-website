import React from 'react'
import { Box, Text, HStack, Input, Button } from '@chakra-ui/react'
const Support = () => {
  return (
    <Box bg="#F4F6F9">
        <Box maxWidth="1220px" m="0 auto" mt="8rem" pt="8rem" pb="8rem">
            <Box textAlign="center" >
                <Text fontWeight="bold" mb="2rem" color="#EB801D">Support</Text>
                <Text fontWeight="bold" fontSize="1.5rem">Subscribe to the Newsletter</Text>
                <Text fontSize="1.5rem">and stay up to date with the latest</Text>
<HStack justifyContent="center" mt="2rem">
    <Input type="email" width={400} placeholder="Email" _focus={{
    outline:"none",
    bg:"none"
  }}/>

    <Button bg="#3a76bf" borderRadius="8px" padding="10px" color="#fff" width="120px" mt="3rem"
 _hover={{
    bg:"#3a76bf",

  }}
  _focus={{
    outline:"none",
    bg:"#3a76bf"
  }}>Notify Me</Button>
</HStack>
            </Box>

        </Box>
    </Box>
  )
}

export default Support