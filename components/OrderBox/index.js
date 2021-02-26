import { OrderBlock, Image, PriceBlock } from "./style";
import { FlexBlock, Text, Block } from "../../style/common";
import toValidCost from "../../components/toValidCost";

const orderBlock = ({
  img,
  name,
  partner,
  switchStatus,
  deliveryPrice,
  price,
  quantity
}) => {
  return (
    <OrderBlock>
      <Text weight="600">Оформление заказа</Text>
      <FlexBlock marginTop="10px" jc="flex-start">
        <Image>
          <img src={img} alt="" />
        </Image>
        <Text marginLeft="10px">{name}</Text>
      </FlexBlock>
      <FlexBlock marginTop="10px" jc="space-between">
        <Text>Товар</Text>
        <Text>{toValidCost(price)} ₸</Text>
      </FlexBlock>
      <FlexBlock marginTop="10px" jc="space-between">
        <Text>Количество</Text>
        <Text>{quantity}</Text>
      </FlexBlock>
      <FlexBlock marginTop="10px" jc="space-between">
        <Text>Продавец</Text>
        <Text>{partner}</Text>
      </FlexBlock>
      <FlexBlock marginTop="10px" jc="space-between">
        <Text>{switchStatus === 1 && "Доставка"}</Text>
        <Text color="#77BEFF">
          {switchStatus === 1 &&
            (deliveryPrice === 0 ? "Бесплатно" : `${toValidCost(deliveryPrice)} ₸`)}
        </Text>
      </FlexBlock>
      <PriceBlock>
        <Block>Итого</Block>
        <Block>
          {switchStatus === 1 && deliveryPrice !== null && price !== null
            ? `${toValidCost(deliveryPrice + price * quantity)} ₸`
            : `${toValidCost(price * quantity)} ₸`}
        </Block>
      </PriceBlock>
    </OrderBlock>
  );
};

export default orderBlock;
