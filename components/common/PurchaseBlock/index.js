import { Text, FlexBlock, Block } from "../../../style/common";
import { PurchaseBlock } from "./style";
import toValidCost from "../../toValidCost";
import Button from "../../Button";

import IconDelivery from "../../icons/delivery";
import IconPickup from "../../icons/pickup";

const purchase = ({
  offerList,
  product,
  offerStatus,
  toOrderCreate,
  onSmoothScroll
}) => {
  const activeOffer =
    offerList.length !== 0 &&
    offerList
      .map(i => i.node)
      .reduce((prev, current) => {
        return prev.finalPrice < current.finalPrice ? prev : current;
      });

  return offerList.length !== 0 ? (
    <PurchaseBlock>
      <Block width="50%">
        <Text size="12px" lh="15px" color="#3dc47e">
          самая низкая цена
        </Text>
        <Text weight="bold" size="24px" marginTop="10px">
          {toValidCost(product.minimalPrice)} ₸
        </Text>
        <FlexBlock ai="center" marginTop="30px" fw="wrap">
          {activeOffer.deliveryPrice !== null ? (
            <FlexBlock marginTop="10px">
              <IconDelivery />
              <Text lh="15px" marginLeft="10px" marginTop="3px">
                {activeOffer.deliveryPrice === 0
                  ? `Доставка: Бесплатно`
                  : `Доставка: ${toValidCost(activeOffer.deliveryPrice)} ₸`}
              </Text>
            </FlexBlock>
          ) : (
            ""
          )}
          <FlexBlock marginTop="10px">
            <IconPickup />
            <Text lh="15px" marginLeft="10px" marginTop="3px">
              Самовывоз
            </Text>
          </FlexBlock>
        </FlexBlock>
        <Block marginTop="20px">
          <FlexBlock>
            <Text size="16px" weight="bold" lh="25px">
              {`Продавец: ${activeOffer.shopPartner.name}`}
            </Text>
          </FlexBlock>
          <Button
            color="#F18E67"
            width="150px"
            height="40px"
            round="5px"
            top="10px"
            onClick={() => toOrderCreate(activeOffer.oid, offerStatus)}
          >
            Купить
          </Button>
        </Block>
      </Block>
      <FlexBlock width="65%" fd="column" position="relative">
        {/* <TextGray>Мы сотрудничаем с</TextGray> */}
        {/* {[...new Set(activeOffer.installment.map(i => i.inst.name))][0] ===
          'Homebank Orange' && (
          <IconWrap>
            <IconHomeBank />
          </IconWrap>
        )} */}
        <Text
          weight="600"
          lh="17px"
          color="#77beff"
          cursor="pointer"
          userSelect="none"
          position="absolute"
          bottom="13px"
          onClick={() => onSmoothScroll(850)}
        >
          Выбрать другого продавца
        </Text>
      </FlexBlock>
    </PurchaseBlock>
  ) : (
    <Text weight="bold" size="18px" lh="22px" color="#000000" marginTop="20px">
      Нет в наличии
    </Text>
  );
};

export default purchase;
