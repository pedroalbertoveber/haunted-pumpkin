import { styled } from '..'

export const MovieInfoContainer = styled('section', {
  paddingTop: '2rem',
  marginBottom: '3rem',

  '.info': {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    backgroundColor: '$gray-900',
    borderRadius: '0 8px 8px 0',

    '@bpMd': {
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: '0 0 8px 8px',
    },

    img: {
      width: '60%',
      heigth: '100%',
      objectFit: 'cover',

      '@bpMd': {
        width: '100%',
      },
    },
  },

  '.goBack': {
    marginTop: '2rem',
    color: '$gray-500',
    cursor: 'pointer',
    display: 'inline-block',
    transition: 'all .2s',

    '&:hover': {
      color: '$red-600',
    },
  },
})

export const MovieDetails = styled('ul', {
  padding: '1rem',
  paddingLeft: '0',
  '@bpMd': {
    padding: '1rem',
    paddingTop: 0,
  },

  '.voteAverage': {
    fontSize: '$sm',
    color: '$gray-600',
    display: 'block',
    marginBottom: '.5rem',
  },

  '.runtime': {
    fontSize: '$sm',
    color: '$gray-600',
    display: 'block',
    marginBottom: '1rem',
  },

  p: {
    fontSize: '$md',
    color: '$gray-300',
    lineHeight: 1.4,
    textAlign: 'justify',
    marginBottom: '1rem',
  },
})

export const ProductionCompanies = styled('ul', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: '0.5rem',
  marginTop: '2rem',

  li: {
    fontSize: '$sm',
    color: '$gray-500',
    display: 'block',
    width: 'calc(50% - 0.25rem)',
  },
})

export const GenresContainer = styled('div', {
  listStyle: 'none',
  width: '100%',
  marginBottom: '1rem',

  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  li: {
    padding: '.5rem 1rem',
    backgroundColor: '$gray-800',
    fontSize: '$sm',
    border: '1px solid $gray-500',
    color: '$gray-500',
  },
})
