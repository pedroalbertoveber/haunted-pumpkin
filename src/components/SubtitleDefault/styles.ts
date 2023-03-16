import { styled } from '@/styles'

export const SubtitleContainer = styled('div', {
  padding: '1rem 0',
  marginBottom: '2rem',

  h2: {
    fontSize: '$xl',
    color: '$gray-100',

    '@bpMd': {
      fontSize: '$lg',
      lineHeight: 1.6,
    },
  },
})
