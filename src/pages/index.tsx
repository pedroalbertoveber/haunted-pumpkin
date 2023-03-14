import { Banner } from '@/components/Banner'
import { HomeContainer } from '@/styles/pages/home'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Haunted Pumpkin | Home</title>
      </Head>
      <HomeContainer>
        <Banner />
      </HomeContainer>
    </>
  )
}
