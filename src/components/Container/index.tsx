import { ContainerDefault } from './styles'

interface ContainerProps {
  children: any
}

export function Container({ children }: ContainerProps) {
  return <ContainerDefault>{children}</ContainerDefault>
}
