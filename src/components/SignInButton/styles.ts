import { styled } from '@/styles'

export const ButtonContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',

  padding: '0.5rem 1.5rem',
  gap: '1rem',
  fontSize: '$md',
  color: '$gray-400',
  borderRadius: 20,
  backgroundColor: '$red-500',

  '&:hover': {
    backgroundColor: '$red-600',
    color: '$gray-100',
    transition: 'all .2s',
  },
})
