import { Banner } from '@/components/Banner'
import { LargeMovieCard } from '@/components/LargeMovieCard'
import { api } from '@/services/api'
import { HomeContainer, MainMoviesContainer } from '@/styles/pages/home'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { SubtitleDefault } from '@/components/SubtitleDefault'
import { ShowingUpMotionContainer } from '@/components/FramerMotion/ShowingUpMotionContainer'

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
      perView: 4,
      spacing: 32,
      origin: 'center',
    },
    loop: true,
    breakpoints: {
      '(max-width: 1024px)': {
        slides: {
          perView: 3.5,
          spacing: 32,
          origin: 'center',
        },
      },
      '(max-width: 768px)': {
        slides: {
          perView: 2.5,
          spacing: 32,
          origin: 'center',
        },
      },
      '(max-width: 640px)': {
        slides: {
          perView: 1.5,
          spacing: 32,
          origin: 'center',
        },
      },
    },
  })

  return (
    <>
      <Head>
        <title>Haunted Pumpkin | Home</title>
      </Head>
      <HomeContainer>
        <Banner />
        <SubtitleDefault subtitle="The following is a small part of the movies you'll find here:" />
        <ShowingUpMotionContainer>
          <MainMoviesContainer>
            <div className="shadowLeft"></div>
            <div className="movies keen-slider" ref={sliderRef}>
              {movieList.map((movie) => {
                return <LargeMovieCard {...movie} key={movie.id} />
              })}
            </div>
            <div className="shadowRight"></div>
          </MainMoviesContainer>
        </ShowingUpMotionContainer>
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

  return {
    props: {
      movieList,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}
