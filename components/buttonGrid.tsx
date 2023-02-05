import { Box, Flex, Square, Stack, } from "@chakra-ui/react";
import next from "next";

export default function ButtonGrid (){
  return(
    <Box as='section' w='100%' direction='column'>
      <Box as='button' bg='#942626' borderRadius='10px' h='85px' w='90%' maxW='100%' mr='20px' ml='20px' >
      </Box>
      <Box as='button' bg='#942626' borderRadius='10px' h='85px' w='90%' maxW='100%' mr='20px' ml='20px' >
      </Box>
      <Box as='button' bg='#942626' borderRadius='10px' h='85px' w='100%' maxW='100%' mr='20px' ml='20px' >
      </Box>
    </Box>
  )
}