import Image from 'next/image'
import { LargeMovieContainer, StarRating } from './styles'
import 'keen-slider/keen-slider.min.css'
import { Rating } from 'react-simple-star-rating'

interface LargeMovieCardProps {
  id: number
  title: string
  vote_average: number
  poster_path: string
}

export function LargeMovieCard({
  id,
  poster_path: posterPath,
  title,
  vote_average: voteAverage,
}: LargeMovieCardProps) {
  const imagePath = 'https://image.tmdb.org/t/p/original'

  return (
    <LargeMovieContainer className="keen-slider__slide">
      <Image
        width={350}
        alt={title}
        src={imagePath + posterPath}
        height={450}
      />
      <footer>
        <StarRating>
          <Rating
            initialValue={voteAverage / 2}
            readonly={true}
            allowFraction={true}
            emptyColor={'#434347'}
            size={20}
          />
          <span className="voteAverage">{voteAverage} / 10</span>
        </StarRating>
        <h4>{title}</h4>
      </footer>
    </LargeMovieContainer>
  )
}
