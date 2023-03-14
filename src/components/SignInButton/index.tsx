import { FaGithub } from 'react-icons/fa'
import { ButtonContainer } from './styles'

export function SignInButton() {
  return (
    <ButtonContainer type="button">
      <FaGithub size={24} />
      Sign In
    </ButtonContainer>
  )
}
