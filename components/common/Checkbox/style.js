import styled from 'react-emotion'

export const Label = styled.label`
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 14px;
  height: 20px;
  display: flex;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 90;

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  &:hover input ~ div {
    background-color: #eee;
  }

  & input:checked ~ div {

    border: 1px solid #77BEFF;
  }

  & input:checked ~ div:after {
    display: block;
  }
`

export const Input = styled.input``

export const Checkmark = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #fff;
  border-radius: 3px;
  border: 1px solid #DFE0E1;
  box-sizing: border-box;
  &:after {
    content: '';
    display: none;
    position: absolute;
    left: 2px;
    top: 2px;
    width: 12px;
    height: 12px;
    border: 1px solid #77BEFF;
    background: #77BEFF;
    border-radius: 2px;
  }
`
