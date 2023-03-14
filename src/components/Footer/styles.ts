import { styled } from '../../styles'

export const FooterContainer = styled('footer', {
  width: '100%',
  padding: '2rem 0',
  borderTop: '1px solid $gray-900',

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
    },
  },
})

export const TMDBContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3rem',

  div: {
    width: '50%',
  },

  '.imageContainer': {
    display: 'flex',
    justifyContent: 'flex-end',
    filter: 'saturate(0%)',
  },

  '.content p': {
    display: 'block',
    width: '70%',
    lineHeight: 1.6,
  },
})
