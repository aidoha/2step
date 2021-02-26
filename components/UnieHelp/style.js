import styled from 'react-emotion'
import Link from 'next/link'
import Eclipse from '../icons/eclipse'
// ${props =>
//   props.section === props.activeSection &&
//   '&:after{content: "";display: block;position: absolute;left: -35px;width: 10px;height: 30px;background: #333;}'}

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
  position: sticky;
  top: 130px;
`
export const Title = styled.h1`
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 18px;
  font-size: ${props => props.title && '30px'};
  color: #282f36;
  text-align: ${props => props.center && 'center'};
  line-height: ${props => props.title && '40px'};
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
`
export const Text = styled.p`
  font-family: Open Sans;
  font-family: ${props => props.roboto && 'Roboto Slab'};
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: ${props => props.sixteen && '14px'};
  font-size: ${props => props.eightteen && '15px'};
  font-size: ${props => props.thirty && '25px'};
  font-size: ${props => props.twelve && '12px'};
  color: #282f36;
  cursor: pointer;
  margin-top: ${props => props.position && '-5px'};
`
export const ListItem = styled(Link)`
  cursor: pointer;
  color: #282f36;
`
export const Box = styled.div`
  padding: 10px 30px;
  background: #ffffff;
  border-radius: 10px;
  width: 65%;
`
export const Left = styled.div`
  width: 50%;
`
export const Right = styled.div`
  width: 50%;
`
export const Top = styled.div`
  display: flex;
  align-items: stretch;
`
export const Button = styled.a`
  display: block;
  width: 120px;
  height: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  color: #ffffff;
  background: ${props => props.shop && '#F18E67'};
  background: ${props => props.finance && '#4C8869'};
  border-radius: 20px;
`
export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: stretch;
`
export const EclipseWrap = styled.div``
export const StyledEclipse = styled.div`
  background-image: url(${Eclipse.toString()});
  width: 100%;
  height: 234px;
`
export const Personnel = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: stretch;
`
export const Person = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
