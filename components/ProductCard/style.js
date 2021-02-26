import styled from 'react-emotion'

export const Wrap = styled.div`
  margin-top: 50px;
`
export const Heading = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 50px;
  color: #282F36;
  user-select: none;
`
export const ItemsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`
export const Item = styled.a`
  width: 17%;
  margin-top: 50px;
  display: block;
  cursor: pointer;

`
export const ProductName = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #282F36;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 10px;
`
export const ImageWrap = styled.div`
  & > img {
    object-fit: contain;
    width: 100%;
    height: 100px;
  }
`
export const Price = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 15px;
  color: #282F36;
  margin-top: 10px;
`