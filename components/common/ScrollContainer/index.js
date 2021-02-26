import { Wrap, Container } from './style'

const ScrollContainer = props => {
  return (
    <Wrap>
      <Container jc={props.jc} display="flex">
        {props.children}
      </Container>
    </Wrap>
  )
}

export default ScrollContainer
