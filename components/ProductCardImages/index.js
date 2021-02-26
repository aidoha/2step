import { Wrap, Item, PagingItem } from './style'
import Slider from 'react-slick'

const ProductCardImages = props => {
  const image = props.data
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: i => (
      <PagingItem>
        <img
          src={
            image[i] ||
            'https://unie-assets.ams3.digitaloceanspaces.com/images/no-image.png'
          }
        />
      </PagingItem>
    )
  }
  return (
    <Wrap>
      <Slider {...settings}>
        {image.map(val => {
          return (
            <Item onClick={props.fullImageHandler}>
              <img src={val} itemProp="image" />
            </Item>
          )
        })}
      </Slider>
    </Wrap>
  )
}

export default ProductCardImages
