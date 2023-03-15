import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$dark-default',
    color: '$gray-100',
  },

  'body, input, textarea,button': {
    fontFamily: '$default',
    fontWeight: '$regular',
  },

  ul: {
    listStyle: 'none',
  },

  button: {
    cursor: 'pointer',
    border: 'none',
    lineHeight: '0',
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
})
