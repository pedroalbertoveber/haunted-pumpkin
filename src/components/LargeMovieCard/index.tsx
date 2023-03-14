import Image from 'next/image'
import { LargeMovieContainer } from './styles'
import 'keen-slider/keen-slider.min.css'

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
        <span>{voteAverage} / 10</span>
        <h4>{title}</h4>
      </footer>
    </LargeMovieContainer>
  )
}
