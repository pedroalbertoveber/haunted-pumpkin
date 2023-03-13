import { createStitches } from '@stitches/react'

export const {
  getCssText,
  styled,
  globalCss,
  css,
  config,
  keyframes,
  createTheme,
  theme,
} = createStitches({
  theme: {
    colors: {
      black: '#000000',
      white: '#FFFFFF',

      'dark-default': '#1A1A1A',
      'red-500': '#F91C06',
      'red-600': '#D12312',

      'gray-100': '#E0E0E6',
      'gray-500': '#B5B5B9',
      'gray-600': '#868690',
      'gray-700': '#676771',
      'gray-800': '#434347',
      'gray-900': '#242426',
    },
    fontSizes: {
      sm: '0.875rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '1.75rem',
      '3xl': '2rem',
      '5xl': '5rem',
    },
    fontWeights: {
      regular: 400,
      bold: 700,
    },
    fonts: {
      default: 'Montserrat',
    },
  },
})
