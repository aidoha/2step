import { Wrap, Item, Name, Rating, Price } from './style';
import Button from '../../common/Button';
import toValidCost from '../../common/toValidCost';

const ProductOfferList = props => {
  return (
    <Wrap>
      {props.data.map((val, indx) => {
        return (
          <Item>
            <Name>{val.shopPartner.name}</Name>
            <Rating />
            <Price>{toValidCost(val.finalPrice)} ₸</Price>
            <Button
              color="#F18E67"
              width="max-content"
              height="40px"
              round="20px"
              onClick={() => props.onClick(indx)}
              active={props.active === indx}
            >
              Выбрать
            </Button>
          </Item>
        );
      })}
    </Wrap>
  );
};

export default ProductOfferList;
