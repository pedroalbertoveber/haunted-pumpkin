import Image from 'next/image'
import TextLogo from '../../assets/img/TextLogo.png'
import { SignInButton } from '../SignInButton'
import { HeaderContainer, NavContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <Image src={TextLogo} width={100} alt="" />
        <NavContainer>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Movies</a>
            </li>
          </ul>
        </NavContainer>
        <SignInButton />
      </div>
    </HeaderContainer>
  )
}
