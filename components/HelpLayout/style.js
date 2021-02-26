import styled from 'react-emotion'

export const Layout = styled.div`
  width: 1150px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
`
export const ElementWrap = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(218, 218, 218, 0.8);
  border-radius: 10px;
  width: 555px;
  height: 296px;
  & > span {
    color: #282f36;
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: bold;
    line-height: 30px;
    font-size: 24px;
    text-align: center;
  }
`

export const Block = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: stretch;
  margin-top: 30px;
`
