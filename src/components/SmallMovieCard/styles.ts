import { styled } from '@/styles'

export const SmallMovieContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',

  width: 'calc(((1220px - 2rem) - 6.5rem) / 5)',

  img: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },

  '&:hover > div > h4': {
    color: '$red-500',
  },
})

export const InfoContainer = styled('div', {
  backgroundColor: '$gray-900',
  padding: '1rem .5rem',

  p: {
    fontSize: '$sm',
    color: '$gray-600',
  },

  h4: {
    fontSize: '$lg',
    color: '$gray-100',
    transition: 'color .2s',
    margin: '0.5rem 0',
  },
})
