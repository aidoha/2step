import styled from 'react-emotion'

export const Wrap = styled.div`
  margin-bottom: 20px;
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
  padding: 0 25px;
  box-sizing: border-box;
  color: #282f36;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  height: 59px;
  ${props => props.active && 'border-bottom: 1px solid #dcddde'};
`
export const Name = styled.div``
export const Description = styled.div`
  padding: ${props => (props.isOpen && '25px') || '0'} 25px 0;
  box-sizing: border-box;
  overflow-y: auto;
  transition: ${props =>
    !props.isOpen
      ? 'max-height .5s cubic-bezier(0, 1, 0, 1)'
      : 'max-height .5s'};

  max-height: ${props => (props.isOpen ? '100vh' : 0)};
`

export const Monthes = styled.div`
  display: flex;
`

export const Month = styled.div`
  width: 65px;
  line-height: 40px;
  font-size: 14px;
  cursor: pointer;
  color: #52585c;
  ${props => props.active && 'background: #ffe249'};
  border: 1px solid ${props => (props.active && '#edc804') || '#dfe0e1'};
  &:first-child {
    border-radius: 5px 0 0 5px;
  }
  &:last-child {
    border-radius: 0 5px 5px 0;
  }
  text-align: center;
`

export const CheckBoxes = styled.div`
  margin-top: 25px;
`
