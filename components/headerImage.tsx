import next from "next";
import { AspectRatio, Box, Flex, Image } from "@chakra-ui/react";


export default function HeaderImage (){
  return(
      <Box
      bgImage="url('user.jpg')" 
      bgPosition="top"
      bgRepeat="no-repeat"
      backgroundSize= 'cover'
      overflow='hidden'
      >
        <Box 
        bgGradient='linear(to-b, rgba(24, 24, 24, 0) 70%, #181818 95%)'
        h='300'
      />
    </Box>
  )
}
