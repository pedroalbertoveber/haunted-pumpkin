import Image from 'next/image'
import TMDB from '../../assets/img/mdbLogo.png'
import { FooterContainer, TMDBContainer } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <div className="container">
        <div>
          <p>
            Pedro Alberto Veber -<strong> &copy; 2023</strong>
          </p>
        </div>
        <TMDBContainer>
          <div className="imageContainer">
            <Image alt="The Movie Database Logo" width={120} src={TMDB} />
          </div>
          <div className="content">
            <p>
              All movies{"'"} information have been retrieved from the TMDB
              store, reserving all the copyrights
            </p>
          </div>
        </TMDBContainer>
      </div>
    </FooterContainer>
  )
}
