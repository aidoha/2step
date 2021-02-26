import { InputWrap, Text } from "../../style/common";
import InputMask from "react-input-mask";

const OrderInputs = ({
  fioError,
  phoneError,
  emailError,
  emailValidate,
  fioValidate,
  phoneValidate,
  onInputChange
}) => {
  return (
    <>
      <InputWrap error={fioError} padding="15px 20px">
        <Text weight="600" lh="24px" marginBottom="5px" size="18px">
          Получатель
        </Text>
        <input
          type="text"
          name="fio"
          onChange={onInputChange}
          onBlur={fioValidate}
          placeholder="ФИО"
        />
        {fioError && (
          <Text size="12px" color="#ff4f52">
            Заполните поле
          </Text>
        )}
      </InputWrap>
      <InputWrap error={phoneError} margin="10px" padding="15px 20px">
        <InputMask
          mask="+7(999) 999 99 99"
          maskChar=" "
          name="phone"
          onChange={onInputChange}
          onBlur={phoneValidate}
          placeholder="Телефон"
        />
        {phoneError && (
          <Text size="12px" color="#ff4f52">
            Заполните поле
          </Text>
        )}
      </InputWrap>
      <InputWrap
        error={emailError === 0 || emailError === 1}
        padding="15px 20px"
        margin="10px"
      >
        <input
          type="email"
          onChange={onInputChange}
          name="email"
          onBlur={emailValidate}
          placeholder="E-mail"
        />
        {emailError === 0 && (
          <Text size="12px" color="#ff4f52">
            Заполните поле
          </Text>
        )}
        {emailError === 1 && (
          <Text size="12px" color="#ff4f52">
            Заполните поле
          </Text>
        )}
      </InputWrap>
      <Text size="12px" lh="14px" color="#BEC0C3" marginTop="5px">
        E-mail используется для оповещений об изменениях статуса заказа
      </Text>
    </>
  );
};

export default OrderInputs;
