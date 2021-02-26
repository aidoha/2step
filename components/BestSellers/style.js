import styled from 'react-emotion'

export const Wrap = styled.div`
  max-height: 320px;

  margin-top: 60px;
`
export const Right = styled.div`
  position: relative;
  width: 100%;
  & .slick-slider {
    height: 100%;
  }

  & .slick-list {
    height: 100%;
  }

  & .slick-track {
    height: 100%;
  }

  & .slick-slide,
  .slick-active,
  .slick-current {
    height: 100%;
  }

  & .slick-slide > div {
    height: 100%;
  }
`
export const SliderControls = styled.div`
  position: absolute;
  ${props => props.prev && 'left: -40px'};
  ${props => props.prev && 'top: 50%'};
  ${props => props.next && 'right: -30px'};
  ${props => props.next && 'top: 55%'};
  transform: translate(0, -50%);
  cursor: pointer;
  z-index: 8;
`
export const SliderWrap = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  & .slick-dots {
    display: none;
  }
`
export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: ${props => props.stretch && 'stretch'};
`
export const TextBlue = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: right;
  color: #77BEFF;
  cursor: pointer;
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
export const ItemWrap = styled.div`
  margin-top: 10px;
  cursor: pointer;
  margin-left: 20px;
  &:first-child{
    margin-left: 0;
  }
`
export const Item = styled.div`
  background: #FFFFFF;
  border: 1px solid #EEEEEF;
  box-sizing: border-box;
  padding: 0 5px;
  border-radius: 5px;
  height: 220px;
  width: 220px;
  display: flex;
  justify-content: center;
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
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  color: #282F36;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
export const CategoryName = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 15px;
  text-align: center;
  color: #BEC0C3;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`