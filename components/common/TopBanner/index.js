import { Wrap, Title, Left, Subtitle, Button, ImageWrap } from "./style";

const topBanner = ({}) => {
  return (
    <Wrap>
      <Left>
        <Title>
          Тысячи товаров из проверенных интернет-магазинов. Кредит, рассрочка и
          онлайн оплата.{" "}
        </Title>
        <Subtitle>Сравните цены</Subtitle>
        <div style={{ height: "40px" }} />
        <Button>С нами выгодно</Button>
      </Left>
      <Left>
        <ImageWrap>
          <img
            src={
              "https://unie-assets.ams3.digitaloceanspaces.com/finance/main-page/mainAction.png"
            }
          />
        </ImageWrap>
      </Left>
    </Wrap>
  );
};

export default topBanner;
