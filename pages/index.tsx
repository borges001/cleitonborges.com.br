import Head from 'next/head'

import { Inter } from '@next/font/google'

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
        <h1> To on na Vercel</h1>
      </main>
    </>
  )
}
