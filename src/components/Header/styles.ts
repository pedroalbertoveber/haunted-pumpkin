import { styled } from '@/styles'

export const HeaderContainer = styled('header', {
  height: '6rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$dark-default',

  borderBottom: '1px solid $gray-900',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 2,

  div: {
    width: '100%',
    maxWidth: 1220,
    padding: '0 1rem',
    margin: '0 auto',

    display: 'flex',
    alignItems: 'center',

    img: {
      objectFit: 'cover',
      marginBottom: '5px',
    },

    button: {
      marginLeft: 'auto',
    },
  },
})

export const NavContainer = styled('nav', {
  marginLeft: '4rem',
  height: '6rem',
  marginBottom: '3px',

  ul: {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    height: '6rem',

    li: {
      height: '6rem',

      display: 'flex',
      alignItems: 'center',

      borderBottom: '3px solid $dark-default',
      padding: '0 1.5rem',
      marginRight: '1rem',
      fontSize: '$md',
      color: '$gray-600',
      transition: 'all .2s',

      '&:last-child()': {
        marginRigth: 0,
      },

      '&:hover': {
        cursor: 'pointer',
        borderBottomColor: 'red',
      },
    },
  },
})
