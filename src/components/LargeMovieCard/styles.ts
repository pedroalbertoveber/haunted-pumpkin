import { styled } from '@stitches/react'

export const LargeMovieContainer = styled('div', {
  position: 'relative',
  cursor: 'grab',
  overflow: 'hidden',
  width: 350,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  '&:active': {
    cursor: 'grabbing',
  },

  '&:hover > footer': {
    transform: 'translateY(0)',
  },

  footer: {
    position: 'absolute',
    bottom: '0.5rem',
    left: '0.5rem',
    right: '0.5rem',
    borderRadius: '8px',

    /* Animation */
    transform: 'translateY(110%)',
    transition: 'all ease-in-out 0.2s',

    padding: '1rem',

    backgroundColor: 'rgba(0, 0, 0, 0.5)',

    h4: {
      fontSize: '$xl',
    },
  },
})

export const StarRating = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',

  '.voteAverage': {
    fontSize: '$sm',
    color: '$gray-500',
    marginBottom: 2,
  },
})
