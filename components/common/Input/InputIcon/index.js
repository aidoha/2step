import { Input, Wrap, IconWrap } from './style'
import UserIcon from '../../../icons/user'
import PasswordIcon from '../../../icons/lock'
import InputMask from 'react-input-mask'

const InputIcon = props => {
  return (
    <Wrap
      width={props.width}
      height={props.height}
      top={props.top}
      bottom={props.bottom}
      left={props.left}
      right={props.right}>
      <IconWrap>
        {props.icon === 'user' && <UserIcon />}
        {props.icon === 'password' && <PasswordIcon />}
      </IconWrap>
      {props.type === 'phone' ? (
        <InputMask
          mask="+7(999) 999 99 99"
          maskChar=" "
          onChange={props.onChange}
          placeholder={props.placeholder}
        />
      ) : (
        <Input
          type={props.type}
          onChange={props.onChange}
          placeholder={props.placeholder}
        />
      )}
    </Wrap>
  )
}

export default InputIcon
