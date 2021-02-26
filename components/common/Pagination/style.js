import styled from 'react-emotion'

export const Wrap = styled.div`
  width: 100%;
  height: 58px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-left: 30px;
`

export const Page = styled.div`
  width: 29px;
  height: 29px;
  margin-right: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  color: #282f36;
  ${props => props.active && 'background: #EEEEEF'};
  &:hover {
    box-shadow: 0 0 0 1px #F18E67;
    color: #F18E67;
  }
`

export const Control = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 29px;
  margin-bottom: 5px;
  ${props => props.left && 'margin-right: 5px'};
  ${props => props.right && 'margin-left: 5px'};
`
