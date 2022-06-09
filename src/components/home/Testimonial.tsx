import React from 'react'
import { Box , Text, Image, HStack} from '@chakra-ui/react'
const Testimonial = () => {
  return (
    <Box>
        <Box maxWidth="1220px" m="0 auto" mt="8rem">
            <Box textAlign="center" mb="3rem">
<Text textAlign="center" mb="4rem">&rdquo;What I love about Canvey is the easy way we can collaborate even if there is a lot of people involved in the process&rdquo;</Text>
      
              <Image src="/Profile.png" alt="" display="block" ml="auto" mr="auto" mb="2rem"/>
    
      
        <Text fontWeight="bold">Dr.Guilaume Cabane</Text>
        <Text fontWeight="bold">MD @ BigSpring</Text>
            </Box>
            <HStack width="80%" m="0 auto" justifyContent="space-evenly" borderTop="2px solid #DEC9FA" pt="2rem">
<Image src="/Tonkean.svg" alt=""/>
<Image src="/BigSpring.svg" alt=""/>
<Image src="/Clearbit.svg" alt=""/>
<Image src="/Mine.svg" alt=""/>
            </HStack>
        </Box>
    </Box>
  )
}

export default Testimonial