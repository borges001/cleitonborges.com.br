import { Box, Flex } from "@chakra-ui/react";
import next from "next";

export default function ButtonGrid (){
  return(
    <Flex w='100%' direction='column' gap='2' >
      <Flex 
      as='button' 
      bg='#1C1C1C' 
      borderRadius='10px' 
      h='85px'  
      mr='20px' ml='20px' 
      pr='2' 

      bgImage="url('buttonImg.png')" 
      bgPosition="start"
      bgRepeat="no-repeat"
      backgroundSize= 'contain'
      >
        <Flex 
        bgGradient='linear(to-r, rgba(28, 28, 28, 0) 30%,  #1C1C1C 40%)' 
        textStyle='button1'
        h='100%' w='100%'
        direction='row'
        align='center'
        justify='end'
        >
        Máquina de Vendas
        </Flex>
     
      </Flex>
      
      <Flex 
      as='button' 
      bg='#1C1C1C' 
      borderRadius='10px' 
      h='85px'  
      mr='20px' ml='20px' 
      pr='2' 

      bgImage="url('button2.png')" 
      bgPosition="start"
      bgRepeat="no-repeat"
      backgroundSize= 'contain'
      >
        <Flex 
        bgGradient='linear(to-r, rgba(28, 28, 28, 0) 30%,  #1C1C1C 40%)' 
        textStyle='button1'
        h='100%' w='100%'
        direction='row'
        align='center'
        justify='end'
        >
          Software on Demand
        </Flex>
     
      </Flex>

      <Flex 
      as='button' 
      bg='#1C1C1C' 
      borderRadius='10px' 
      h='85px'  
      mr='20px' ml='20px' 
      pr='2' 

      bgImage="url('button3.png')" 
      bgPosition="start"
      bgRepeat="no-repeat"
      backgroundSize= 'contain'
      >
        <Flex 
        bgGradient='linear(to-r, rgba(28, 28, 28, 0) 30%,  #1C1C1C 40%)' 
        textStyle='button1'
        h='100%' w='100%'
        direction='row'
        align='center'
        justify='end'
        >
          Como Aprendi Inglês
        </Flex>
     
      </Flex>


    </Flex>
  )
}