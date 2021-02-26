import toValidCost from "../toValidCost";
import { Block, Text, InputWrap } from "../../style/common";
import { SelectBox } from "./style";

const OrderPartner = ({
  allOffers,
  activePartner,
  allPartners,
  handleListAllPartner,
  handleChangePartner
}) => {
  const { shopPartner, deliveryPrice, finalPrice } = activePartner;
  return (
    <InputWrap>
      <Text weight="600" lh="24px" marginBottom="5px" size="18px">
        Продавец
      </Text>
      {!allPartners && (
        <SelectBox>
          <Block>
            <Text lh="20px">{shopPartner.name}</Text>
            {deliveryPrice !== null ? (
              <Text size="14px" lh="18px" color="#BEC0C3" marginTop="5px">
                {deliveryPrice === 0
                  ? `Доставка: бесплатно`
                  : `Доставка: ${toValidCost(deliveryPrice)} ₸`}
                , самовывоз
              </Text>
            ) : (
              <Text size="14px" lh="18px" color="#BEC0C3" marginTop="5px">
                Самовывоз
              </Text>
            )}
          </Block>
          {finalPrice !== null || finalPrice !== undefined ? (
            <Text lh="20px" weight="600" marginRight="20px">
              {toValidCost(activePartner.finalPrice)} ₸
            </Text>
          ) : (
            <Text lh="20px" weight="600" marginRight="20px">
              Нет в наличии
            </Text>
          )}
          <Text
            weight="500"
            lh="19px"
            textAl="right"
            color="#77BEFF"
            cursor="pointer"
            onClick={handleListAllPartner}
          >
            Изменить продавца
          </Text>
        </SelectBox>
      )}
      {allPartners &&
        allOffers.map((i, indx) => {
          return (
            <SelectBox>
              <Block>
                <Text lh="20px">{i.node.shopPartner.name}</Text>
                {i.node.deliveryPrice !== null ? (
                  <Text size="14px" lh="18px" color="#BEC0C3" marginTop="5px">
                    {i.node.deliveryPrice === 0
                      ? `Доставка: бесплатно`
                      : `Доставка: ${toValidCost(i.node.deliveryPrice)} ₸`}
                    , самовывоз
                  </Text>
                ) : (
                  ""
                )}
              </Block>
              {i.node.finalPrice !== null || i.node.finalPrice !== undefined ? (
                <Text weight="600" lh="20px" marginRight="20px">
                  {toValidCost(i.node.finalPrice)} ₸
                </Text>
              ) : (
                <Text weight="600" lh="20px" marginRight="20px">
                  Нет в наличии
                </Text>
              )}
              <Text
                weight="500"
                lh="19px"
                textAl="right"
                color="#77BEFF"
                cursor="pointer"
                onClick={() => handleChangePartner(indx)}
              >
                Выбрать
              </Text>
            </SelectBox>
          );
        })}
    </InputWrap>
  );
};

export default OrderPartner;
