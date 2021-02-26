import styled from 'react-emotion'

export const Wrap = styled.div`
  height: 100%;
  width: 70%;
`
export const Box = styled.div`
  padding: 10px 30px;
  background: #ffffff;
  border-radius: 10px;
`
export const Title = styled.h1`
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 30px;
  color: #282f36;
  text-align: ${props => props.center && 'center'};
`
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`
export const Left = styled.div`
  width: 50%;
`
export const Right = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Text = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-weight: ${props => props.bold && '600'};
  line-height: normal;
  font-size: ${props => props.sixteen && '14px'};
  font-size: ${props => props.eightteen && '15px'};
  color: #282f36;
  width: ${props => props.short && '75%'};
`
export const Middle = styled.div``
export const InstructionList = styled.div``
export const InstructionItem = styled.div``
export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`
export const TypeCredit = styled.li`
  list-style: none;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 400;
  line-height: 5px;
  font-size: 14px;
  color: #282f36;
  position: relative;
  left: -40px;
`
export const ImageWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${props => props.middle && 'center'};
  align-items: ${props => props.middle && 'center'};
`
export const ListWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`
export const BeginShopping = styled.div`
  background: #F18E67;
  border-radius: 20px;
  width: 150px;
  height: 40px;
  paddin: 5px 10px;
  color: #ffffff;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SaleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
`
