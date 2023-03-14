import { styled } from '..'

export const PageContainer = styled('div', {
  paddingTop: '2rem',
  marginBottom: '5rem',
})

export const MoviesContainer = styled('section', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '1.5rem',
})

export const Pagination = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '2rem',

  button: {
    color: '$gray-500',
    transition: 'all .2s',
    backgroundColor: '$dark-default',
    lineHeight: 0,
  },

  'button:not(:disabled):hover': {
    color: '$red-500',
  },

  'button:disabled': {
    opacity: 0,
    cursor: 'unset',
  },
})
