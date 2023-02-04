import { Box, VStack } from "@chakra-ui/react";
import next from "next";

export default function ButtonGrid (){
  return(
    <VStack direction={ "column" } spacing='24px' >
      <Box bg='tomato' w='100%' p={4} color='white'>
        Bottão 1
      </Box>
      <Box bg='red' w='100%' p={4} color='white'>
        Bottão 2
      </Box>
      <Box bg='white' w='100%' p={4} color='white'>
        Bottão 3
      </Box>

    </VStack>
  )
}
//Creio que aqui seja o mais dificil
