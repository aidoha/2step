import { Wrap, WrapBox, Heading, ScrollWrap, Container } from './style'
import ProductCardSimilar from '../ProductCardSimilar'

const similarProducts = ({ data }) => {
  return(
    <Wrap>
      <WrapBox>
        <Heading>Похожие товары</Heading>
        <ScrollWrap>
          <Container>
            {data.map(val => (
              <ProductCardSimilar data={val}/>
            ))}
          </Container>
        </ScrollWrap>
      </WrapBox>
    </Wrap>
  )
}

export default similarProducts