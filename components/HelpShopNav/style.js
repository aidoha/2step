import styled from 'react-emotion'
import Link from 'next/link'

export const Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`

export const Wrap = styled.div`
  width: 23%;
  height: 317px;
  background: #ffffff;
  border-radius: 10px;
  padding: 10px 30px;
  color: #282f36;
`

export const Title = styled.h1`
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 18px;
  color: #282f36;
`

export const List = styled.div`
  margin-left: 5px;
`

export const ListItemWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  position: relative;
  color: #282f36;
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  ${props =>
    props.section === props.activeSection &&
    '&:after{content: "";display: block;position: absolute;left: -35px;width: 10px;height: 30px;background: #333;}'}
`

export const Text = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: ${props => props.sixteen && '14px'};
  font-size: ${props => props.eightteen && '15px'};
  color: #282f36;
  cursor: pointer;
`

export const ListItem = styled(Link)`
  cursor: pointer;
  color: #282f36;
`
