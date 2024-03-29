
import { Links } from '@/components/Background'
import Connect from '@/components/Connect'
import Page from '@/components/Page'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dev Adarsh - Creative Developer</title>
        <meta name="description" content="Feel free to contact, Ask any query, Get in touch to be friends!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <Connect />
      </Page>
    </>
  )
}
