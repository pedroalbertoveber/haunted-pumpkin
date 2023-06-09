import { styled } from '../../styles'

export const FooterContainer = styled('footer', {
  width: '100%',
  padding: '2rem 0',
  borderTop: '1px solid $gray-900',
  backgroundColor: '$dark-default',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '.container': {
    width: '100%',
    maxWidth: 1220,
    padding: '0 1rem',
    margin: '0 auto',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',

    'div p': {
      fontSize: '$lg',
      color: '$gray-500',

      strong: {
        color: '$red-600',
      },

      '@bpMd': {
        fontSize: '$sm',
      },
    },
  },
})

export const TMDBContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3rem',

  '@bpMd': {
    flexDirection: 'column',
  },

  div: {
    width: '50%',
  },

  '.imageContainer': {
    display: 'flex',
    justifyContent: 'flex-end',
    filter: 'saturate(0%)',
    width: '50%',

    img: {
      width: '50%',
      maxWidth: '200px',
      height: '150px',
    },

    '@bpMd': {
      width: '100%',
      justifyContent: 'center',

      img: {
        width: '60%',
        height: '100%',
        maxWidth: '250px',

        '@bpSm': {
          width: '80%',
        },
      },
    },
  },

  '.content': {
    display: 'block',
    width: '70%',
    lineHeight: 1.6,

    '@bpMd': {
      width: '100%',
      maxWidth: '400px',
      fontSize: '$sm',
      textAlign: 'center',

      '@bpSm': {
        width: '80%',
      },
    },
  },
})
