import { Banner } from '@/components/Banner'
import { LargeMovieCard } from '@/components/LargeMovieCard'
import { api } from '@/services/api'
import { HomeContainer, MainMoviesContainer } from '@/styles/pages/home'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

interface HomeProps {
  movieList: {
    id: number
    title: string
    vote_average: number
    poster_path: string
  }[]
}

export default function Home({ movieList }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3.5,
      spacing: 32,
      origin: 'center',
    },
    loop: true,
  })

  return (
    <>
      <Head>
        <title>Haunted Pumpkin | Home</title>
      </Head>
      <HomeContainer>
        <Banner />
        <MainMoviesContainer ref={sliderRef} className="keen-slider">
          {movieList.map((movie) => {
            return <LargeMovieCard key={movie.id} {...movie} />
          })}
        </MainMoviesContainer>
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get(`/discover/movie`, {
    params: {
      api_key: process.env.API_KEY!,
      with_genres: process.env.HORROR_ID!,
    },
  })

  const movieList = await response.data.results
  console.log(movieList)
  return {
    props: {
      movieList,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}
