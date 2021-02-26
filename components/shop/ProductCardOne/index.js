import {
  Wrap,
  Image,
  Title,
  PriceBlock,
  PriceLabel,
  Price,
  Installment,
  InstallmentLabel,
  InstallmentPrice,
  OfferAmount
} from './style';
import toValidCost from '../../common/toValidCost';
import Link from 'next/link';

const ProductCardOne = ({
  withShadow,
  left,
  right,
  oid,
  mediaUrl,
  name,
  minimalPrice,
  catalog,
  offerSet,
  loading
}) => {
  return (
    <Wrap
      withShadow={withShadow}
      loading={loading}
      catalog={catalog}
      left={left}
      right={right}
      href={`/shop/product?id=${oid}`}
    >
      <Image>
        <img src={JSON.parse(mediaUrl).images[0]} />
      </Image>
      <Title>{name}</Title>
      <OfferAmount>
        Предложений: {offerSet ? offerSet.edges.length : '0'}
      </OfferAmount>
      <PriceBlock>
        <Price borderStatus={minimalPrice > 10000}>
          <PriceLabel>{minimalPrice && 'Цена от'}</PriceLabel>
          {minimalPrice
            ? `${minimalPrice && toValidCost(minimalPrice)} ₸`
            : ' Нет в наличии'}
        </Price>
        {minimalPrice > 10000 && (
          <Installment>
            <InstallmentLabel>В рассрочку</InstallmentLabel>
            <InstallmentPrice>
              <PriceLabel right="5px">от</PriceLabel>
              {toValidCost(Math.round(minimalPrice / 12))}
              <PriceLabel left="5px">x12 мес</PriceLabel>
            </InstallmentPrice>
          </Installment>
        )}
      </PriceBlock>
    </Wrap>
  );
};

export default ProductCardOne;
