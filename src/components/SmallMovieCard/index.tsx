import Image from 'next/image'
import Link from 'next/link'
import { InfoContainer, RatingContainer, SmallMovieContainer } from './styles'
import { Rating } from 'react-simple-star-rating'
import { AnimatedMovieCard } from '../FramerMotion/AnimatedMovieCard'

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
    <Link href={'/' + id} prefetch={false}>
      <AnimatedMovieCard movieCardSize="small">
        <SmallMovieContainer title={title}>
          <RatingContainer>
            <div className="container">
              <Rating
                size={20}
                readonly={true}
                emptyColor={'#434347'}
                initialValue={voteAverage / 2}
                allowFraction={true}
              />
              <span className="voteAverage">{voteAverage.toFixed(1)} / 10</span>
            </div>
          </RatingContainer>
          <Image
            src={imagePath + posterPath}
            alt={title}
            width={250}
            height={370}
          />
          <InfoContainer>
            <h4>{title}</h4>
            <p>
              Release date: <strong>{releaseDate.replaceAll('-', '/')}</strong>
            </p>
          </InfoContainer>
        </SmallMovieContainer>
      </AnimatedMovieCard>
    </Link>
  )
}
