
import Page from '@/components/Page'
import Head from 'next/head'
import { Suspense, lazy } from 'react'

// import Projects from '@/components/Projects'
const Projects = lazy(() => import('@/components/Projects'))

export default function Home() {
  return (
    <>
      <Head>
        <title>Dev Adarsh - Creative Developer</title>
        <meta name="description" content="Browse the list of my projects, Feel free to view them and visit the source as well." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
      <Suspense fallback={<h1 style={{textAlign: 'center', letterSpacing: '2px', textTransform: 'uppercase', }}>Loading Projects...</h1>}><Projects /></Suspense>
      </Page>
    </>
  )
}
