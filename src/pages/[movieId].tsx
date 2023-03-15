import { SubtitleDefault } from '@/components/SubtitleDefault'
import { ImArrowLeft } from 'react-icons/im'
import { api } from '@/services/api'
import {
  GenresContainer,
  MovieDetails,
  MovieInfoContainer,
  ProductionCompanies,
} from '@/styles/pages/movieInfo'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { SkeletonScreen } from '@/components/SkeletonScreen'
import 'react-loading-skeleton/dist/skeleton.css'

interface MovieInfoProps {
  selectedMovie: {
    id: number
    title: string
    backdropPath: string
    runtime: number
    genres: {
      id: number
      name: string
    }[]
    overview: string
    productionCompanies: {
      id: number
      name: string
    }[]
    voteAverage: number
  }
}

export default function MovieInfo({ selectedMovie }: MovieInfoProps) {
  const imagePath = 'https://image.tmdb.org/t/p/original'

  const { isFallback, push } = useRouter()

  function goBackToAllMovies() {
    return push('/movies/1')
  }

  return (
    <MovieInfoContainer>
      <SubtitleDefault subtitle={isFallback ? '...' : selectedMovie.title} />
      {isFallback && <SkeletonScreen />}
      {!isFallback && (
        <div className="info">
          <Image
            src={imagePath + selectedMovie.backdropPath}
            width={600}
            height={500}
            alt={selectedMovie.title}
          />
          <MovieDetails>
            <span className="voteAverage">
              {selectedMovie.voteAverage} / 10
            </span>
            <span className="runtime">{selectedMovie.runtime} minutes</span>
            <GenresContainer>
              {selectedMovie.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </GenresContainer>
            <p>Overview: {selectedMovie.overview}</p>
            <ProductionCompanies>
              {selectedMovie.productionCompanies.map((company) => (
                <li key={company.id}>&copy; {company.name}</li>
              ))}
            </ProductionCompanies>
          </MovieDetails>
        </div>
      )}
      <div className="goBack" onClick={goBackToAllMovies}>
        <ImArrowLeft size={24} />
      </div>
    </MovieInfoContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { movieId: '550' } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { movieId: string }> = async ({
  params,
}) => {
  const response = await api.get(`/movie/${params!.movieId}`, {
    params: {
      api_key: process.env.API_KEY!,
    },
  })

  const {
    id,
    title,
    backdrop_path: backdropPath,
    runtime,
    genres,
    overview,
    production_companies: productionCompanies,
    vote_average: voteAverage,
  } = await response.data

  const selectedMovie = {
    id,
    title,
    backdropPath,
    runtime,
    genres,
    overview,
    productionCompanies,
    voteAverage,
  }

  return {
    props: {
      selectedMovie,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}
