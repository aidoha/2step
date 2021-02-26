import styled from 'react-emotion';
import color from '../vars/color';
import Link from 'next/link';

const { orange } = color;

export const Wrap = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
  height: 40px;
`;
export const MainCategories = styled.div`
  display: flex;
`;
export const MainCategoriesItem = styled.a`
  display: block;
  margin-right: 30px;
  user-select: none;
  cursor: pointer;
  font-size: 14px;
  color: #282F36;
  text-decoration: none;
  &:hover {
    color: ${orange};
  }
`;

export const AllCategoriesWrap = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  user-select: none;
  cursor: pointer;
  padding-right: 65px;
  &:hover {
    color: ${orange};
  }
`;
