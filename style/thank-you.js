import styled from "react-emotion";

export const ImageWrap = styled.div`
  width: 150px;
  height: 150px;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
