import styled from 'react-emotion'

export const SearchResult = styled.div`
  position: absolute;
  width: 1150px;
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
  color: #282f36;
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
