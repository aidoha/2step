import styled from 'react-emotion'

export const Input = styled.input`
  width: ${props => props.width};
  height: ${props => props.height || '40px'};
  border-radius: 5px;
  box-sizing: border-box;
  padding: ${props => props.padding || '0 10px'};
  margin: ${props => props.margin};
  border: ${props => props.border || '1px solid rgba(40, 47, 54, 0.15)'};
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 14px;
  color: ${props => props.color || '#282f36'};
  background: ${props => props.bg};
  outline: none;
`
