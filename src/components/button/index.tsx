import { ReactNode } from "react"
import { StyledButton } from "./styles"

interface ButtonProps {
  children: ReactNode
}

const Button = ({ children }: ButtonProps) => {
  return <StyledButton>{children}</StyledButton>
}

export default Button
