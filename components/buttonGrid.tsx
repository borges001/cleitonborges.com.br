import { Box, Text } from "@chakra-ui/react";
import next from "next";

export default function ButtonGrid (){
  return(
<>
  <Box 
  bg='#1C1C1C' 
  h='85px'
  borderRadius='10px' 
  mr='20px'
  ml='20px'

  >
    <Box
    borderRadius='10px' 
    bg='white'
    bgImage="url('buttonImg.png')" 
    bgPosition="center"
    bgRepeat="no-repeat"
    backgroundSize= 'contain'
    h='85px'
    maxW='170px'
    >
      <Box bgGradient='linear(to-r, rgba(28, 28, 28, 0) 50%, #1C1C1C 90%)' h='85px' maxW='170px'></Box>
    </Box>
    <Text>Máquina de VEndas</Text>
  </Box>
</>
)
}