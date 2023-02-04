import { Box, HStack } from "@chakra-ui/react";
import next from "next";

export default function SocialLinks (){
  return(
    <HStack spacing='10px'>
      <Box w='40px' h='40px' bg='green.800'>
        Whatsapp
      </Box>
      <Box w='40px' h='40px' bg='purple.800'>
        Insta
      </Box>
      <Box w='40px' h='40px' bg='gray.800'>
        Email
      </Box>
      <Box w='40px' h='40px' bg='blue.800'>
        Twitter
      </Box>
      <Box w='40px' h='40px' bg='red.800'>
        Youtube
      </Box>

    </HStack>
  )
}