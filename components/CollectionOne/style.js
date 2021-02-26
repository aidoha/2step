import styled from 'react-emotion'

export const Wrap = styled.div``
export const Left = styled.div`
  width: 50%;
`
export const Right = styled.div`
  width: 50%;
  height: 300px;
  display: flex;
  justify-content: center;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
export const Label = styled.div`
  background: #3dc47e;
  border-radius: 3px;
  padding: 5px 10px;
  width: max-content;
  font-family: Roboto Slab;
  font-weight: bold;
  font-size: 18px;
  color: #ffffff;
`
export const Title = styled.div`
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: bold;
  line-height: 50px;
  font-size: 40px;
  color: #ffffff;
  margin-top: 17px;
`
export const PriceOld = styled.div`
  font-weight: 600;
  line-height: 70px;
  font-size: 24px;
  text-decoration-line: line-through;
  color: #ffffff;
`
export const PriceActual = styled.div`
  font-family: Roboto Slab;
  font-weight: bold;
  line-height: 70px;
  font-size: 55px;
  color: #feb200;
  margin-left: 7px;
`
export const PriceBlock = styled.div`
  display: flex;
  margin-top: 16px;
`

export const MainInfo = styled.div`
  display: flex;
  border-bottom: 1px solid #fff;
  padding-bottom: 25px;
`

export const ProductBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 110px;
`
export const Product = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 110px;
  padding-right: 20px;
  border-right: 1px solid #fff;
  height: 70px;
  &:last-child {
    border: none;
  }
`
export const ProductImage = styled.div`
  width: 60px;
  height: 60px;
  margin-right: 25px;
  & > img {
    width: 100%;
    object-fit: contain;
  }
`
export const ProductInfo = styled.div`
  width: 110px;
`
export const ProductTitle = styled.div`
  line-height: 20px;
  font-size: 14px;
  color: #ffffff;
`
export const ProductPrice = styled.div`
  font-weight: bold;
  line-height: 20px;
  font-size: 14px;
  color: #ffffff;
  margin-top: 5px;
`
