import Image from 'next/image'
import Link from 'next/link'
import { InfoContainer, SmallMovieContainer } from './styles'

interface Props {
  title: string
  id: number
  vote_average: number
  poster_path: string
  release_date: string
}

export function SmallMovieCard({
  title,
  id,
  vote_average: voteAverage,
  poster_path: posterPath,
  release_date: releaseDate,
}: Props) {
  const imagePath = 'https://image.tmdb.org/t/p/original'

  return (
    <Link href={'/' + id}>
      <SmallMovieContainer>
        <Image
          src={imagePath + posterPath}
          alt={title}
          width={250}
          height={370}
        />
        <InfoContainer>
          <p>
            Vote average: <strong>{voteAverage} / 10</strong>
          </p>
          <h4>{title}</h4>
          <p>
            Release date: <strong>{releaseDate.replaceAll('-', '/')}</strong>
          </p>
        </InfoContainer>
      </SmallMovieContainer>
    </Link>
  )
}
