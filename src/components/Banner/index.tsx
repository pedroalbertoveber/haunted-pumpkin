import { BannerContainer, ContentContainer, ImageContainer } from './styles'
import { SignUpButton } from '../SignUpButton'
import Image from 'next/image'
import Img from '../../assets/img/WelcomeImage.png'

export function Banner() {
  return (
    <BannerContainer>
      <ContentContainer>
        <h1>
          Welcome to <strong>Haunted Pumpkin</strong>
        </h1>
        <p>
          Here you{"'"}ll find whatever horror movie <br /> you want to watch
        </p>
        <SignUpButton />
      </ContentContainer>
      <ImageContainer>
        <Image src={Img} width={500} alt={''} />
      </ImageContainer>
    </BannerContainer>
  )
}
