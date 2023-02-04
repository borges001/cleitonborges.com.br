import { Box, VStack, Text, HStack } from "@chakra-ui/react";
import next from "next";

export default function ButtonGrid (){
  return(
    <VStack spacing='19px' display='flow'>

      <HStack 
      bg='#1C1C1C' 
      h='85px' 
      w='364' 
      p={4} 
      color='white' 
      borderRadius='10' 
      mr='30px'
      ml='30px'
      >
        <Box 
        h='85px' 
        w='171px' 
        bgImage="url('buttonImg.png')" 
        bgPosition="top"
        bgRepeat="no-repeat"
        backgroundSize= 'cover' 
        overflow='hidden'>
        </Box>
        <Text>Máquina de Clientes</Text>
      </HStack>


      <HStack 
      bg='#1C1C1C' 
      h='85px' 
      w='364' 
      p={4} 
      color='white' 
      borderRadius='10' 
      mr='30px'
      ml='30px'
      >
        <Box 
        h='85px' 
        w='171px' 
        bgImage="url('buttonImg.png')" 
        bgPosition="top"
        bgRepeat="no-repeat"
        backgroundSize= 'cover' 
        overflow='hidden'>
        </Box>
        <Text>Máquina de Clientes</Text>
      </HStack>

    </VStack>
  )
}