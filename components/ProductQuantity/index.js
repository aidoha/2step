import { FlexBlock, Text } from "../../style/common";
import { Quantity, QuantityChange } from "./style";
const ProductQuantity = ({
  quantity,
  onDecreaseQuantity,
  onIncreaseQuantity
}) => {
  return (
    <>
      <Text lh="24px" size="18px" weight="600" marginTop="20px">
        Количество товара
      </Text>
      <FlexBlock marginLeft="10px" marginTop="20px" width="150px" height="40px">
        <QuantityChange
          radius="5px 0px 0px 5px"
          onClick={() => onDecreaseQuantity()}
        >
          -
        </QuantityChange>
        <Quantity>{quantity}</Quantity>
        <QuantityChange
          radius="0px 5px 5px 0px"
          onClick={() => onIncreaseQuantity()}
        >
          +
        </QuantityChange>
      </FlexBlock>
    </>
  );
};

export default ProductQuantity;
