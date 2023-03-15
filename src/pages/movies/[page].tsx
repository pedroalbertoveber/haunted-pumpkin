import { SearchField } from '@/components/SearchField'
import { SkeletonCard } from '@/components/SkeletonCard'
import { SmallMovieCard } from '@/components/SmallMovieCard'
import { SubtitleDefault } from '@/components/SubtitleDefault'
import { api } from '@/services/api'
import {
  MoviesContainer,
  PageContainer,
  Pagination,
} from '@/styles/pages/movies'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { ImArrowLeft, ImArrowRight } from 'react-icons/im'

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
  const { isFallback, query, push } = useRouter()
  const { page } = query

  function nextPage() {
    if (page === '20') {
      return alert('You can no longer search more movies!')
    }
    const nextPageNumber = Number(page) + 1
    return push('/movies/' + nextPageNumber)
  }

  function previousPage() {
    if (page === '1') {
      return alert('You are already in the page 1')
    }
    const previousPageNumber = Number(page) - 1
    return push('/movies/' + previousPageNumber)
  }

  const disabledPreviousPage = page === '1'
  const disabledNextPage = page === '20'

  return (
    <PageContainer>
      <SubtitleDefault subtitle="Best rated horror movies:" />
      <SearchField />
      {isFallback && <SkeletonCard repeat={20} />}
      {!isFallback && (
        <MoviesContainer>
          {movieList.map((movie) => {
            return <SmallMovieCard key={movie.id} {...movie} />
          })}
        </MoviesContainer>
      )}

      <Pagination>
        <button
          title="Previous page"
          disabled={disabledPreviousPage}
          onClick={previousPage}
        >
          <ImArrowLeft size={24} />
        </button>
        <span>Page {page}</span>
        <button
          title="Next page"
          disabled={disabledNextPage}
          onClick={nextPage}
        >
          <ImArrowRight size={24} />
        </button>
      </Pagination>
    </PageContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { page: '1' } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { page: string }> = async ({
  params,
}) => {
  if (!params) {
    return {
      redirect: {
        destination: '/movies/1',
        permanent: false,
      },
    }
  }

  const { page } = params!

  const response = await api.get(`/discover/movie`, {
    params: {
      api_key: process.env.API_KEY!,
      with_genres: process.env.HORROR_ID!,
      'vote_count.gte': 500,
      sort_by: 'vote_average.desc',
      page,
    },
  })

  const movieList = await response.data.results

  return {
    props: {
      movieList,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}
