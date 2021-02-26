import { Text, FlexBlock, Block } from "../../style/common";
import { PaymentWayBox, PaymentWayItem, InstallmentBox } from "./style";
import toValidCost from "../toValidCost";
import RadioButton from "../common/RadioButton";

const OrderPaymentWay = ({
  activePaymentWay,
  handlePaymentWay,
  activePartner,
  handleHkbInstMonth,
  handleOrangeInstMonth,
  product,
  hkb,
  orange,
  price
}) => {
  const shortName = activePartner.installment.banks.map(
    val => JSON.parse(val).short_name
  );
  const isOrange =
    shortName.filter(v => v.includes("orange")).toString() === "orange";
  const isHkb = shortName.filter(v => v.includes("hkb")).toString() === "hkb";
  const { oid, slug } = product;
  return (
    <>
      <Text weight="600" marginTop="30px" size="18px">
        Способ оплаты
      </Text>
      <PaymentWayBox>
        <PaymentWayItem
          active={activePaymentWay === 0}
          onClick={() => handlePaymentWay(0)}
        >
          <Text lh="19px">Оплата онлайн</Text>
          <Text size="12px" lh="17px" color="#93979B" marginTop="7px">
            Банковской картой
          </Text>
          <FlexBlock marginTop="30px">
            <img
              src="https://unie-assets.ams3.digitaloceanspaces.com/market/mobile/visa.svg"
              alt="visa"
            />
            <img
              src="https://unie-assets.ams3.digitaloceanspaces.com/market/mobile/mastercard.svg"
              alt="mastercard"
            />
          </FlexBlock>
        </PaymentWayItem>
        {isHkb && (
          <PaymentWayItem
            active={activePaymentWay === 2}
            onClick={() => handlePaymentWay(2)}
          >
            <Text lh="19px">Товары в рассрочку / кредит HomeCredit Bank</Text>
            <FlexBlock marginTop="40px">
              <img
                src="https://unie-assets.ams3.digitaloceanspaces.com/market/desktop/home_credit_bank.svg"
                alt="home credit bank"
              />
            </FlexBlock>
          </PaymentWayItem>
        )}
        {isOrange && (
          <PaymentWayItem
            active={activePaymentWay === 1}
            onClick={() => handlePaymentWay(1)}
          >
            <Text lh="19px">Рассрочка</Text>
            <Text size="12px" lh="17px" color="#93979B" marginTop="7px">
              Покупка в рассрочку доступна для держателей кредитных карт Halyk и
              Visa QAZKOM
            </Text>
            <FlexBlock marginTop="10px">
              <img
                src="https://unie-assets.ams3.digitaloceanspaces.com/market/desktop/halyk.svg"
                alt="halyk bank"
              />
              <img
                src="https://unie-assets.ams3.digitaloceanspaces.com/market/desktop/homebank.svg"
                alt="homebank"
              />
            </FlexBlock>
            <a
              href={`https://finance.2step.me/credit-cards?redirect=https://2step.me/product/${slug}/${oid}`}
              target="_blank"
            >
              <Text
                color="#77BEFF"
                textDec="underline"
                marginTop="5px"
                cursor="pointer"
              >
                У меня нет карточки
              </Text>
            </a>
          </PaymentWayItem>
        )}
      </PaymentWayBox>
      {activePaymentWay === 1 && (
        <>
          <Text weight="600" marginTop="30px">
            Срок рассрочки
          </Text>
          {orange[0].installments.map(v => {
            return (
              <InstallmentBox>
                <RadioButton
                  color="#77BEFF"
                  height="25px"
                  onClick={() => handleOrangeInstMonth(v.month)}
                >
                  <FlexBlock jc="space-between">
                    <Block>{v.month} мес.</Block>
                    <FlexBlock ai="center" ws="pre">
                      <Text size="14px" color="#77BEFF">
                        {toValidCost(
                          (price / v.month).toFixed(0)
                        )}{" "}
                        ₸
                      </Text>
                      <Text size="12px" lh="14px" color="#BEC0C3">
                        {" "}
                        х {v.month} мес.
                      </Text>
                    </FlexBlock>
                  </FlexBlock>
                </RadioButton>
              </InstallmentBox>
            );
          })}
        </>
      )}
      {activePaymentWay === 2 && (
        <>
          <Text weight="600" marginTop="30px">
            Срок рассрочки
          </Text>
          {hkb[0].installments.map(v => {
            return (
              <InstallmentBox>
                <RadioButton
                  color="#77BEFF"
                  height="25px"
                  onClick={() => handleHkbInstMonth(v.month)}
                >
                  <FlexBlock jc="space-between">
                    <Block>{v.month} мес.</Block>
                    <FlexBlock ai="center" ws="pre">
                      <Text size="14px" color="#77BEFF">
                        {toValidCost(
                          (price / v.month).toFixed(0)
                        )}{" "}
                        ₸
                      </Text>
                      <Text size="12px" lh="14px" color="#BEC0C3">
                        {" "}
                        х {v.month} мес.
                      </Text>
                    </FlexBlock>
                  </FlexBlock>
                </RadioButton>
              </InstallmentBox>
            );
          })}
        </>
      )}
    </>
  );
};

export default OrderPaymentWay;
