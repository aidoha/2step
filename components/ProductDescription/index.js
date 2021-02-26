import { Text, Block } from "../../style/common";

const ProductDescription = ({ description }) => {
  return (
    <Block paddingTop="30px">
      <Text weight="600" size="18px" lh="22px" color="#000000">
        Коротко о товаре
      </Text>
      <Text dangerouslySetInnerHTML={{ __html: description }} />
    </Block>
  );
};

export default ProductDescription;
