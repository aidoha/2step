import React from 'react'
import {
  Wrap,
  Title,
  List,
  ListItem,
  ListItemWrap,
  Layout,
  Text
} from './style'
import HelpShopEachInfo from '../HelpShopEachInfo'
const list = [
  { name: 'Оплата', id: 1 },
  { name: 'Кредит и рассрочка', id: 2 },
  { name: 'Онлайн-рассрочка от Halyk Bank', id: 3 },
  { name: 'Cloud Payments', id: 4 },
  { name: 'Онлайн-кредитования от Alfa Bank', id: 5 }
]

class HelpShopNav extends React.Component {
  state = {
    active: 1
  }

  handleChangeId = id => {
    this.setState({ active: id })
  }

  render() {
    return (
      <Layout>
        <Wrap>
          <Title>Магазин</Title>
          <List>
            {list.map(val => (
              <ListItemWrap
                section={val.id}
                activeSection={this.state.active}
                key={val.id}
                onClick={() => this.handleChangeId(val.id)}>
                <ListItem href={`/help/shophelp?id=${val.id}`}>
                  <Text>{val.name}</Text>
                </ListItem>
              </ListItemWrap>
            ))}
          </List>
        </Wrap>
        <HelpShopEachInfo id={this.state.active} />
      </Layout>
    )
  }
}

export default HelpShopNav
