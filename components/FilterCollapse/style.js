import styled from 'react-emotion'

export const Wrap = styled.div`
  background: #fff;
  border-radius: 10px;
`
export const Collapse = styled.div``
export const Header = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  user-select: none;
  align-items: center;
  padding: 0;
  color: #282f36;
  font-weight: 600;
  font-size: 14px;
  box-sizing: border-box;
  height: 59px;
  border-top: 1px solid rgba(40, 47, 54, 0.08);
  margin-top: 15px;
`
export const Name = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #282F36;
`
export const Description = styled.div``
export const Content = styled.div`
  box-sizing: border-box;
  overflow-y: auto;
  transition: ${props =>
    !props.isOpen
      ? 'max-height .5s cubic-bezier(0, 1, 0, 1)'
      : 'max-height .5s'};
  max-height: ${props => (props.isOpen ? '100vh' : 0)};
`
export const ProductAmount = styled.div`
  color: #939699;
  font-size: 12px;
`
export const CheckboxWrap = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ToggleText = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #77BEFF;
  cursor: pointer;
`
