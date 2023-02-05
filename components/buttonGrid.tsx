import { Box, Flex } from "@chakra-ui/react";
import next from "next";

export default function ButtonGrid (){
  return(
    <Flex w='100%' direction='column' gap='2' >
      <Box as='button' bg='#1C1C1C' borderRadius='10px' h='85px'  mr='20px' ml='20px' >
      </Box>
      <Box as='button' bg='#1C1C1C' borderRadius='10px' h='85px'  mr='20px' ml='20px' >
      </Box>
      <Box as='button' bg='#1C1C1C' borderRadius='10px' h='85px'  mr='20px' ml='20px' >
      </Box>
    </Flex>
  )
}