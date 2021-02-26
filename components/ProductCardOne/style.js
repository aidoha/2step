import styled from 'react-emotion'

export const Wrap = styled.div`
  width: 25%;
`
export const Item = styled.a`
  display: block;
  width: 200px;
  ${props => props.withShadow && 'box-shadow: 0px 0px 15px rgba(0,0,0,0.04)'};
  margin-left: ${props => props.left || '40px'};
  ${props => props.right && `margin-right: ${props.right}`};
  margin-top: 15px;
  margin-bottom: 15px;
  overflow: hidden;
  cursor: pointer;
  opacity: ${props => (props.loading ? '0.5' : '1')};
  background: #fff;
  padding: 15px 0;
  transition: box-shadow 0.2s;
  ${props => props.catalog && '&:nth-child(3n + 3){margin-right: 0;}'}
  ${props => props.catalog && '&:hover{box-shadow: 0px 10px 15px rgba(0,0,0,0.05);}'}
  border: 1px solid #EEEEEF;
  box-sizing: border-box;
  border-radius: 5px;
`
export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 220px;
  & > img {
    width: 90%;
    height: 90%;
    object-fit: contain;
  }
`
export const Title = styled.div`
  font-family: Open Sans;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  font-weight: 400;
  line-height: 20px;
  height: 45px;
  font-size: 14px;
  color: #282f36;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 5px;
  margin-bottom: 5px;
  overflow: hidden;
`
export const PriceBlock = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid #EEEEEF;

  padding: 10px 16px 0px;
  flex-direction: column;
`
export const Price = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 15px;
  color: #282F36;
`
export const InstPrice = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 15px;
  color: #93979B;
  margin-top: 10px;
`
export const RateText= styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #93979B;
  margin-left: 5px;
`
export const RateWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 14px;
`