import styled from 'react-emotion'

export const PaymentWayBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 420px;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const PaymentWayItem = styled.div`
  background: #FFFFFF;
  border: 1px solid #DFE0E1;
  box-sizing: border-box;
  border-radius: 5px;
  width: 48%;
  padding: 15px 20px;
  cursor: pointer;
  max-height: 180px;
  min-height: 145px;
  margin-top: 10px;
  ${props => props.active && 'border: 1px solid #77BEFF'};
`
export const InstallmentBox = styled.div`
  background: #FFFFFF;
  border: 1px solid #DFE0E1;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 20px 25px;
  margin-top: 10px;
  width: 415px;
`