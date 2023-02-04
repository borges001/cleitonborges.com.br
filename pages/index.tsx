import Head from 'next/head'
import { Inter } from '@next/font/google'
import HeaderImage from '@/components/headerImage'
import NameNDesc from '@/components/nameNDesc'
import ButtonGrid from '@/components/buttonGrid'
import SocialLinks from '@/components/socialLinks'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Cleiton Borges</title>
        <meta name="description" content="Links de Contato Cleiton Borges" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeaderImage/>
        <NameNDesc/>
        <ButtonGrid/>
        <SocialLinks/>
        <Footer/>
      </main>
    </>
  )
}
