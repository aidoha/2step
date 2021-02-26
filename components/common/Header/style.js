import styled from 'react-emotion'

export const Wrap = styled.div`
  width: 100%;
  min-width: 1150px;
  height: 60px;
  background: ${props => props.bg || `#F18E67`};
  position: sticky;
  top: 0;
  left: 0;
  z-index: 991;
`

export const Layout = styled.div`
  width: 1150px;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavWrap = styled.div``

export const Nav = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
`

export const NavItem = styled.li`
  color: #fff;
  text-align: center;
  font-size: 16px;
  margin-right: 24px;
  cursor: pointer;
  border-radius: 5px;
  box-sizing: border-box;
  position: relative;
  height: 25px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  ${props =>
    props.section &&
    '&:after{content: "";display: block;position: absolute;bottom: 0;top: 25px;width: 100%;height: 2px;border-radius: 2px;background: #fff;}'}
`

export const ButtonBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 215px;
`

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
`

export const LogoWrap = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  margin-right: 50px;
  text-transform: uppercase;
`

export const ProfileItems = styled.div`
  display: flex;
`
export const ProfileItem = styled.div`
  display: flex;
  align-items: center;
`
export const ProfileItemText = styled.div`
  margin-left: 13px;
  color: #fff;
  font-family: Roboto Slab;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`
