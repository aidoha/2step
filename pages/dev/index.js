import styled from 'react-emotion';
import Logo from '../../components/icons/logo'

const Wrap = styled.div`
  background: #eee;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const H1 = styled.div`
  font-family: Roboto Slab;
  font-size: 46px;
  font-weight: bold;
  color: #32364c;
  text-align: center;
  margin-top: 20px;
`;

const P = styled.div`
  color: #32364c;
  font-size: 32px;
  margin-top: 25px;
`;

const Dev = () => {
  return (
    <Wrap>
      <Logo width="150" height="150"/>
      <H1>Версия для компьютеров находится в разработке</H1>
      <P>
        Зайдите с мобильного устройства, чтобы начать покупать на нашем сайте
      </P>
    </Wrap>
  );
};

export default Dev;
