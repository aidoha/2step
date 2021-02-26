import Rating from "react-rating";
import { Text, FlexBlock, Block } from "../../style/common";
import { Wrap, Item, Image, IconWrap, InnerWrap } from "./style";
import Button from "../Button";
import toValidCost from "../toValidCost";

import IconDelivery from "../icons/delivery";
import IconPickup from "../icons/pickup";
import IconDebitCard from "../icons/debitcard";
import Star from "../icons/star";

const ProductOfferList = ({ offerList, toOrderCreate, minimalPrice }) => {
  return (
    <Wrap>
      <InnerWrap>
        <FlexBlock jc="space-between">
          <Text weight="600" size="18px" lh="15px" color="#000000">
            Предложение магазинов
          </Text>
        </FlexBlock>
        <Block marginTop="30px">
          {offerList.map((val, indx) => {
            const { finalPrice, deliveryPrice, shopPartner } = val.node;
            const { logoUrl, name, reviewsAvg, reviewsCount } = shopPartner;
            return (
              <Item>
                <Block maxWidth="160px" minWidth="160px">
                  <Image>
                    <img src={logoUrl} alt={name} />
                  </Image>
                  <FlexBlock ai="center" marginTop="10px">
                    <Rating
                      readonly
                      initialRating={reviewsAvg}
                      emptySymbol={<Star color={"#BEC0C3"} />}
                      fullSymbol={<Star color={"#FFA34D"} />}
                    />
                    {reviewsCount !== 0 ? (
                      <Text
                        size="12px"
                        lh="15px"
                        color="#93979B"
                        marginLeft="5px"
                      >
                        {reviewsCount} отзывов
                      </Text>
                    ) : (
                      <Text
                        size="12px"
                        lh="15px"
                        color="#93979B"
                        marginLeft="5px"
                      >
                        Нет отзывов
                      </Text>
                    )}
                  </FlexBlock>
                </Block>
                <Block maxWidth="180px" minWidth="180px">
                  {deliveryPrice !== null ? (
                    <FlexBlock marginTop="7px">
                      <IconWrap>
                        <IconDelivery />
                      </IconWrap>
                      <Text marginLeft="10px" marginTop="4px">
                        {deliveryPrice === 0
                          ? `Доставка: Бесплатно`
                          : `Доставка: ${deliveryPrice} ₸`}
                      </Text>
                    </FlexBlock>
                  ) : (
                    ""
                  )}
                  <FlexBlock marginTop="7px">
                    <IconWrap>
                      <IconPickup />
                    </IconWrap>
                    <Text marginLeft="10px" marginTop="4px">
                      Самовывоз
                    </Text>
                  </FlexBlock>
                </Block>
                <Block maxWidth="160px" minWidth="160px">
                  <FlexBlock marginTop="7px">
                    <IconWrap>
                      <IconDebitCard />
                    </IconWrap>
                    <Text marginLeft="10px">
                      Картой на сайте, рассрочка, кредит
                    </Text>
                  </FlexBlock>
                </Block>
                <Block maxWidth="160px" minWidth="160px">
                  <Text weight="600" size="20px" lh="20px" textAl="right">
                    {toValidCost(finalPrice)} ₸
                  </Text>
                  {minimalPrice === finalPrice && (
                    <Text size="12px" lh="15px" textAl="right" color="#3dc47e">
                      самая низкая цена
                    </Text>
                  )}
                </Block>
                <Block maxWidth="160px" minWidth="160px">
                  <Button
                    color="#F18E67"
                    width="200px"
                    height="40px"
                    round="5px"
                    top="10px"
                    onClick={() =>
                      toOrderCreate(offerList[indx].node.oid, indx)
                    }
                  >
                    Купить
                  </Button>
                </Block>
              </Item>
            );
          })}
        </Block>
      </InnerWrap>
    </Wrap>
  );
};

export default ProductOfferList;
