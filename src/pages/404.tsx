import { NotFoundContainer } from '@/styles/pages/404'
import Image from 'next/image'
import Link from 'next/link'
import Img from '../assets/img/404.png'

export default function NotFound() {
  return (
    <NotFoundContainer>
      <div>
        <h1>Page not found</h1>
        <Link href={'/movies/1'}>Back to all horror movies</Link>
      </div>
      <Image src={Img} alt="page not found!" width={450} />
    </NotFoundContainer>
  )
}
