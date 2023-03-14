import { SubtitleContainer } from './styles'

interface Props {
  subtitle: string
}

export function SubtitleDefault({ subtitle }: Props) {
  return (
    <SubtitleContainer>
      <h2>{subtitle}</h2>
    </SubtitleContainer>
  )
}
