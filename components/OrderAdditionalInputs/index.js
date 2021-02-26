import { InputWrap, Text } from "../../style/common";

const OrderAdditionalInputs = ({
  onInputChange,
  activePaymentWay,
  iinValidate,
  iinError
}) => {
  return (
    <>
      {activePaymentWay === 2 && (
        <InputWrap
          padding="15px 20px"
          error={iinError === 0 || iinError === 1 || iinError === 2 || iinError === 3}
        >
          <Text weight="600" lh="24px" marginBottom="5px" size="18px">
            ИИН
          </Text>
          <input
            name="iin"
            onBlur={iinValidate}
            onChange={onInputChange}
            placeholder="ИИН"
            maxLength={12}
          />
          <Text size="12px" lh="14px" color="#BEC0C3" marginTop="5px">
            ИИН используется для подачи заявки
          </Text>
          {iinError === 0 && (
            <Text size="12px" color="#ff4f52">
              Заполните поле
            </Text>
          )}
          {iinError === 1 && (
            <Text size="12px" color="#ff4f52">
              Недостаточное количество символов
            </Text>
          )}
          {iinError === 2 && (
            <Text size="12px" color="#ff4f52">
              Неверный формат
            </Text>
          )}
          {iinError === 3 && (
            <Text size="12px" color="#ff4f52">
              Недопустимые символы
            </Text>
          )}
        </InputWrap>
      )}
      <InputWrap padding="15px 20px">
        <Text weight="600" lh="24px" marginBottom="5px" size="18px">
          Комментарий
        </Text>
        <textarea
          name="comments"
          cols="5"
          rows="5"
          onChange={onInputChange}
          placeholder="Комментарий к заказу"
        />
      </InputWrap>
    </>
  );
};

export default OrderAdditionalInputs;
