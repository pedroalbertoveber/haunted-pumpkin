import { styled } from '@/styles'

export const SmallMovieContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  width: '100%',
  maxWidth: 'calc(((1220px - 2rem) - 6.5rem) / 5)',
  minWidth: 'calc(((1220px - 2rem) - 6.5rem) / 5)',

  img: {
    objectFit: 'cover',
    width: '100%',
    height: '18rem',
  },

  '&:hover > div > h4': {
    color: '$red-500',
  },

  '&:hover > header': {
    transform: 'translateX(0%)',
  },
})

export const InfoContainer = styled('div', {
  backgroundColor: '$gray-900',
  padding: '.5rem',

  p: {
    fontSize: '$sm',
    color: '$gray-600',
  },

  h4: {
    fontSize: '$lg',
    color: '$gray-100',
    transition: 'color .2s',
    margin: '0.5rem 0',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
})

export const RatingContainer = styled('header', {
  position: 'absolute',
  top: 0,
  left: 0,
  right: '0.5rem',
  height: '3rem',
  zIndex: 1,
  background: 'linear-gradient(to right, #181818 0%, transparent 100%)',
  paddingLeft: '1rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',

  '.container': {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    width: '100%',

    '.voteAverage': {
      fontSize: '$sm',
      color: '$gray-500',
      marginBottom: 2,
    },
  },

  // Animation
  transform: 'translateX(-100%)',
  transition: 'transform 0.2s ease-in-out',
})
