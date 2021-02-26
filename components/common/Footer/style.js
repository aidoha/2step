import styled from 'react-emotion'

export const Wrap = styled.div`
  background: ${props => props.bg};
  padding-top: 30px;
  width: 100%;
  min-width: 1150px;
  color: #282F36;
`
export const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 100px;
`
export const Block = styled.div``
export const Bold = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  font-size: 14px;
  margin-bottom: 25px;
  ${props => props.noMargin && 'margin-bottom: 0px'};
`
export const Icon = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Light = styled.a`
  font-family: Open Sans;
  display: block;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 14px;
  margin-bottom: 15px;
  cursor: pointer;
  color: #282F36;
  ${props => props.blue && 'color: #77BEFF'};
`
export const Foot = styled.div`
  display: flex;
  padding-top: 12px;
  margin: 30px 100px;
  justify-content: space-between;
  border-top: 1px solid #DFE0E1;
`
export const Corp = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 25px;
  color: #93979B;
`
export const Guide = styled.div`
  display: flex;
`
export const WhiteBlock = styled.div`
  background: #FFFFFF;
  border: 1px solid #EEEEEF;
  box-sizing: border-box;
  border-radius: 5px;
  width: 355px;
  display: flex;
  justify-content: space-between;
  padding: 14px 14px 14px 0px;
`
export const Image = styled.div``
export const Social = styled.div`
  display: flex;
  margin-left: 50px;
  & > svg {
    margin-right: 20px;
    cursor: pointer;
  }
`
