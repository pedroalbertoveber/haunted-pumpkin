import { styled } from '..'

export const NotFoundContainer = styled('section', {
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
  minHeight: '60vh',

  div: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    gap: '2rem',

    h1: {
      fontSize: '$3xl',
    },

    a: {
      fontSize: '$lg',
      cursor: 'pointer',

      '&:hover': {
        color: '$red-600',
        transition: 'color 0.2s',
      },
    },
  },
})
