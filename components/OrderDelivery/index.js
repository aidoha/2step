import { FlexBlock, Text, InputWrap } from "../../style/common";
import { DeliverySwitcher, Switcher, SelectBox } from "./style";

const OrderDelivery = ({
  switchStatus,
  switchStatusHandler,
  activePartner,
  onInputChange,
  streetValidate,
  houseValidate,
  houseError,
  streetError,
  handlePickUpAddress
}) => {
  const { addressSet, name } = activePartner.shopPartner;
  const addressCount = addressSet.edges.length;
  return (
    <>
      <Text weight="600" marginTop="30px" size="18px">
        Способ получения
      </Text>
      <DeliverySwitcher>
        <Switcher
          active={switchStatus === 0}
          onClick={() => switchStatusHandler(0)}
        >
          <Text lh="19px">Самовывоз</Text>
          <Text size="14px" lh="17px" color="#93979B" marginTop="7px">
            Можно забрать из {addressCount} пункта(-ов)
          </Text>
        </Switcher>
        {activePartner.deliveryPrice !== null && (
          <Switcher
            active={switchStatus === 1}
            onClick={() => switchStatusHandler(1)}
          >
            <Text lh="19px">Доставка курьером</Text>
            <Text size="14px" lh="17px" color="#93979B" marginTop="7px">
              Заказ приедет по написанному адресу
            </Text>
          </Switcher>
        )}
      </DeliverySwitcher>
      {switchStatus === 0 && (
        <>
          <Text weight="600" marginTop="30px" size="18px">
            Пункты самовывоза от {name} в Алматы
          </Text>
          {addressSet.edges.map((val, indx) => {
            return (
              <SelectBox>
                {val.node.street}
                <Text
                  weight="500"
                  lh="19px"
                  textAl="right"
                  color="#77BEFF"
                  cursor="pointer"
                  onClick={() => handlePickUpAddress(indx)}
                >
                  Выбрать
                </Text>
              </SelectBox>
            );
          })}
        </>
      )}

      {switchStatus === 1 && (
        <>
          <InputWrap error={streetError} padding="15px 20px">
            <Text weight="600" lh="24px" marginBottom="5px" size="18px">
              Адрес получателя
            </Text>
            <input
              type="text"
              name="addressStreet"
              onChange={onInputChange}
              onBlur={streetValidate}
              placeholder="Улица"
            />
            {streetError && (
              <Text size="12px" color="#ff4f52">
                Заполните поле
              </Text>
            )}
          </InputWrap>
          <FlexBlock>
            <InputWrap error={houseError} width="210px" padding="15px 20px">
              <input
                type="text"
                name="addressHome"
                onChange={onInputChange}
                onBlur={houseValidate}
                placeholder="Дом"
              />
              {houseError && (
                <Text size="12px" color="#ff4f52">
                  Заполните поле
                </Text>
              )}
            </InputWrap>
            <InputWrap width="210px" padding="15px 20px">
              <input
                type="text"
                name="addressFlat"
                onChange={onInputChange}
                placeholder="Квартира"
              />
            </InputWrap>
          </FlexBlock>
        </>
      )}
    </>
  );
};

export default OrderDelivery;
