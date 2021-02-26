import styled from "react-emotion";

export const Wrap = styled.div`
  margin-top: 70px;
  &:first-child {
    margin-top: 0;
  }
`;
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
`;
export const SliderControls = styled.div`
  position: absolute;
  ${props => props.prev && "left: -40px"};
  ${props => props.prev && "top: 50%"};
  ${props => props.next && "right: -30px"};
  ${props => props.next && "top: 55%"};
  transform: translate(0, -50%);
  cursor: pointer;
  z-index: 8;
`;
export const SliderWrap = styled.div`
  width: 880px;
  height: 100%;
  overflow: hidden;
  position: relative;
  & .slick-dots {
    display: none;
  }
`;
export const ItemWrap = styled.a`
  margin-top: 10px;
  cursor: pointer;
  margin-left: 20px;
  height: 180px;
  width: 180px;
  display: block;
`;
export const Item = styled.div`
  background: #ffffff;
  box-sizing: border-box;
  padding: 0 5px;
  border-radius: 5px;
  height: 180px;
  width: 180px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
export const ImageWrap = styled.div`
  & > img {
    width: 100%;
    height: 100px;
    object-fit: contain;
  }
`;
export const ProductName = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #282f36;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const Price = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 15px;
  color: #282f36;
`;
