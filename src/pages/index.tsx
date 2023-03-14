import { SignUpButton } from '@/components/SignUpButton'
import {
  ContentContainer,
  HomeContainer,
  ImageContainer,
} from '@/styles/pages/home'
import Head from 'next/head'
import Image from 'next/image'
import Img from '../assets/img/WelcomeImage.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Haunted Pumpkin | Home</title>
      </Head>
      <HomeContainer>
        <ContentContainer>
          <h1>
            Welcome to <strong>Haunted Pumpkin</strong>
          </h1>
          <p>
            Here you{"'"}ll find whatever horror movie <br /> or serie you want
            to watch
          </p>
          <SignUpButton />
        </ContentContainer>
        <ImageContainer>
          <Image src={Img} width={500} alt={''} />
        </ImageContainer>
      </HomeContainer>
    </>
  )
}
