import React from 'react'
import { Block, Layout, ElementWrap } from './style'

const helpLayout = () => {
  return (
    <Layout>
      <Block>
        <ElementWrap href={'/help/uniehelp'}>
          <img
            src={
              'https://unie-assets.ams3.digitaloceanspaces.com/images/guide-img1.png'
            }
          />
          <span>О Unie</span>
        </ElementWrap>
        <ElementWrap href={'/help/partnerhelp'}>
          <img
            src={
              'https://unie-assets.ams3.digitaloceanspaces.com/images/guide-img2.png'
            }
          />
          <span>Партнерам</span>
        </ElementWrap>
      </Block>
      <Block>
        <ElementWrap href={'/help/financehelp'}>
          <img
            src={
              'https://unie-assets.ams3.digitaloceanspaces.com/images/guide-img3.png'
            }
          />
          <span>Финансы</span>
        </ElementWrap>
        <ElementWrap href={`/help/shophelp?id=${1}`}>
          <img
            src={
              'https://unie-assets.ams3.digitaloceanspaces.com/images/guide-img4.png'
            }
          />
          <span>Магазин</span>
        </ElementWrap>
      </Block>
    </Layout>
  )
}

export default helpLayout
