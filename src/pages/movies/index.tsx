import { SmallMovieCard } from '@/components/SmallMovieCard'
import { SubtitleDefault } from '@/components/SubtitleDefault'
import { api } from '@/services/api'
import { MoviesContainer, PageContainer } from '@/styles/pages/movies'
import { GetStaticProps } from 'next'

interface MoviesProps {
  movieList: {
    id: number
    title: string
    vote_average: number
    poster_path: string
    release_date: string
  }[]
}

export default function Movies({ movieList }: MoviesProps) {
  return (
    <PageContainer>
      <SubtitleDefault subtitle="Best rated horror movies:" />
      <MoviesContainer>
        {movieList.map((movie) => {
          return <SmallMovieCard key={movie.id} {...movie} />
        })}
      </MoviesContainer>
    </PageContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get(`/discover/movie`, {
    params: {
      api_key: process.env.API_KEY!,
      with_genres: process.env.HORROR_ID!,
      'vote_average.gte': 10,
    },
  })

  const movieList = await response.data.results

  return {
    props: {
      movieList,
    },
  }
}
