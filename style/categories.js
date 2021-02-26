import styled from 'react-emotion'

export const LeftContainer = styled.div`
  min-width: 263px;
  max-width: 263px;
  height: max-content;
`
export const RightContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const SubcategoryName = styled.a`
  display: block;
  font-family: Open Sans;
  font-style: normal;
  font-weight: ${props => props.weight};
  font-size: ${props => props.size};
  line-height: ${props => props.lh};
  color: #282F36;
  cursor: pointer;
  &:hover{
    color: #F18E67;
  }
`
export const Line = styled.div`
  border: 1px solid #F6F7F7;
`
export const PopularItem = styled.a`
  background: #FFFFFF;
  border: 1px solid #EEEEEF;
  box-sizing: border-box;
  box-shadow: 2px 1px 10px rgba(109, 139, 191, 0.05);
  border-radius: 5px;
  padding: 30px;
  width: 210px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  cursor: pointer;
  &:hover{
    border: 1px solid #77BEFF;
  }
`
export const PopularItemImage = styled.div`
  width: 120px;
  height: 110px;
  & > img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`
