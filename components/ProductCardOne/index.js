import {
  Wrap,
  Image,
  Title,
  PriceBlock,
  Item,
  Price,
  InstPrice,
  RateText,
  RateWrap
} from "./style";
import toValidCost from "../toValidCost";
import Rating from "react-rating";
import Star from "../../components/icons/star";
import Link from "next/link";

const ProductCardOne = ({
  withShadow,
  left,
  right,
  oid,
  mediaUrl,
  name,
  catalog,
  offerSet,
  loading,
  minimalPrice,
  slug,
  rating
}) => {
  const { maxMonth, monthPay } =
    offerSet.edges.length !== 0 && offerSet.edges[0].node.installment;
  return (
    <Wrap>
      <Link passHref href={`/product/${slug}/${oid}`}>
        <Item
          withShadow={withShadow}
          loading={loading}
          catalog={catalog}
          left={left}
          right={right}
        >
          <Image>
            <img src={JSON.parse(mediaUrl).images[0]} />
          </Image>
          <Title>{name}</Title>
          <RateWrap>
            <Rating
              readonly
              initialRating={rating[0]}
              emptySymbol={<Star color={"#BEC0C3"} />}
              fullSymbol={<Star color={"#FFA34D"} />}
            />
            {rating.length !== 0 ? (
              <RateText>{rating[1]}</RateText>
            ) : (
              <RateText>Нет отзывов</RateText>
            )}
          </RateWrap>
          <PriceBlock>
            {minimalPrice !== null ? (
              <>
                <Price>{toValidCost(minimalPrice)} ₸</Price>
                {minimalPrice > 10000 &&
                  monthPay !== undefined &&
                  monthPay !== null && (
                    <InstPrice>
                      {toValidCost(monthPay)} ₸ на {maxMonth} мес
                    </InstPrice>
                  )}
              </>
            ) : (
              <Price>Нет в наличии</Price>
            )}
          </PriceBlock>
        </Item>
      </Link>
    </Wrap>
  );
};

export default ProductCardOne;
