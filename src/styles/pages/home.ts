import { styled } from '..'

export const HomeContainer = styled('main', {
  width: '100%',
  maxWidth: 1220,
  margin: '0 auto',
  minHeight: 'calc(100vh - 6rem)',

  display: 'flex',
  padding: '3rem 1rem',
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
