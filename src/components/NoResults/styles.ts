import { styled } from '@/styles'

export const NoResultsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',

  h1: {
    fontSize: '$2xl',
    lineHeight: 1.3,
    textAlign: 'left',
  },

  img: {
    minWidth: '40%',
    height: '100%',
  },

  '@bpMd': {
    flexDirection: 'column-reverse',
    marginTop: '2rem',

    img: {
      maxWidth: '90%',
    },

    h1: {
      fontSize: '$xl',
    },
  },
})

export const LinkContainer = styled('div', {
  margin: '3rem 0 1rem',
  fontSize: '$lg',

  'a:hover': {
    transition: 'color .2s',
    color: '$red-600',
  },
})
