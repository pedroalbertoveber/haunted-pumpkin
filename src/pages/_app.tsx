import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { SkeletonTheme } from 'react-loading-skeleton'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SkeletonTheme
        baseColor="#242426"
        highlightColor="#181818"
        borderRadius={8}
      >
        <Header />
        <Container>
          <Component {...pageProps} />
        </Container>
        <Footer />
      </SkeletonTheme>
    </>
  )
}
