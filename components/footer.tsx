import next from "next";
import { Text } from "@chakra-ui/react";
import { Box, HStack, Link } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';


const sq = '25px'
export default function Footer (){
  return(
    <>
    <HStack spacing='20px' justify='center' mt='4' mb='2'>

    <Link href='https://wa.me/5519997608863' isExternal>
      <Box as={ FaWhatsapp } w={ sq } h={ sq } />
    </Link>
    
    <Link href='https://instagram.com/cleiton.borgees/' isExternal >
      <Box as={ FaInstagram } w={ sq } h={ sq }/>
    </Link>

    <Link href='mailto:cleiton.borges@digitalbgs.com' isExternal>
      <Box as={ AiOutlineMail } w={ sq } h={ sq }/>
    </Link>

    <Link href='https://twitter.com/cleitonborgees' isExternal>
      <Box as={ FaTwitter } w={ sq } h={ sq }/>
    </Link>

    <Link href='https://youtube.com/@cleiton.borges' isExternal>
      <Box as={ FaYoutube } w={ sq } h={ sq }/>
    </Link>

  </HStack>
  <Text textStyle='footerText'>
    ©2023 - Todos os direitos reservados<br/>CNPJ: 40.157.530/0001-62
  </Text>
  </>
  )
}