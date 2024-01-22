import HomeBox from '@/components/Home'
import Page from '@/components/Page'

import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dev Adarsh - Creative Developer</title>
        <meta name="description" content="Explore simplicity redefined in my portfolio. Clean designs, impactful projects. Your next solution starts here." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <HomeBox />
      </Page>
    </>
  )
}
