import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import TextLogo from '../../assets/img/TextLogo.png'
import { SignInButton } from '../SignInButton'
import { HeaderContainerDefault, NavContainer, NavMobile } from './styles'
import { BiX, BiMenu } from 'react-icons/bi'
import { useState } from 'react'

export function Header() {
  const { pathname } = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  function openCloseMenu() {
    return setIsOpen(!isOpen)
  }

  return (
    <>
      <HeaderContainerDefault>
        <div className="desktop">
          <Image src={TextLogo} width={100} alt="" />
          <NavContainer>
            <ul>
              <Link href={'/'} aria-current={pathname === '/'}>
                <li>
                  <span>Home</span>
                </li>
              </Link>
              <Link href={'/movies/1'} aria-current={pathname !== '/'}>
                <li>
                  <span>Movies</span>
                </li>
              </Link>
            </ul>
          </NavContainer>
          <SignInButton />
        </div>
        <div className="mobile">
          <Image src={TextLogo} width={80} alt="" />
          <button className="toggleMenu" onClick={openCloseMenu}>
            {isOpen ? <BiX size={28} /> : <BiMenu size={28} />}
          </button>
        </div>
      </HeaderContainerDefault>
      <NavMobile className={`${!isOpen && 'closed'}`}>
        <ul className="mobileNavContainer">
          <Link
            href={'/'}
            aria-current={pathname === '/'}
            onClick={openCloseMenu}
          >
            <li>
              <span>Home</span>
            </li>
          </Link>
          <Link
            href={'/movies/1'}
            aria-current={pathname !== '/'}
            onClick={openCloseMenu}
          >
            <li>
              <span>Movies</span>
            </li>
          </Link>
        </ul>
      </NavMobile>
    </>
  )
}
