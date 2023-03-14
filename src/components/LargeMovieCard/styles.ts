import { styled } from '@stitches/react'

export const LargeMovieContainer = styled('div', {
  position: 'relative',
  cursor: 'pointer',
  overflow: 'hidden',
  width: 350,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
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

    span: {
      color: '$gray-500',
      display: 'block',
      marginBottom: '0.5rem',
    },

    h4: {
      fontSize: '$xl',
    },
  },
})
