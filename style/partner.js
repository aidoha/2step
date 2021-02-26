import styled from 'react-emotion'

export const LogoBlock = styled.div`
  width: 100%;
  min-height: 100%;  
  background: #F6F7F7;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Image = styled.div`
  width: 300px;
  height: 200px;
  & > img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`
export const Title = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 20px;
  color: #282F36;
`
export const Wrap = styled.div`
  min-width: 1150px;
  max-width: 1150px;
  margin: 0 auto;
  padding-top: 30px;
`
export const Row = styled.div`
  display: flex;
  justify-content: ${props => props.jc || 'flex-start'};
  margin-top: ${props => props.margin || '0'};
  padding-bottom: 20px;
  border-bottom: 1px solid #EEEEEF;
`
export const Block = styled.div``
export const Text = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 138%;
  color: #282F36;
  margin-top: 5px;
  ${props => props.gray && 'color: #BEC0C3'};
`
export const Description = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #282F36;
  margin-top: 10px;
  max-width: 600px;
`
export const Line = styled.div`
  border: 5px solid #F8F8F8;
  margin-top: 30px; 
`
export const Popular = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
`
export const ItemWrap = styled.a`
  margin-top: 10px;
  cursor: pointer;
  margin-left: 40px;
  display: block;
  &:first-child{
    margin-left: 0;
  }
`
export const Item = styled.div`
  background: #FFFFFF;
  box-sizing: border-box;
  padding: 0 5px;
  border-radius: 5px;
  height: 220px;
  width: 220px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`
export const ImageWrap = styled.div`
  & > img {
    width: 100%;
    height: 100px;
    object-fit: contain;
  };
`
export const ProductName = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #282F36;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
export const Price = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 15px;
  color: #282F36;
  margin-top: 7px;
`
export const Container = styled.div`
  display: flex;
  overflow-x: auto;
  padding-bottom: 40px;
  margin-bottom: -30px;
  justify-content: flex-start;
  scroll-behavior: smooth;
`
export const ScrollWrap = styled.div`
  overflow: hidden;
  box-sizing: border-box;
`