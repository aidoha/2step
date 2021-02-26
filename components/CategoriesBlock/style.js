import styled from 'react-emotion';
import color from '../vars/color';

const { orange, gray2 } = color;

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  background: #fff;
  left: 0;
  top: 33px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.05);
`;

export const Left = styled.div`
  min-width: 263px;
  background: #fff;
  padding-bottom: 20px;
  box-sizing: border-box;
  position: relative;
`;
export const CatalogWrap = styled.div``;

export const CatalogHeader = styled.div`
  height: 59px;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #282f36;
  font-weight: bold;
  box-sizing: border-box;
  padding-left: 25px;
  line-height: 59px;
  border-bottom: 1px solid #dcddde;
`;

export const CatalogItems = styled.div`
  padding-top: 15px;
`;

export const CatalogItem = styled.div`
  color: #52585c;
  line-height: 40px;
  padding-left: 25px;
  box-sizing: border-box;
  font-size: 14px;
  display: flex;
  align-items: center;
  border-right: 1px solid ${gray2};
  ${props =>
    props.active &&
    `border-bottom: 1px solid ${gray2};border-top: 1px solid ${gray2};border-right: none;`}
  &:hover {
    cursor: pointer;
    border-bottom: 1px solid ${gray2};
    border-top: 1px solid ${gray2};
    border-right: none;
  }
`;

export const Right = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
`;

export const BestOffer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: url(${props => props.bg});
  background-position: center;
  background-size: cover;
`;
export const BestOfferHeader = styled.div`
  font-family: Open Sans;
  font-weight: bold;
  font-size: 36px;
  color: ${props => props.color};
`;

export const BestOfferDescription = styled.div`
  font-weight: 600;
  font-size: 18px;
  width: 300px;
  color: ${props => props.color};
  margin-top: 15px;
`;

export const InfoBlock = styled.div`
  width: 50%;
  margin-left: 75px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
`;

export const BestOfferImg = styled.div`
  position: absolute;
  width: 450px;
  top: 50%;
  transform: translate(0, -50%);
  right: 15px;
  & > img {
    width: 100%;
    object-fit: cover;
  }
`;

export const HiddenWrap = styled.div`
  width: 100%;
  min-height: 100%;
  background: #fff;
  z-index: 9;
  padding: 0 0 30px;
`;

export const HiddenItemHeader = styled.a`
  display: block;
  font-weight: 600;
  line-height: 20px;
  font-size: 14px;
  color: #282f36;
  cursor: pointer;
  &:hover {
    color: ${orange};
  }
`;

export const HiddenItems = styled.div`
  column-count: 3;
  padding: 0 25px;
  box-sizing: border-box;
`;

export const HiddenItemsWrap = styled.div`
  margin-bottom: 25px;
  break-inside: avoid;
`;

export const HiddenItem = styled.a`
  display: block;
  font-size: 14px;
  color: #52585c;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    color: ${orange};
  }
`;
export const HiddenHeader = styled.a`
  display: flex;
  align-items: center;
  height: 59px;
  box-sizing: border-box;
  padding-left: 25px;
  font-family: Open Sans;
  margin-bottom: 15px;
  font-weight: bold;
  line-height: 20px;
  font-size: 24px;
  color: #282f36;
  cursor: pointer;
  &:hover {
    color: ${orange};
  }
`;
export const HiddenHeaderItem = styled.div`
  color: #f18e67;
  margin-right: 30px;
`;

export const HiddenFooter = styled.div`
  border-top: 1px solid #dcddde;
  height: 59px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;
export const SliderControls = styled.div`
  position: absolute;
  ${props => props.prev && 'left: 10px'};
  ${props => props.next && 'right: 10px'};
  top: 50%;
  transform: translate(0, -50%);
  cursor: pointer;
  z-index: 8;
`;

export const SliderWrap = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 0 10px 10px 0;
  & .slick-dots {
    bottom: 10px;
    font-size: 9px;
    & li button:before {
      font-size: 9px;
    }
  }
`;

export const IconWrap = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
