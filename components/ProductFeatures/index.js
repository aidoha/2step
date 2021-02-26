import {
  Wrap,
  WrapBox,
  FeatureBlock,
  FeatureName,
  FeatureValue
} from "./style";
import { Text, Block } from "../../style/common";
import { useState } from "react";

const ProductFeatures = ({ data }) => {
  const [allFeatures, setAllFeatures] = useState(false);
  const handleAllFeatures = () => setAllFeatures(true);
  const featuresList = data.specification.map(val => {
    return (
      <Block marginTop="40px">
        <Text
          weight="600"
          size="18px"
          lh="22px"
          color="#000000"
          marginTop="20px"
          marginBottom="20px"
        >
          {val.group_name}
        </Text>
        {val.group.map(v => {
          return (
            <FeatureBlock>
              <FeatureName>
                {v.s_name}{" "}
                .............................................................................................................
              </FeatureName>
              <FeatureValue>{v.s_value}</FeatureValue>
            </FeatureBlock>
          );
        })}
      </Block>
    );
  });
  return (
    <Wrap>
      <WrapBox>
        <Text weight="bold" size="24px" lh="29px">
          Характеристика
        </Text>
        {!allFeatures && featuresList.slice(0, 3)}
        {allFeatures && featuresList.slice(0, data.specification.length)}
        {!allFeatures && (
          <Text
            color="#77BEFF"
            size="16px"
            weight="600"
            lh="19px"
            marginTop="20px"
            cursor="pointer"
            onClick={handleAllFeatures}
          >
            Все характеристики
          </Text>
        )}
      </WrapBox>
    </Wrap>
  );
};

export default ProductFeatures;
