import next from "next";
import { AspectRatio, Box, Image } from "@chakra-ui/react";


export default function HeaderImage (){
  return(
      <Box 
   
      h='312'
      bgGradient='linear(to-t, green.200, pink.500)'
      bgImage="url('user.jpg')" 
      bgPosition="center"
      bgRepeat="no-repeat"
      backgroundSize= 'cover'
      >

      </Box>
  )
}
