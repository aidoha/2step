import styled from 'react-emotion'

export const Content = styled.div`
  display: flex;
  margin-top: 30px;
`

export const LeftContainer = styled.div`
  min-width: 263px;
  max-width: 263px;
  height: max-content;
`

export const RightContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100%;
`

export const SortBlock = styled.div`
  width: 100%;
  height: 59px;
  background: #fff;
  margin-left: 30px;
  display: flex;
  padding: 0 25px;
  box-sizing: border-box;
  border-radius: 10px;
  align-items: center;
`

export const SortLabel = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #282F36;
  margin-right: 15px;
`
export const SortByText = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #77BEFF;
  text-transform: lowercase;
  margin-left: 20px;
  cursor: pointer;
  ${props => props.active && 'color: #282F36'};
`
export const ProductListWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`

export const CatalogName = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  margin-top: 30px;
`

export const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`

export const SearchBlock = styled.div`
  position: relative;
`

export const SearchResult = styled.div`
  position: absolute;
  width: 100%;
  border-radius: 7px;
  overflow-y: scroll;
  display: ${props => (props.active && 'block') || 'none'};
  height: 300px;
  z-index: 99;
  margin-top: 5px;
`

export const SearchResultItem = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  width: 100%;
  padding: 5px 15px;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    color: #F18E67;
  }
`
export const SearchResultItemLeft = styled.div`
  display: flex;
  align-items: center;
`

export const SearchResultItemImg = styled.div`
  width: 50px;
  height: 50px;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const SearchResultItemHeading = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-left: 15px;
`

export const SearchResultItemPrice = styled.div`
  color: #F18E67;
  font-family: Roboto Slab;
  font-size: 16px;
  font-weight: bold;
`
