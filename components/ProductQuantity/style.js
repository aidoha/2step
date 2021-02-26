import styled from 'react-emotion'

export const Quantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #EEEEEF;
  box-sizing: border-box;
  width: 70px;
`
export const QuantityChange = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  background: #FFFFFF;
  border: 1px solid #F18E67;
  color: #F18E67;
  box-sizing: border-box;
  box-shadow: 2px 1px 10px rgba(109, 139, 191, 0.05);
  border-radius: ${props => props.radius};
  cursor: pointer;
  &:hover{
    background: #F18E67;
    color: #FFFFFF;
    transition: 0.5s;
  }
`