import { styled } from '@/styles'

export const SkeletonContainer = styled('div', {
  display: 'flex',
  backgroundColor: '$gray-800',
  borderRadius: 8,

  '.imageContainer': {
    width: '60%',
  },

  '.contentContainer': {
    width: '40%',
    padding: '1rem',
  },

  '.runTimeAndReleaseData': {
    height: '0.875rem',
    marginBottom: '3rem',
  },

  '.genreContainer': {
    display: 'flex',
    gap: '1rem',
    width: '100%',
    height: '1.5rem',
    marginBottom: '2rem',
  },

  '.genreInfo': {
    width: '100%',
    height: '1.5rem',
  },
})
