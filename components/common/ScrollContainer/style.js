import styled from 'react-emotion'

export const Container = styled.div`
  display: ${props => props.display || 'flex'};
  overflow-x: auto;
  padding-bottom: 30px;
  margin-bottom: -30px;
  justify-content: ${props => props.jc};
`

export const Wrap = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  padding-bottom: 8px;
`
