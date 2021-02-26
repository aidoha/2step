import React from 'react'
import {
  Wrap,
  Title,
  Box,
  Text,
  Left,
  Right,
  Top,
  Middle,
  InstructionList,
  InstructionItem,
  Bottom,
  TypeCredit,
  ImageWrap,
  ListWrap,
  BeginShopping,
  SaleBox
} from './style'

const list = [
  {
    id: 1,
    name: '1. Выберите период рассрочки',
    img:
      'https://unie-assets.ams3.digitaloceanspaces.com/images/Group%207-min.png'
  },
  {
    id: 2,
    name: '2. Выберите программу',
    img:
      'https://unie-assets.ams3.digitaloceanspaces.com/images/Group%208-min.png'
  },
  {
    id: 3,
    name: '3. Оформите рассрочку',
    img:
      'https://unie-assets.ams3.digitaloceanspaces.com/images/Group%209-min.png'
  },
  {
    id: 4,
    name: '4. Заполните данные и выберите способ доставки',
    img:
      'https://unie-assets.ams3.digitaloceanspaces.com/images/Group%2010-min.png'
  },
  {
    id: 5,
    name: '5. Готово',
    img:
      'https://unie-assets.ams3.digitaloceanspaces.com/images/Group%2011%20(2)-min.png'
  }
]

const helpShopEachInfo = ({ id }) => (
  <Wrap>
    {id === 2 ? (
      <Box>
        <Title>Кредит и рассрочка</Title>
        <Top>
          <Left>
            <Text sixteen>Предложение действует по всему Казахстану.</Text>
            <Text eightteen>
              В онлайн-маркете Unie.kz Вы можете получить любой товар более 10
              000 тенге в кредит от нашего партнера АО «Банк Хоум Кредит»:
            </Text>
          </Left>
          <Right>
            <img
              src={
                'https://unie-assets.ams3.digitaloceanspaces.com/images/Rectangle%206.2.png'
              }
            />
          </Right>
        </Top>
        {[
          '1. Выгодное предложение – 1,5% переплаты в месяц',
          '2. Простой и быстрый процесс оформления',
          '3. Никаких скрытых комиссий'
        ].map((val, idx) => (
          <Text>{val}</Text>
        ))}
        <Middle>
          <Title center>Как оформить товар в кредит?</Title>
          <ImageWrap middle>
            <img
              src={
                'https://unie-assets.ams3.digitaloceanspaces.com/images/26661%20(2)-min.png'
              }
            />
          </ImageWrap>
          {[
            '1 ШАГ. Выберите понравившийся товар и нажмите на кнопку «Купить в кредит».',
            '2 ШАГ. Выберите удобный для Вас срок кредитования и заполните простую форму.',
            '3 ШАГ. Вам позвонит менеджер Talapai.kz для подтверждения получения заявки и пригласит Вас в наш Центр самовывоза и кредитования TalaPoint для оформления и подписания документов.',
            '4 ШАГ. Вы приезжаете в TalaPoint с удостоверением личности и подписываете несколько документов в один визит. Мы доставляем технику в тот же день!'
          ].map((val, idx) => (
            <Text eightteen>{val}</Text>
          ))}
          <div style={{ height: '10px' }} />
          <Text>
            <b>График работы:</b> ежедневно без перерывов и выходных с 10:00 до
            18:00. Основные критерии одобрения кредита:
          </Text>
          <div style={{ height: '10px' }} />
          {[
            '1 Ваш возраст от 21 до 75 полных лет',
            '2 Удостоверение личности РК',
            '3 Регулярные пенсионные отчисления за последние три месяца'
          ].map((val, idx) => (
            <Text bold>{val}</Text>
          ))}
          <div style={{ height: '25px' }} />
          <SaleBox>
            <ImageWrap>
              <img
                src={
                  'https://unie-assets.ams3.digitaloceanspaces.com/images/35217%20(2)-min.png'
                }
              />
            </ImageWrap>
            <div>
              <Title>Рассрочка</Title>
              <Text short>
                Постоянная рассрочка на 3 месяца действует для всех участников
                TALAPAI Club. Чтобы вступить в TALAPAI Club нужно всего лишь
                зарегистрироваться на сайте!
              </Text>
            </div>
          </SaleBox>
          <div style={{ height: '25px' }} />
          <Title center>Как оформить рассрочку?</Title>
          <Text>
            Вы просто приходите в наш магазин TalaPoint с удостоверением
            личности и оформляете рассрочку без предоплат, переплат и скрытых
            комиссий!
          </Text>
          <Text>
            ВНИМАНИЕ! При расчете кредита и рассрочки привилегии участников
            TALAPAI Club - скидка 5% и бонус 2% НЕ действуют.
          </Text>
          <Text>
            При расчете рассрочки любые дополнительные скидки НЕ действуют.
          </Text>
          <Text>
            <b>Телефон службы поддержки:</b> + 7 (727) 318-79-18
          </Text>
          <Text>
            АО «Банк Хоум Кредит». Лицензия №1.2.36/40 от 11.01.2016 г., выдана
            Национальным Банком РК.
          </Text>
        </Middle>
        <div style={{ height: '25px' }} />
        <BeginShopping>Начать покупки</BeginShopping>
      </Box>
    ) : null}
    {id === 3 ? (
      <Box>
        <Title>Онлайн-рассрочка от Halyk Bank</Title>
        <Top>
          <Left>
            <Text sixteen>
              Новая функция для держателей кредитных карточек от Halyk Bank
            </Text>
            <Text eightteen>
              Оформляя заказ через сайт, Вы можете взять любой товар от 10 000
              тенге в рассрочку по кредитной карте от Qazkom в режиме онлайн.
              Для оформления рассрочки не нужно никуда ходить, можно оформить ее
              не уходя с сайта Unie.kz
            </Text>
          </Left>
          <Right>
            <img
              src={
                'https://unie-assets.ams3.digitaloceanspaces.com/banks/halyk.png'
              }
            />
          </Right>
        </Top>
        <Middle>
          <Title center>Как оформить рассрочку?</Title>
          {list.map(val => (
            <InstructionList key={val.id}>
              <InstructionItem>
                <Text eightteen>{val.name}</Text>
                <img src={val.img} />
              </InstructionItem>
            </InstructionList>
          ))}
        </Middle>
        <Text sixteen>
          Расчет по рассрочке производится полностью с банком. Банк имеет право
          отказать в рассрочки исходя из внутренних правил банка в отношении
          держателя карточки. После оформления рассрочки доставка товара будет
          произведена онлайн-маркетом Талапай в порядке стандартной очереди и в
          стандартные сроки доставки.
        </Text>
        <div style={{ height: '25px' }} />
        <Text bold>Тип кредитной карты: </Text>
        <div style={{ height: '5px' }} />
        <Bottom>
          <ListWrap>
            {[
              'Go! Express (Instant)',
              'Go! Card Standart',
              'Go! Black Premium',
              `Lady's card`,
              'American Gold',
              'American  Blue',
              'American Platinum',
              'Visa my Card'
            ].map((val, idx) => (
              <ul>
                <TypeCredit key={idx}>{val}</TypeCredit>
              </ul>
            ))}
            <div style={{ height: '15px' }} />
            <BeginShopping>Начать покупки</BeginShopping>
          </ListWrap>
          <ImageWrap>
            <img
              style={{
                width: '500px',
                height: '348px'
              }}
              src={
                'https://unie-assets.ams3.digitaloceanspaces.com/images/oangeban.jpg'
              }
            />
          </ImageWrap>
        </Bottom>
      </Box>
    ) : null}
  </Wrap>
)

export default helpShopEachInfo
