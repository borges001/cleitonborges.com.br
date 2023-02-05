import Head from 'next/head'
import { Box, Flex } from "@chakra-ui/react";
import ButtonGrid from '../components/buttonGrid';
import Footer from '../components/footer'
import Header from '../components/header';


export default function Home() {
  return (
    <>
      <Head>
        <title>Cleiton Borges</title>
        <meta name="description" content="Links de Contato Cleiton Borges" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <Flex as='section' w='100vw' h='100vh' direction='column' align='center'>
        <Box minW='400px' maxW='430px'>
          <Header/>
          <ButtonGrid/>
          <Footer/>
        </Box>
    </Flex>
      
    </>
  )
}