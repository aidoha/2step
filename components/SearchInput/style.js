import styled from 'react-emotion';
import color from '../vars/color';

const { orange, gray3 } = color;

export const Wrap = styled.div`
  position: relative;
  width: 575px;
  height: 40px;
  margin-left: 100px;
`;

export const Input = styled.input`
  width: 100%;
  min-height: 100%;
  border: 1px solid ${gray3};
  border-radius: 5px;
  font-size: 14px;
  padding-left: 16px;
  box-sizing: border-box;
  outline: none;
  -webkit-appearance: none;
  height: 40px;
`;
export const Button = styled.a`
  position: absolute;
  background: ${orange};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 40px;
  right: 0;
  top: 0;
  height: 100%;
  border: none;
  outline: none;
  border-radius: 0 5px 5px 0;
`;

export const SearchResult = styled.div`
  width: 525px;
  position: absolute;
  z-index: 999;
  left: 0;
  top: 40px;
  background: #fff;
  border-radius: 0 0 7px 7px;
`;
export const SearchResultItem = styled.div`
  line-height: 30px;
  padding: 0 20px;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background: #f6f7f7;
  }
`;
