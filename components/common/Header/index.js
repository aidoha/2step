import LogoIcon from '../../icons/logo'
import {
  Wrap,
  Layout,
  NavWrap,
  Nav,
  NavItem,
  ButtonBlock,
  LeftSide,
  LogoWrap,
  ProfileItems,
  ProfileItem,
  ProfileItemText
} from './style'
import UserIcon from '../../icons/user'

const Header = props => {
  return (
    <Wrap bg={props.bg}>
      <Layout>
        <LeftSide>
          <a href="/">
            <LogoWrap>
              2step.me
            </LogoWrap>
          </a>
          <NavWrap>
            <Nav>
              <a href="https://finance.2step.me/">
                <NavItem
                  section={props.section === 1}
                  color={props.section === 1 && '#4C8869'}>
                  Финансы
                </NavItem>
              </a>
              <a href="/">
                <NavItem
                  href="/"
                  section={props.section === 2}
                  color={props.section === 2 && '#F18E67'}>
                  Магазин
                </NavItem>
              </a>
            </Nav>
          </NavWrap>
        </LeftSide>
      </Layout>
    </Wrap>
  )
}

export default Header
