import styled from 'react-emotion'

export const Input = styled.div`
  width: 100%;
  border: 1px solid rgba(40, 47, 54, 0.15);
  border-radius: 7px;
  margin: 0px auto;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background: #ffffff;
  padding: 0px 0px 0px 15px;
  height: 50px;
  & > input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    font-size: 16px;
    color: rgba(40, 47, 54, 0.5);
    background: #ffffff;
    height: 40px;
  }
  & > svg {
    cursor: pointer;
  }
`

export const IconWrap = styled.div`
  background: #77BEFF;
  border-radius: 0px 7px 7px 0px;
  padding: 0px 15px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
