import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cardVariants, cardVariantsMainMenu } from '@/lib/framer-motion'

interface Props {
  children: ReactNode
  movieCardSize: 'large' | 'small'
}

export function AnimatedMovieCard({
  children,
  movieCardSize = 'small',
}: Props) {
  return (
    <motion.div
      variants={movieCardSize === 'small' ? cardVariants : cardVariantsMainMenu}
    >
      {children}
    </motion.div>
  )
}
