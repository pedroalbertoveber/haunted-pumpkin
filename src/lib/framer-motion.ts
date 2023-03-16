import { Variants } from 'framer-motion'

export const cardVariants: Variants = {
  offscreen: {
    x: 25,
    opacity: 0.4,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      type: 'tween',
    },
  },
}

export const cardVariantsMainMenu: Variants = {
  offscreen: {
    y: 350,
    opacity: 0.4,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      type: 'tween',
      duration: 0.8,
    },
  },
}
