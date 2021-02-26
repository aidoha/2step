import { Wrap, WrapBox, Line } from "./style";
import { Text, FlexBlock, Block } from "../../style/common";
//Components
import RatingUser from "../../components/RatingUser";
//Icons
import IconAvatar from "../../components/icons/avatar";

const ProductReview = ({ data, ratingRatio }) => {
  return (
    <Wrap>
      <WrapBox>
        <FlexBlock>
          <Text size="24px" weight="600" lh="29px">
            Отзывы и оценки
          </Text>
          <Text size="24px" weight="600" color="#BEC0C3" marginLeft="10px">
            {data.length}
          </Text>
        </FlexBlock>
        <Line marginTop="35px" />
        <FlexBlock jc="space-between" marginTop="20px">
          <Block width="80%">
            {data.map(val => {
              const { uName, rate, description, created } = val.node;
              return (
                <Block ftmarginTop="0px" marginTop="40px">
                  <FlexBlock ai="center">
                    <IconAvatar />
                    <Text size="16px" weight="600" marginLeft="16px">
                      {uName}
                    </Text>
                  </FlexBlock>
                  <Block marginTop="10px">
                    <RatingUser data={rate} />
                  </Block>
                  <Text
                    marginTop="10px"
                    lh="20px"
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                  <Text color="#BEC0C3" marginTop="10px">
                    {created}
                  </Text>
                </Block>
              );
            })}
          </Block>
          <Block width="20%">
            <Text size="16px" color="#000000" lh="19px">
              Показать отзывы с оценкой
            </Text>
            <Block marginTop="15px">
              {ratingRatio.map(val => {
                const { rate, percentage } = JSON.parse(val);
                return (
                  <FlexBlock marginTop="5px" ai="center">
                    <RatingUser data={rate} />
                    <Text
                      size="12px"
                      color="rgba(40, 47, 54, 0.8)"
                      marginLeft="8px"
                    >
                      {percentage} %
                    </Text>
                  </FlexBlock>
                );
              })}
            </Block>
          </Block>
        </FlexBlock>
      </WrapBox>
    </Wrap>
  );
};

export default ProductReview;
