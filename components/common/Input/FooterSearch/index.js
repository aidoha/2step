import SendArrow from '../../../icons/sendArrow'
import { Input, IconWrap } from './style'

const FooterSearch = props => {
  return (
    <Input>
      <input type="text" placeholder="Ваш E-mail" />
      <IconWrap>
        <SendArrow />
      </IconWrap>
    </Input>
  )
}

export default FooterSearch
