import { styled } from '..'

export const NotFoundContainer = styled('section', {
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
  minHeight: '60vh',

  '@bpMd': {
    flexDirection: 'column',
    alignItems: 'center',

    img: {
      maxWidth: '100%',
      maxHeight: 350,
      objectFit: 'cover',
    },
  },

  div: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    gap: '2rem',
    '@bpMd': {
      width: '100%',
      textAlign: 'center',
    },

    h1: {
      fontSize: '$3xl',
      '@bpMd': {
        fontSize: '$xl',
      },
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
