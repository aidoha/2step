import React from 'react';
import { Wrap, FinanceTab, MarketTab } from './style';

const ServicesSwitcher = () => {
  return (
    <Wrap>
      <FinanceTab href="https://finance.2step.me">Финансы</FinanceTab>
      <MarketTab>Маркет</MarketTab>
    </Wrap>
  );
};

export default ServicesSwitcher;
