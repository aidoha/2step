import React from 'react'
import {
  Layout,
  Wrap,
  List,
  ListItem,
  ListItemWrap,
  Text,
  Box,
  Left,
  Right,
  Title,
  Top,
  Button,
  ButtonWrap,
  EclipseWrap,
  StyledEclipse,
  Personnel,
  Person
} from './style'

const personnelTop = [
  {
    img:
      'https://unie-assets.ams3.digitaloceanspaces.com/images/35058%20(6)-min.png',
    name: 'Малик Билал',
    position: 'CEO'
  },
  {
    img:
      'https://unie-assets.ams3.digitaloceanspaces.com/images/35058%20(1)%20(2)-min.png',
    name: 'Ранида Лызень',
    position: 'Директор по маркетингу'
  },
  {
    img:
      'https://unie-assets.ams3.digitaloceanspaces.com/images/35058%20(2)%20(2)-min.png',
    name: 'Наталья Черепанова',
    position: 'SEO'
  }
]

const personnelBottom = [
  {
    img:
      'https://unie-assets.ams3.digitaloceanspaces.com/images/35058%20(3)%20(2)-min.png',
    name: 'Балтабаев Асхат',
    position: 'Front-end разработчик'
  },
  {
    img:
      'https://unie-assets.ams3.digitaloceanspaces.com/images/35058%20(4)%20(2)-min.png',
    name: 'Асан Гульнур',
    position: 'UX/UI Дизайнер'
  },
  {
    img:
      'https://unie-assets.ams3.digitaloceanspaces.com/images/35058%20(5)%20(2)-min.png',
    name: 'Адилет Туткушев',
    position: 'Back-end разработчик'
  }
]

class UnieHelpPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 1
    }
    this.ref1 = React.createRef()
    this.ref2 = React.createRef()
    this.ref3 = React.createRef()
    this.ref4 = React.createRef()
    this.ref5 = React.createRef()
  }

  handleChangeId = id => {
    this.setState({ active: id })
  }

  scrollToRef1 = () => window.scrollTo(1000, this.ref1.current.offsetTop)
  scrollToRef2 = () => window.scrollTo(1000, this.ref2.current.offsetTop)
  scrollToRef3 = () => window.scrollTo(1000, this.ref3.current.offsetTop)
  scrollToRef4 = () => window.scrollTo(1000, this.ref4.current.offsetTop)
  scrollToRef5 = () => window.scrollTo(1000, this.ref5.current.offsetTop)

  render() {
    return (
      <Layout>
        <Wrap>
          <Title>О Unie</Title>
          <List>
            <ListItemWrap
              section={1}
              activeSection={this.state.active}
              onClick={() => this.handleChangeId(1)}
              onClick={this.scrollToRef1}>
              <ListItem>
                <Text>О нас</Text>
              </ListItem>
            </ListItemWrap>
            <ListItemWrap
              section={2}
              activeSection={this.state.active}
              onClick={() => this.handleChangeId(2)}
              onClick={this.scrollToRef2}>
              <ListItem>
                <Text>Наша команда</Text>
              </ListItem>
            </ListItemWrap>
            <ListItemWrap
              section={3}
              activeSection={this.state.active}
              onClick={() => this.handleChangeId(3)}
              onClick={this.scrollToRef3}>
              <ListItem>
                <Text>Контакты</Text>
              </ListItem>
            </ListItemWrap>
            <ListItemWrap
              section={4}
              activeSection={this.state.active}
              onClick={() => this.handleChangeId(4)}
              onClick={this.scrollToRef4}>
              <ListItem>
                <Text>Карьера в Unie</Text>
              </ListItem>
            </ListItemWrap>
            <ListItemWrap
              section={5}
              activeSection={this.state.active}
              onClick={() => this.handleChangeId(5)}
              onClick={this.scrollToRef5}>
              <ListItem>
                <Text>Вопросы и ответы</Text>
              </ListItem>
            </ListItemWrap>
          </List>
        </Wrap>
        <Box>
          <div ref={this.ref1}>
            <Top>
              <Left>
                <Title title>Unie.kz – это не интернет-магазин.</Title>
                <Text>
                  Мы многофункциональный сервис, который предлагает в едином
                  пространстве финансовые продукты и широкий, постоянно
                  обновляющийся ассортимент товаров и услуг.
                </Text>
                <div style={{ height: '50px' }} />
                <img
                  src={
                    'https://unie-assets.ams3.digitaloceanspaces.com/images/43977%20(2)-min.png'
                  }
                />
                <div style={{ height: '50px' }} />
                <Title title>Мы делаем всё за Вас</Title>
                <Text>
                  Мы стараемся работать по принципу <b>«все включено»</b> чтобы
                  избавить Вас от необходимости постоянно искать и сравнивать на
                  разных сайтах.
                </Text>
                <img
                  src={
                    'https://unie-assets.ams3.digitaloceanspaces.com/images/32595%20(2)-min.png'
                  }
                />
              </Left>
              <Right>
                <img
                  src={
                    'https://unie-assets.ams3.digitaloceanspaces.com/images/26685%20(2)-min.png'
                  }
                />
                <Text>
                  Мы ценим Ваше время, силы и деньги, поэтому агрегировали для
                  Вас множество интернет-магазинов, сервисов и финансовых
                  продуктов в одном месте. Удобная система оплаты и гибкая
                  система доставки заменят Вам поход в магазин или компанию по
                  представлению услуг.
                </Text>
                <div style={{ height: '25px' }} />
                <ButtonWrap>
                  <Button shop href={'/'}>
                    В магазин
                  </Button>
                  <Button finance href={'https://finance.2step.me/'}>
                    В финансы
                  </Button>
                </ButtonWrap>
                <div style={{ height: '50px' }} />
                <img
                  src={
                    'https://unie-assets.ams3.digitaloceanspaces.com/images/59867%20(2)-min-w232.png'
                  }
                />
                <Text>
                  <b>Мы ценим Ваше время, силы и деньги</b>, поэтому
                  агрегировали для Вас множество интернет-магазинов, сервисов и
                  финансовых продуктов в одном месте. Удобная система оплаты и
                  гибкая система доставки заменят Вам поход в магазин или
                  компанию по представлению услуг.
                </Text>
              </Right>
            </Top>
            <EclipseWrap>
              <StyledEclipse>
                <Text>
                  Наши преимущества - это не только покупки посредством онлайн
                  оплаты или через QR-код в оффлайн, но и возможность
                  приобретать все на нашем сервисе в кредит или рассрочку. Вы
                  можете покупать сейчас, а платить потом, без ощутимого ущерба
                  для бюджета.
                </Text>
              </StyledEclipse>
            </EclipseWrap>
            <Top>
              <Left>
                <Text>
                  <b>Наша цель</b> - стать онлайн площадкой обширных услуг и
                  широких возможностей для наших клиентов. Мы будем стремиться
                  делать это благодаря объемной линейке услуг и товаров,
                  клиентоориентированности, оперативности и качеству. Мы хотим
                  быть компанией, которую выбирают для того, чтобы удовлетворить
                  потребности и стремления людей к комфортной жизни.
                </Text>
                <div style={{ height: '50px' }} />
                <img
                  src={
                    'https://unie-assets.ams3.digitaloceanspaces.com/images/Group%207%20(2)sssssss.png'
                  }
                />
              </Left>
              <Right>
                <img
                  src={
                    'https://unie-assets.ams3.digitaloceanspaces.com/images/59867%20(2)-min-w232.png'
                  }
                />
                <Text thirty>
                  Зайдя всего в одно пространство с понятным интерфейсом и
                  удобной подачей информации, Вы сможете:
                </Text>
              </Right>
            </Top>
            {[
              '•	оформить кредит на любые цели по выгодным для Вас условиям в банке или микрофинансовой организации;',
              '•	оформить кредитную или дебетовую карту;',
              '•	оформить страховой полис для того, чтобы защитить свое здоровье, авто и имущество от непредвиденных ситуаций;',
              '•	приобрести товары или услуги в рассрочку;',
              '•	выбрать и купить электронику, ТВ, ноутбуки телефоны, бытовую технику, одежду, обувь, аксессуары, товары для детей, средства гигиены, товары для дома, строительства и ремонта и многое другое;',
              '•	заказать еду, выбрать кафе или ресторан, забронировать столик;',
              '•	выбрать салон красоты и записаться к мастеру;',
              '•	найти место для проведения досуга с друзьями и родными;',
              '•	выбрать врача или медицинское учреждение и многое другое.'
            ].map((val, idx) => (
              <Text key={idx}>{val}</Text>
            ))}
          </div>
          <div ref={this.ref2}>
            <div style={{ height: '50px' }} />
            <Title center title>
              Наша команда
            </Title>
            <Personnel>
              {personnelTop.map((val, idx) => (
                <Person key={idx}>
                  <img src={val.img} />
                  <Text roboto>{val.name}</Text>
                  <Text position twelve>
                    {val.position}
                  </Text>
                </Person>
              ))}
            </Personnel>
            <Personnel>
              {personnelBottom.map((val, idx) => (
                <Person key={idx}>
                  <img src={val.img} />
                  <Text roboto>{val.name}</Text>
                  <Text position twelve>
                    {val.position}
                  </Text>
                </Person>
              ))}
            </Personnel>
          </div>
          <div style={{ height: '50px' }} />
          <div ref={this.ref3}>
            <Title center title>
              Наши контакты
            </Title>
            <Top>
              <Left>
                <div style={{ background: 'red', height: '300px' }} />
              </Left>
              <div style={{ width: '50px' }} />
              <Right>
                <Title>Адрес</Title>
                <Text>г. Алматы </Text>
                <Text>ул. Розыбакиева 289/9, блок 6, этаж 17, офис 53</Text>
                <div style={{ height: '50px' }} />
                <Title>Контакты</Title>
                <Text>info@unie.kz</Text>
                <Text>+7 787 788 89 99</Text>
              </Right>
            </Top>
          </div>
        </Box>
      </Layout>
    )
  }
}

export default UnieHelpPage
