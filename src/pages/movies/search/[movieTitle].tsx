import { SearchField } from '@/components/SearchField'
import { SkeletonCard } from '@/components/SkeletonCard'
import { SmallMovieCard } from '@/components/SmallMovieCard'
import { SubtitleDefault } from '@/components/SubtitleDefault'
import { api } from '@/services/api'
import { MoviesContainer, PageContainer } from '@/styles/pages/movies'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { cardVariants } from '@/lib/framer-motion'

interface MoviesType {
  id: number
  title: string
  vote_average: number
  poster_path: string
  genre_ids: number[]
  release_date: string
}

interface SearchByMovieProps {
  filteredMovies: MoviesType[]
}

export default function SearchByMovieTitle({
  filteredMovies,
}: SearchByMovieProps) {
  const { isFallback, query } = useRouter()

  return (
    <PageContainer>
      <SubtitleDefault
        subtitle={`Search by title: ${isFallback ? '...' : query.movieTitle}`}
      />
      <SearchField />
      {isFallback && <SkeletonCard repeat={20} />}
      {!isFallback && (
        <motion.div
          initial="offscreen"
          animate="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <MoviesContainer>
            {filteredMovies.map((movie) => (
              <motion.div key={movie.id} variants={cardVariants}>
                <SmallMovieCard {...movie} />
              </motion.div>
            ))}
          </MoviesContainer>
        </motion.div>
      )}
    </PageContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { movieTitle: 'alien' } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<
  any,
  { movieTitle: string }
> = async ({ params }) => {
  const response = await api.get('/search/movie', {
    params: {
      api_key: process.env.API_KEY,
      query: params!.movieTitle,
    },
  })

  const filteredMovies: MoviesType[] = response.data.results.filter(
    (movie: MoviesType) =>
      movie.genre_ids.includes(Number(process.env.HORROR_ID!)),
  )

  console.log(filteredMovies)

  return {
    props: {
      filteredMovies,
    },
  }
}
