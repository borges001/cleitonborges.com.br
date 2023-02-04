import { Box, HStack } from "@chakra-ui/react";
import next from "next";
import { FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai'


export default function SocialLinks (){
  return(
    <HStack spacing='15px' justify='center'mt='4' mb='2'>
      <Box as={ FaWhatsapp } w='40px' h='40px'/>
      <Box as={ FaInstagram } w='40px' h='40px'/>
      <Box as={ AiOutlineMail } w='40px' h='40px'/>
      <Box as={ FaTwitter } w='40px' h='40px'/>
      <Box as={ FaYoutube } w='40px' h='40px'/>
    </HStack>
  )
}