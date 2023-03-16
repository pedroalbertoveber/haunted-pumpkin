import { styled } from '..'

export const HomeContainer = styled('main', {
  width: '100%',
  minHeight: 'calc(100vh - 6rem)',
  padding: '1rem 0 3rem 0',
})

export const MainMoviesContainer = styled('section', {
  display: 'flex',
  position: 'relative',

  '.shadowLeft': {
    width: 60,
    position: 'absolute',
    left: 0,
    bottom: 0,
    top: 0,
    zIndex: 1,

    background: 'linear-gradient(to right, $dark-default 0%, transparent 100%)',
  },

  '.shadowRight': {
    width: 60,
    position: 'absolute',
    right: 0,
    bottom: 0,
    top: 0,
    zIndex: 1,

    background: 'linear-gradient(to left, $dark-default 0%, transparent 100%)',
  },

  '.movies': {
    display: 'flex',
  },
})
