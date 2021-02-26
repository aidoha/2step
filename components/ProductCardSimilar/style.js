import styled from 'react-emotion';

export const Wrap = styled.a`
  display: block;
  margin-top: 30px;
  margin-left: 10px;
  &:first-child {
    margin-left: 0;
  }
  cursor: pointer;
`;
export const Item = styled.div`
  width: 200px;
  cursor: pointer;
`;
export const Image = styled.div`
  display: flex;
  height: 120px;
  justify-content: center;
  align-items: center;
  & > img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;
export const Name = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #282f36;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const Price = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 15px;
  color: #282f36;
  margin-top: 7px;
`;
