import { ButtonContainer } from './styles'
import { FaGithub } from 'react-icons/fa'

export function SignUpButton() {
  return (
    <ButtonContainer>
      <FaGithub size={32} />
      Sign Up for free
    </ButtonContainer>
  )
}
