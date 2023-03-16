import { styled } from '@/styles'

export const SearchFieldContainer = styled('form', {
  marginBottom: '2rem',
  width: '50%',
  padding: '.5rem 1rem',

  display: 'flex',
  alignItems: 'center',
  backgroundColor: '$gray-900',

  borderRadius: 20,

  input: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'inherit',
    border: 0,
    color: '$gray-300',
    fontSize: '$lg',

    '&:focus': {
      outline: 0,
    },

    '&::placeholder': {
      color: '$gray-500',
    },
  },

  button: {
    border: 0,
    backgroundColor: 'inherit',
    color: '$gray-500',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '&:hover': {
      color: '$gray-300',
      transition: 'color 0.2s',
    },
  },

  'button:focus': {
    outline: 0,
    color: '$red-500',
  },
  'button:active': {
    color: '$red-600',
  },
})
