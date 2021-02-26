import styled from 'react-emotion'

export const OrderBlock = styled.div`
  width: 355px;
  background: #FFFFFF;
  border: 1px solid #F2F2F2;
  box-sizing: border-box;
  box-shadow: 0px 5px 20px rgba(40, 47, 54, 0.05);
  border-radius: 5px;
  padding: 20px;
  position: sticky;
  top: 110px;
  left: 0;
`
export const Image = styled.div`
  width: 70px;
  height: 60px;
  & > img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`
export const PriceBlock = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #EEEEEF;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #282F36;
  padding-top: 10px;
  margin-top: 10px;
`