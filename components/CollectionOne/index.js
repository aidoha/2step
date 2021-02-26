import {
  Wrap,
  Left,
  Right,
  Label,
  Title,
  PriceOld,
  PriceActual,
  PriceBlock,
  MainInfo,
  ProductBlock,
  Product,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductPrice
} from './style'

const CollectionOne = () => {
  return (
    <Wrap>
      <MainInfo>
        <Left>
          <Label>Экономия 55 990тг</Label>
          <Title>Экономим по черному Купи 4 товара за </Title>
          <PriceBlock>
            <PriceOld>200 990т</PriceOld>
            <PriceActual>189 990т</PriceActual>
          </PriceBlock>
        </Left>
        <Right>
          <img src="http://blogs-images.forbes.com/kristintablang/files/2015/09/Apple-Watch-Hermes-Double-Tour.png" />
        </Right>
      </MainInfo>
      <ProductBlock>
        <Product>
          <ProductImage>
            <img src="https://unie-assets.ams3.digitaloceanspaces.com/store/adik/store_images/245/xiaomi-mi-a2-lite-64gb-black-1004038-1.png" />
          </ProductImage>
          <ProductInfo>
            <ProductTitle>Samsung Galaxy Midnight Black</ProductTitle>
            <ProductPrice>$829</ProductPrice>
          </ProductInfo>
        </Product>
        <Product>
          <ProductImage>
            <img src="https://unie-assets.ams3.digitaloceanspaces.com/store/adik/store_images/245/xiaomi-mi-a2-lite-64gb-black-1004038-1.png" />
          </ProductImage>
          <ProductInfo>
            <ProductTitle>Samsung Galaxy Midnight Black</ProductTitle>
            <ProductPrice>$829</ProductPrice>
          </ProductInfo>
        </Product>
        <Product>
          <ProductImage>
            <img src="https://unie-assets.ams3.digitaloceanspaces.com/store/adik/store_images/245/xiaomi-mi-a2-lite-64gb-black-1004038-1.png" />
          </ProductImage>
          <ProductInfo>
            <ProductTitle>Samsung Galaxy Midnight Black</ProductTitle>
            <ProductPrice>$829</ProductPrice>
          </ProductInfo>
        </Product>
        <Product>
          <ProductImage>
            <img src="https://unie-assets.ams3.digitaloceanspaces.com/store/adik/store_images/245/xiaomi-mi-a2-lite-64gb-black-1004038-1.png" />
          </ProductImage>
          <ProductInfo>
            <ProductTitle>Samsung Galaxy Midnight Black</ProductTitle>
            <ProductPrice>$829</ProductPrice>
          </ProductInfo>
        </Product>
      </ProductBlock>
    </Wrap>
  )
}

export default CollectionOne
