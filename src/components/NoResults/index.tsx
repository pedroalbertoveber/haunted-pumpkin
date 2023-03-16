import Image from 'next/image'
import Link from 'next/link'
import Img from '../../assets/img/NoResults.png'
import { LinkContainer, NoResultsContainer } from './styles'

export function NoResults() {
  return (
    <>
      <LinkContainer>
        <Link href={'/movies/1'}>Back to all horror movies</Link>
      </LinkContainer>
      <NoResultsContainer>
        <Image src={Img} alt="No results for the search" width={500} />
        <h1>
          We{"'"}re sorry, we do not have any movie with the title searched
        </h1>
      </NoResultsContainer>
    </>
  )
}
