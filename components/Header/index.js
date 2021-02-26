import React from 'react';
import { Wrap, ShopHeader, CategoriesMenuWrapper, Layout, ToMainPage, IconWrap, FlexStart, CityText, FlexEnd, White } from './style';
import Link from 'next/link'
// Components
import ServicesSwitcher from '../ServicesSwitcher';
import SearchInput from '../SearchInput';
import CategoriesMenu from '../CategoriesMenu';
//Icons
import ShopLogoIcon from '../icons/shopLogo';
import CityIcon from '../icons/cityIcon'

const Header = () => {
  return (
    <Wrap>
      <Layout>
        <ServicesSwitcher />
      </Layout>
      <ShopHeader>
        <Layout>
          <FlexStart>
            <ToMainPage href="/">
              <ShopLogoIcon />
            </ToMainPage>
            <SearchInput />
          </FlexStart>
          <FlexEnd>
            <IconWrap>
              <CityIcon/>
            </IconWrap>
            <CityText>Алматы</CityText>
          </FlexEnd>
        </Layout>
      </ShopHeader>
      <CategoriesMenuWrapper>
        <Layout>
          <CategoriesMenu />
        </Layout>
      </CategoriesMenuWrapper>
    </Wrap>
  );
};

export default Header;
