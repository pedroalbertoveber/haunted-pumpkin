import { styled } from '@/styles'

export const BannerContainer = styled('section', {
  width: '100%',
  display: 'flex',
  marginTop: '6rem',
})

export const ImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',

  h1: {
    fontSize: '$4xl',
    strong: {
      color: '$red-500',
    },
    marginBottom: '2rem',
  },

  p: {
    fontSize: '$xl',
    lineHeight: 1.6,
  },

  button: {
    marginTop: '4rem',
  },
})
