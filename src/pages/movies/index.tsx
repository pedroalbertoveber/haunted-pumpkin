import { GetStaticProps } from 'next'

export default function Redirect() {
  return <></>
}

export const getStaticProps: GetStaticProps = () => {
  return {
    redirect: {
      destination: '/movies/1',
      permanent: false,
    },
  }
}
