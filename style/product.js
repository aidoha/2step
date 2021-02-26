import styled from 'react-emotion'

export const ProductMain = styled.div`
  width: 100%;
  display: flex;
  background: #fff;
  padding: 45px;
  box-sizing: border-box;
  border-radius: 10px;
  max-width: 1150px;
  min-width: 1150px;
  margin: 0 auto;
`
export const BlueBox = styled.div`
  background: #77BEFF;
  width: 5px;
  height: 5px;
  box-shadow: 0px 5px 20px rgba(40, 47, 54, 0.05);
`
export const Icon = styled.div`
  & > svg {
    width: 25px;
    height: 20px;
  }
`