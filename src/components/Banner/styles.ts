import { styled } from '@/styles'

export const BannerContainer = styled('section', {
  width: '100%',
  display: 'flex',
  marginTop: '6rem',
  marginBottom: '5rem',

  '@bpLg': {
    justifyContent: 'center',
  },
})

export const ImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@bpLg': {
    display: 'none',
  },
})

export const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',

  '@bpLg': {
    alignItems: 'center',
  },

  h1: {
    fontSize: '$4xl',
    strong: {
      color: '$red-500',
    },
    marginBottom: '2rem',

    '@bpLg': {
      textAlign: 'center',
    },

    '@bpMd': {
      fontSize: '$3xl',
    },

    '@bpSm': {
      fontSize: '$2xl',
    },
  },

  p: {
    fontSize: '$xl',
    lineHeight: 1.6,

    '@bpLg': {
      textAlign: 'center',
      fontSize: '$lg',
    },

    '@bpMd': {
      fontSize: '$3md',
    },

    '@bpSm': {
      fontSize: '$md',
    },
  },

  button: {
    marginTop: '4rem',
  },
})
