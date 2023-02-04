import next from "next";
import { Box, Image } from "@chakra-ui/react";


export default function HeaderImage (){
  return(
    <Box>
       <Image src='user.jpg' alt='Cleiton Borges' />
    </Box>
  )
}