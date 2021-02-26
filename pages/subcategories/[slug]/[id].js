import MainLayout from "../../../components/MainLayout";
import Head from "../../../components/head";
import PopularEachCategory from "../../../components/PopularEachCategory";
import { Line, SubcategoryName } from "../../../style/subcategories";
import { FlexBlock, Block, Text } from "../../../style/common";
import { GET_PRODUCT_LIST } from "../../../queries/subcategories";
import { graphql } from "react-apollo";
import Link from "next/link";

const Subcategories = ({ data }) => {
  const { loading, networkStatus, categoryName } = data;
  if (loading) return <div />;
  return (
    <MainLayout section={2} bg="#F8F8F8">
      {!loading && !networkStatus !== 3 ? (
        <Head title={`${categoryName.name} | 2step.me`} />
      ) : null}
      <Text
        weight="600"
        size="24px"
        lh="29px"
        marginTop="30px"
        paddingBottom="10px"
        Î
      >
        {!loading && !networkStatus !== 3 ? categoryName.name : null}
      </Text>
      <Line />
      <FlexBlock>
        <Block maxWidth="263px" minWidth="263px" height="max-content">
          {categoryName.subcategories.map(val => {
            return (
              <Block marginTop="30px">
                <Link prefetch href={`/catalog/${val.slug}/${val.id}`}>
                  <SubcategoryName>{val.name}</SubcategoryName>
                </Link>
              </Block>
            );
          })}
        </Block>
        <FlexBlock fw="wrap" jc="space-between">
          <FlexBlock
            fd="column"
            height="100%"
            marginTop="50px"
            marginLeft="25px"
          >
            {categoryName.subcategories.map(val => {
              return <PopularEachCategory {...val} />;
            })}
          </FlexBlock>
        </FlexBlock>
      </FlexBlock>
    </MainLayout>
  );
};

Subcategories.getInitialProps = async ({ apolloClient, query }) => {
  return {
    apolloClient,
    query
  };
};

export default graphql(GET_PRODUCT_LIST, {
  options: props => {
    return {
      variables: {
        id: props.query.id,
        page: props.query.page ? parseInt(props.query.page, 10) : 1,
        jump: 12,
        sort: props.query.sort || "",
        features: Object.keys(props.query)
          .map(v => {
            return { name: v, value: props.query[v] };
          })
          .filter(
            i =>
              i.name !== "id" &&
              i.name !== "sort" &&
              i.name !== "page" &&
              i.name !== "magazin" &&
              i.name !== "text" &&
              i.name !== "slug" &&
              i.name !== "brend" &&
              i.name !== "utm_source" &&
              i.name !== "utm_medium" &&
              i.name !== "utm_campaign" &&
              i.name !== "utm_content" &&
              i.name !== "utm_term"
          )
      },
      notifyOnNetworkStatusChange: true
    };
  }
})(Subcategories);
