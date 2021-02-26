import { Wrap, Block, Image } from './style'

const bannerActual = () => (
  <Wrap>
    <Block>
      <Image>
        <img src="https://unie-assets.ams3.digitaloceanspaces.com/market/desktop/banner-1.png"/>        
      </Image>
    </Block>
    <Block>
      <Block>
        <Image>
          <img src="https://unie-assets.ams3.digitaloceanspaces.com/market/desktop/banner-2.png"/>        
        </Image>
      </Block>
      <div style={{ height: '10px' }}/>
      <Block>
        <Image>
          <img src="https://unie-assets.ams3.digitaloceanspaces.com/market/desktop/banner-3.png"/>        
        </Image>
      </Block>
    </Block>
  </Wrap>
)

export default bannerActual