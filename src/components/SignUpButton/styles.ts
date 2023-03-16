import { styled } from '@/styles'

export const ButtonContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  padding: '.5rem 2rem',
  fontSize: '$lg',
  borderRadius: 40,
  backgroundColor: '$red-500',
  color: '$gray-100',

  '&:not(:disabled):hover': {
    backgroundColor: '$red-600',
    transition: 'background .2s',
  },

  '@bpMd': {
    fontSize: '$md',
  },
})
