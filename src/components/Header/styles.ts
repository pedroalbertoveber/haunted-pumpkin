import { styled } from '@/styles'

export const HeaderContainerDefault = styled('header', {
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

  '.mobile': {
    display: 'none',

    '@bpSm': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      paddingBottom: 1,

      position: 'relative',

      '.toggleMenu': {
        backgroundColor: '$gray-900',
        padding: '.5rem',
        lineHeight: 0,
        borderRadius: '50%',

        color: '$gray-100',

        transform: 'translate(-50%, -50%)',
        position: 'absolute',
        right: 10,
        top: '50%',

        '&:hover': {
          color: '$red-500',
          transition: 'color 0.2s',
        },

        '&:active': {
          color: '$red-600',
          transition: 'color 0.2s',
        },
      },
    },
  },

  '.desktop': {
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
    '@bpSm': {
      display: 'none',
    },
  },
  '@bpSm': {
    height: '5rem',
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

    '[aria-current]:not([aria-current="false"])': {
      fontWeight: 'bold',

      span: {
        color: '$gray-100',
      },
    },

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

export const NavMobile = styled('nav', {
  display: 'block',
  '@bpSm': {
    '&.closed': {
      transform: 'translateX(100%)',
    },
    transform: 'translateX(0%)',
    transition: 'all .4s ease-in-out',

    display: 'flex',
    position: 'fixed',
    right: 0,
    top: '5rem',
    zIndex: 2,
    height: 'calc(100vh - 5rem)',
    backgroundColor: '$gray-900',
    width: '70%',

    '.mobileNavContainer': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',

      gap: '1rem',
      width: '100%',

      '[aria-current]:not([aria-current="false"])': {
        color: '$gray-100',
      },

      a: {
        display: 'flex',
        width: '95%',
        padding: '1rem .5rem',
        fontSize: '$lg',
        color: '$gray-500',
        backgroundColor: '$gray-800',
        borderLeft: '3px solid $gray-500',

        '&:hover': {
          borderLeft: '3px solid $red-500',
          transition: 'border .2s',
        },

        '&:active': {
          borderLeft: '3px solid $red-600',
          transition: 'border .2s',
        },
      },
    },
  },
})
