import styled from 'react-emotion'

export const Wrap = styled.div`
`
export const Layout = styled.div`
  max-width: ${props => props.width ? '100%' : '1150px'};
  min-width: ${props => props.width ? '100%' : '1150px'};
  margin: 0px auto;
  padding: ${props => props.padding || '30px 0'};
`
export const White = styled.div`
  background: #fff;
`
