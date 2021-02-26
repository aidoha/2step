import styled from 'react-emotion';
import color from '../vars/color';

const { orange, black } = color;

export const Wrap = styled.div`
  width: 100%;
  height: 35px;
  background: #f8f8f8;
  display: flex;
  align-items: center;
  max-width: 1150px;
  min-width: 1150px;
  margin: auto;
`;

export const FinanceTab = styled.a`
  display: block;
  text-transform: uppercase;
  line-height: 35px;
  font-size: 14px;
  user-select: none;
  cursor: pointer;
  color: ${black};
`;
export const MarketTab = styled.div`
  user-select: none;
  cursor: pointer;
  text-transform: uppercase;
  line-height: 35px;
  font-size: 14px;
  margin-left: 40px;
  position: relative;
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background: ${orange};
    position: absolute;
    top: 0;
    left: 0;
  }
`;
