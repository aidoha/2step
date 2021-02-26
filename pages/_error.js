import styled from 'react-emotion';
import Head from 'next/head';
// import FinanceIcon from '../components/icons/finance'
// import ShopIcon from '../components/icons/shop'
import Link from 'next/link';

const Wrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #282f36;
  background-size: cover;
  background-position: center;
`;

const ContentWrap = styled.div`
  width: 1000px;
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const TopImage = styled.div`
  width: 100%;
  & > img {
    width: 100%;
    object-fit: contain;
  }
`;

const LinkBlock = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
`;
const Text = styled.div`
  font-family: Roboto Slab, sans-serif;
  color: #fff;
  ${props => props.bold && 'font-weight: bold'};
  font-size: 24px;
  text-align: center;
  margin-top: 10px;
`;

const Text2 = styled.div`
  color: #fff;
  ${props => props.bold && 'font-weight: bold'};
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
`;

const Content = styled.div`
  width: 100%;
`;

const Button = styled.div`
  padding: 9px 18px;
  color: #fff;
  background: ${props => props.color};
  width: 112px;
  font-weight: 600;
  display: flex;
  font-size: 12px;
  justify-content: space-around;
  align-items: center;
  border-radius: 7px;
`;

const Error = props => {
  console.log(props);
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <title>404 Not Found</title>
        <meta name="description" content="" />
        <link rel="icon" sizes="192x192" href="/static/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700&amp;subset=cyrillic,cyrillic-ext,latin-ext"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,700&amp;subset=cyrillic"
          rel="stylesheet"
        />
      </Head>

      <Wrap>
        <ContentWrap>
          <Content>
            <Text bold>Извините, страница с таким адресом не найдена</Text>
            <Text2>Советуем посетить:</Text2>
            <LinkBlock>
              <Link prefetch href="https://finance.2step.me/">
                <Button color="#3DC47E">Финансы</Button>
              </Link>
              <Link prefetch href="/">
                <Button color="#4592FF">Магазин</Button>
              </Link>
            </LinkBlock>
          </Content>
          <TopImage>
            <img
              src="https://unie-assets.ams3.digitaloceanspaces.com/images/423oo232393923oo.png"
              alt="404"
            />
          </TopImage>
        </ContentWrap>
      </Wrap>
    </React.Fragment>
  );
};

Error.getInitialProps = async ({ res, err }) => {
  const statusCode = await res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode };
};

export default Error;
