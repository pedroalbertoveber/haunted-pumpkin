import { MoviesContainer } from '@/styles/pages/movies'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonCardContainer } from './styles'

interface SkeletonRepeatProps {
  repeat: number
}

export function SkeletonCard({ repeat }: SkeletonRepeatProps) {
  return (
    <MoviesContainer>
      {Array(repeat)
        .fill(0)
        .map((_, index) => {
          return (
            <SkeletonCardContainer key={index}>
              <Skeleton height={320} />
              <div className="container">
                <Skeleton height={18} />
                <Skeleton height={14} />
              </div>
            </SkeletonCardContainer>
          )
        })}
    </MoviesContainer>
  )
}
