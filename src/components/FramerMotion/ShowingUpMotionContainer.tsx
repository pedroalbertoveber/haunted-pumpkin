import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface Props {
  children: ReactNode
}

export function ShowingUpMotionContainer({ children }: Props) {
  return (
    <motion.div
      initial="offscreen"
      animate="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      {children}
    </motion.div>
  )
}
