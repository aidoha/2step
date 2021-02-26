import styled from 'react-emotion'

export const Wrap = styled.div`
  display: flex;
  jusitfy-content: space-between;
  width: 100%;
  align-items: center;
  margin-top: 50px;
`
export const Block = styled.div`
`
export const Image = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  & > img {
    width: 95%;
    object-fit: contain;
    border-radius: 5px;
  }
`