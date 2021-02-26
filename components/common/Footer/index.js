import FooterSearch from "../../common/Input/FooterSearch";
import Instagram from "../../icons/instagram";
import Facebook from "../../icons/facebook";
import Visa from "../../icons/visa";
import Epay from "../../icons/epay";
import AmericanExpress from "../../icons/americanExp";
import CloudPayments from "../../icons/cloudPayments";
import MasterCardLogo from "../../icons/masterCard";
import MasterPay from "../../icons/masterPay";
import CircusPay from "../../icons/circusPay";
import {
  Wrap,
  Wrapper,
  Block,
  Bold,
  Light,
  Foot,
  Corp,
  WhiteBlock,
  Image,
  Icon
} from "./style";
import { Query } from "react-apollo";
import { POP_CATEGORIES } from "./queries";

const Footer = props => {
  return (
    <Wrap {...props}>
      <Wrapper>
        <Block>
          <Bold>Интернет - Магазин</Bold>
          <Query query={POP_CATEGORIES}>
            {({ data, loading, error }) => {
              if (loading) return <div />;
              if (error) console.log(error);
              return data.popular.map(val => (
                <Light href={`/categories/${val.slug}/${val.id}`}>
                  {val.name}
                </Light>
              ));
            }}
          </Query>
        </Block>
        <Block>
          <Bold>Сервис и Поддержка</Bold>
          <Light>FAQ</Light>
          <Light>Обратная связь</Light>
          <div style={{ height: "40px" }} />
          <Block>
            <Bold>Партнерам</Bold>
            <Light>Вход в личный кабинет</Light>
            <Light>Присоединиться </Light>
          </Block>
        </Block>
        <Block>
          <Bold>О компании</Bold>
          <Light>О нас</Light>
          <Light>Контакты</Light>
          <Light>Партнерам</Light>
          <Block>
            <Icon>
              <a target="_blank" href="https://www.instagram.com/2step.me/">
                <Instagram />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/2stepme-2199891093422151/?modal=admin_todo_tour"
              >
                <Facebook />
              </a>
            </Icon>
          </Block>
        </Block>
        <Block>
          <WhiteBlock>
            <Image>
              <img src="https://unie-assets.ams3.digitaloceanspaces.com/images/finance-card.png" />
            </Image>
            <Block>
              <div style={{ height: "12px" }} />
              <Bold noMargin>Финансы</Bold>
              <Light>Выполняет новые функции, попробуйте зарабатывать</Light>
              <Light blue href={"https://finance.2step.me/"}>
                Перейти
              </Light>
            </Block>
          </WhiteBlock>
          {/* <div style={{ height: "20px" }} />
          <Block>
            <Bold noMargin>Покупайте выгодно!</Bold>
            <div style={{ height: "5px" }} />
            <Light>Будьте в курсе акций, новинок, распродаж и скидок</Light>
          </Block>
          <FooterSearch /> */}
        </Block>
      </Wrapper>
      <Foot>
        <Corp>© TOO "Cloud Money", 2018-2019</Corp>
        <Block>
          <Visa />
          <Epay />
          <AmericanExpress />
          <CloudPayments />
          <MasterCardLogo />
          <MasterPay />
          <CircusPay />
        </Block>
      </Foot>
    </Wrap>
  );
};

export default Footer;
