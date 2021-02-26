import { ButtonWrap } from './style'

const Button = props => {
  return <ButtonWrap {...props}>{props.children}</ButtonWrap>
}

export default Button
