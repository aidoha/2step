import styled from 'react-emotion'

export const Input = styled.input``
export const Wrap = styled.div`
  position: relative;
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  ${props => props.top && `margin-top: ${props.top}`};
  ${props => props.bottom && `margin-bottom: ${props.bottom}`};
  ${props => props.left && `margin-left: ${props.left}`};
  ${props => props.right && `margin-right: ${props.right}`};
  & > input {
    border-radius: 5px;
    border: 1px solid #dfe0e1;
    width: 100%;
    height: 100%;
    outline: none;
    padding-left: 50px;
    box-sizing: border-box;
    font-size: 14px;
    &['placeholder'] {
      color: #dfe0e1;
    }
  }
`
export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 100%;
  position: absolute;
  border-right: 1px solid #dfe0e1;
  left: 0;
  top: 0;
`
