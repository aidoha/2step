import Link from "next/link";
import { GET_PARTNER, GET_PRODUCTS } from "../../queries/partner";
import { graphql, Query } from "react-apollo";
import withData from "../../lib/apollo";
import MainLayout from "../../components/MainLayout";
import Head from "../../components/head";
import Rate from "../../components/common/Rating";
import toValidCost from '../../components/toValidCost'
import {
  LogoBlock,
  Image,
  Title,
  Wrap,
  Row,
  Text,
  Block,
  Description,
  Line,
  Popular,
  Item,
  ImageWrap,
  ProductName,
  ItemWrap,
  ScrollWrap,
  Container,
  Price
} from "../../style/partner";


class Partner extends React.Component {
  render() {
    const { loading, error, partner } = this.props.data;
    if (loading) return <div />;
    if (error) return <div />;
    return (
      <MainLayout
        width={"100%"}
        padding={"0px 0px 30px 0px"}
      >
        <Head title="Партнер | 2step.me" />
        <LogoBlock>
          <Image>
            <img src={partner.mediaUrl} alt={partner.name} />
          </Image>
        </LogoBlock>
        <Wrap>
          <Title>{partner.name}</Title>
          <Row margin="20px" jc="space-between">
            <Block>
              <Text gray>Адрес</Text>
              <Text>{partner.addressSet.edges[0].node.street}</Text>
            </Block>
            <Block>
              <Text gray>Почта</Text>
              <Text>{partner.email}</Text>
            </Block>
            <Block>
              <Text gray>Официальная страница</Text>
              <Text>{partner.site}</Text>
            </Block>
          </Row>
          <Description>{partner.description}</Description>
        </Wrap>
        <Line />
        <Wrap>
          <Popular>Популярные товары {partner.name}</Popular>
          <ScrollWrap>
            <Container>
              <Query
                query={GET_PRODUCTS}
                variables={{
                  page: 1,
                  jump: 8,
                  partnerIds: parseInt(this.props.url.query.id, 10)
                }}
              >
                {({ loading, data, error }) => {
                  if (loading) return <div />;
                  if (error) return <div />;
                  return data.productFilter.products.map(item => {
                    const { name, oid, slug, mediaUrl, minimalPrice } = item;
                    return (
                      <Link
                        prefetch
                        passHref
                        href={`/product?text=${slug}&id=${oid}`}
                      >
                        <ItemWrap>
                          <Item>
                            <ImageWrap>
                              <img
                                src={JSON.parse(mediaUrl).images[0]}
                                alt={name}
                                title={name}
                              />
                            </ImageWrap>
                            <ProductName>{name}</ProductName>
                            <div>
                              <Rate data={item} margin="0px" />
                              {minimalPrice !== null ? (
                                <Price>{toValidCost(minimalPrice)} ₸</Price>
                              ) : (
                                <Price>Нет в наличии</Price>
                              )}
                            </div>
                          </Item>
                        </ItemWrap>
                      </Link>
                    );
                  });
                }}
              </Query>
            </Container>
          </ScrollWrap>
        </Wrap>
      </MainLayout>
    );
  }
}

export default withData(
  graphql(GET_PARTNER, {
    options: props => ({
      variables: {
        id: props.url.query.id
      }
    })
  })(Partner)
);
