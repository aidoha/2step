import { useState } from "react";
import { graphql } from "react-apollo";
import { GET_PRODUCT } from "../../../queries/product";
import Router from "next/router";
import Link from "next/link";
//Styles
import { Text, FlexBlock, Block } from "../../../style/common";
import { ProductMain, BlueBox, Icon } from "../../../style/product";
//Components
import MainLayout from "../../../components/MainLayout";
import Head from "../../../components/head";
import ProductCardImages from "../../../components/ProductCardImages";
import SimilarProducts from "../../../components/SimilarProducts";
import ProductOfferList from "../../../components/ProductOfferList";
import ProductDescription from "../../../components/ProductDescription";
import ProductFeatures from "../../../components/ProductFeatures";
import ProductReview from "../../../components/ProductReview";
import Purchase from "../../../components/common/PurchaseBlock";
import Rate from "../../../components/common/Rating";
//Icons
import IconPaymentWay from "../../../components/icons/paymentWay";

const Product = props => {
  const [offerStatus, setOfferStatus] = useState(0);

  const toOrderCreate = (offerId, activeOffer) => {
    localStorage.setItem(
      "order",
      `{ "offerId": ${offerId}, "activeOffer": ${activeOffer}}`
    );
    Router.push("/order");
  };

  const onSmoothScroll = top => window.scroll({ top: top, behavior: "smooth" });

  const { loading, product } = props.data;
  const {
    name,
    description,
    mediaUrl,
    offerSet,
    category,
    brand,
    similarProducts,
    features,
    minimalPrice,
    ratingRatio,
    reviewSet
  } = product;

  return (
    <MainLayout
      section={2}
      bg="#F8F8F8"
      title={`${name} | 2step.me`}
      loading={loading}
      width
    >
      <Head title={name} description={description} />
      <ProductMain>
        <Block width="45%">
          <ProductCardImages data={JSON.parse(mediaUrl).images} />
        </Block>
        <Block width="55%" paddingLeft="55px" boxSizing="box-border">
          <Text size="24px" weight="600" lh="29px">
            {name}
          </Text>
          <Rate data={product} />
          <Purchase
            offerList={offerSet.edges}
            product={product}
            offerStatus={offerStatus}
            toOrderCreate={toOrderCreate}
            onSmoothScroll={onSmoothScroll}
          />
          <ProductDescription description={description} />
          <Text
            color="#77BEFF"
            cursor="pointer"
            lh="45px"
            bb="1px solid #EEEEEF"
            onClick={() => onSmoothScroll(1450)}
          >
            Все характеристики
          </Text>
          <Link
            prefetch
            href={`/catalog/${category.slug}/${category.id}?brend=${
              brand.slug
            }`}
          >
            <Text
              color="#77BEFF"
              cursor="pointer"
              lh="45px"
              bb="1px solid #EEEEEF"
            >
              Все товары бренда
            </Text>
          </Link>
          <Block marginTop="20px">
            <FlexBlock>
              <Icon>
                <IconPaymentWay />
              </Icon>
              <Text size="18px" lh="22px" color="#000000">
                Способ оплаты
              </Text>
            </FlexBlock>
            {["Наличными", "В рассрочку*"].map(val => (
              <FlexBlock ai="center" margibTop="5px">
                <BlueBox />
                <Text marginLeft="7px">{val}</Text>
              </FlexBlock>
            ))}
            <Text color="#BEC0C3" size="12px" marginTop="7px">
              * Покупка в рассрочку доступна только для держателей кредитных
              карт Visa QAZKOM
            </Text>
          </Block>
        </Block>
      </ProductMain>
      <ProductOfferList
        offerList={offerSet.edges}
        offerStatus={offerStatus}
        toOrderCreate={toOrderCreate}
        minimalPrice={minimalPrice}
      />
      {similarProducts.length !== 0 && (
        <SimilarProducts data={similarProducts} />
      )}
      <ProductFeatures data={JSON.parse(features)} />
      {reviewSet.length !== 0 && (
        <ProductReview data={reviewSet.edges} ratingRatio={ratingRatio} />
      )}
    </MainLayout>
  );
};

Product.getInitialProps = async ({ query, apolloClient }) => {
  return {
    apolloClient,
    query
  };
};

export default graphql(GET_PRODUCT, {
  options: props => ({
    variables: {
      id: props.query.id
    }
  })
})(Product);
