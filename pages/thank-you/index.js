import MainLayout from "../../components/MainLayout";
import Head from "../../components/head";
import Button from "../../components/Button";
import toValidCost from "../../components/toValidCost";
import { Text, FlexBlock, Block } from "../../style/common";
import { ImageWrap } from "../../style/thank-you";

const thankYou = () => {
  if (typeof window === "undefined") return <div />;
  const store =
    localStorage.getItem("thank-you") !== null &&
    JSON.parse(localStorage.getItem("thank-you"));
  const {
    orderId,
    product_name,
    fio,
    phone,
    email,
    mediaUrl,
    payment_way,
    price,
    partner,
    isPickup,
    address
  } = store;
  return (
    <MainLayout section={2} bg="#F8F8F8">
      <Head title="Спасибо за покупку" />
      <Block maxWidth="600px" minWidth="600px">
        <Text size="24px" lh="29px" weight="600">
          Спасибо! Ваш заказ №{orderId} принят
        </Text>
        <Text size="16px" marginTop="20px" lh="24px">
          {fio}, в ближайшее время оператор магазина свяжется с вами по
          указанному телефону: <span style={{ color: "#77BEFF" }}>{phone}</span>
        </Text>
        <Block marginTop="20px">
          <Text color="#BEC0C3">Информация о товаре</Text>
          <FlexBlock>
            <ImageWrap>
              <img
                src={JSON.parse(mediaUrl).images[0]}
                alt={product_name}
                title={product_name}
              />
            </ImageWrap>
            <Block marginTop="20px">
              <Text size="16px" weight="600">
                {product_name}
              </Text>
              <Text size="16px" weight="bold" lh="20px" marginTop="20px">
                {toValidCost(price)} ₸
              </Text>
            </Block>
          </FlexBlock>
        </Block>
        <Block marginTop="20px">
          <Text color="#BEC0C3">Продавец</Text>
          <FlexBlock marginTop="10px">
            <Text width="150px">Продавец</Text>
            <Text>{partner}</Text>
          </FlexBlock>
          <FlexBlock marginTop="5px">
            <Text width="150px">
              {isPickup === 0 ? "Самовывоз" : "Доставка Курьером"}
            </Text>
            <Text>{address}</Text>
          </FlexBlock>
        </Block>
        <Block marginTop="20px">
          <Text color="#BEC0C3">Личная информация</Text>
          <FlexBlock marginTop="10px">
            <Text width="150px">ФИО</Text>
            <Text>{fio}</Text>
          </FlexBlock>
          <FlexBlock marginTop="5px">
            <Text width="150px">E-mail</Text>
            <Text>{email}</Text>
          </FlexBlock>
          <FlexBlock marginTop="5px">
            <Text width="150px">Телефон</Text>
            <Text>{phone}</Text>
          </FlexBlock>
        </Block>
        <Block marginTop="20px">
          <Text color="#BEC0C3">Оплата</Text>
          <FlexBlock marginTop="10px">
            <Text width="150px">Способ оплаты</Text>
            <Text>
              {payment_way === 0 && "Наличными"}
              {(payment_way === 1 || payment_way === 2) && "В рассрочку"}
            </Text>
          </FlexBlock>
          <FlexBlock marginTop="5px">
            <Text width="150px">Цена</Text>
            <Text>{toValidCost(price)} ₸</Text>
          </FlexBlock>
          <FlexBlock marginTop="5px">
            <Text width="150px">Состояние</Text>
            <Text>Успешно</Text>
          </FlexBlock>
        </Block>
        <Button
          color="#F18E67"
          width="220px"
          height="50px"
          round="5px"
          top="30px"
          boxShadow="0px 5px 20px rgba(40, 47, 54, 0.05);"
        >
          На главную страницу
        </Button>
      </Block>
    </MainLayout>
  );
};

export default thankYou;
