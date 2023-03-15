import Skeleton from 'react-loading-skeleton'
import { SkeletonContainer } from './styles'

export function SkeletonScreen() {
  return (
    <SkeletonContainer>
      <div className="imageContainer">
        <Skeleton height={500} />
      </div>
      <div className="contentContainer">
        <div className="runTimeAndReleaseData">
          <Skeleton
            count={2}
            height={'1rem'}
            style={{ marginBottom: '0.5rem' }}
          />
        </div>
        <div className="genreContainer">
          <div className="genreInfo">
            <Skeleton
              count={3}
              containerClassName={'genreContainer'}
              height={'2rem'}
            />
          </div>
        </div>
        <div className="overviewContent">
          <Skeleton
            count={6}
            height={'1.5rem'}
            style={{ marginBottom: '0.5rem' }}
          />
        </div>
      </div>
    </SkeletonContainer>
  )
}
