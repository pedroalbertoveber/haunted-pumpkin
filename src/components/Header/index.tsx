import Image from 'next/image'
import Link from 'next/link'
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
            <Link href={'/'} aria-current>
              <li>
                <span>Home</span>
              </li>
            </Link>
            <Link href={'/movies/1'}>
              <li>
                <span>Movies</span>
              </li>
            </Link>
          </ul>
        </NavContainer>
        <SignInButton />
      </div>
    </HeaderContainer>
  )
}
