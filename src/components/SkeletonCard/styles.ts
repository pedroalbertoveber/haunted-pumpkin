import { styled } from '@/styles'

export const SkeletonCardContainer = styled('div', {
  width: '100%',
  maxWidth: 'calc((1220px - 2rem - 6rem) / 5)',
  border: '1px solid $gray-700',
  borderRadius: 8,

  '@bpSm': {
    width: '100%',
    maxWidth: 'none',
  },

  '.container': {
    display: 'flex',
    flexDirection: 'column',

    padding: '.5rem',
    gap: '0.5rem',

    width: '100%',
    borderRadius: '0 0 8px 8px',
    backgroundColor: '$gray-800',
  },
})
