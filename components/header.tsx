import next from "next";
import { Box, Text } from "@chakra-ui/react";


export default function Header (){
  return(
  <>
    <Box
    bgImage="url('user.jpg')" 
    bgPosition="top"
    bgRepeat="no-repeat"
    backgroundSize= 'cover'
    overflow='hidden'
    minH='280px'
    
    >
      <Box 
      bgGradient='linear(to-b, rgba(24, 24, 24, 0) 70%, #181818 95%)'
      h='280px' w='390px'
      />
    </Box>
    <Text textStyle='userName'>
        Cleiton Borges
      </Text>
      <Text textStyle='bio'>
        Em Tech desde os 8 anos. <br/> Hoje planejo e executo estratégias de<br/>growth marketing.
      </Text>
  </> 
  )
}
