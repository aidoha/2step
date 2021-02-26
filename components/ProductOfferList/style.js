import styled from "react-emotion";

export const Wrap = styled.div`
  padding: 30px 0;
  border-top: 6px solid #f8f8f8;
`;
export const InnerWrap = styled.div`
  min-width: 1150px;
  max-width: 1150px;
  margin: 0 auto;
`;
export const Item = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eeeeef;
  &:last-child {
    border: none;
  }
`;
export const Image = styled.div`
  display: flex;
  align-items: center;
  & > img {
    object-fit: contain;
    width: 60%;
  }
`;
export const IconWrap = styled.div`
  & > svg {
    width: 22px;
    height: 22px;
  }
`;
