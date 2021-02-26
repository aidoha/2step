import { Wrap, Item, Image, Name, Price } from './style'
import Rating from '../../components/common/Rating'
import toValidCost from '../toValidCost'
import Link from 'next/link'

const productCardSimilar = ({ data }) => {
  const img = JSON.parse(data.mediaUrl).images[0]
  return(
    <Link passHref href={`/product/${data.slug}/${data.oid}`}>
      <Wrap>
        <Item>
          <Image>
            <img src={img} alt={data.name}/>
          </Image>
          <Name>{data.name}</Name>
          <Rating data={data}/>
          {(data.minimalPrice !== null || data.minimalPrice !== undefined) ? (
            <Price>{toValidCost(data.minimalPrice)} ₸</Price>
          ) : <Price>Нет в наличии</Price>}
        </Item>
      </Wrap>
    </Link>
  )
}

export default productCardSimilar