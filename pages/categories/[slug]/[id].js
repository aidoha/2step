import MainLayout from "../../../components/MainLayout";
import PopularEachCategory from "../../../components/PopularEachCategory";
import Head from "../../../components/head";
import {
  LeftContainer,
  RightContainer,
  Line,
  SubcategoryName,
  PopularItem,
  PopularItemImage
} from "../../../style/categories";
import { Text, FlexBlock, Block } from "../../../style/common";
import { GET_PRODUCT_LIST } from "../../../queries/categories";
import { graphql } from "react-apollo";
import Link from "next/link";

const Category = props => {
  const { data } = props;
  const { loading, error, categoryName } = data;
  if (error) return console.log(error);
  return (
    <MainLayout
      section={2}
      bg="#F8F8F8"
      loading={loading}
    >
      <Head title={`${categoryName.name} | 2step.me`} />
      <Text
        weight="600"
        size="24px"
        lh="29px"
        marginTop="30px"
        paddingBottom="10px"
      >
        {categoryName.name}
      </Text>
      <Line />
      <FlexBlock>
        <LeftContainer>
          {categoryName.subcategories.map(val => {
            return (
              <Block marginTop="30px">
                <Link href={`/subcategories/${val.slug}/${val.id}`} prefetch>
                  <SubcategoryName size="16px" lh="19px" weight="600">
                    {val.name}
                  </SubcategoryName>
                </Link>
                {val.subcategories.map(v => {
                  return (
                    <Block marginTop="15px">
                      <Link href={`/catalog/${v.slug}/${v.id}`} prefetch>
                        <SubcategoryName size="14px" lh="17px" weight="normal">
                          {v.name}
                        </SubcategoryName>
                      </Link>
                    </Block>
                  );
                })}
              </Block>
            );
          })}
        </LeftContainer>
        <RightContainer>
          {categoryName.popularSubcategories.map(val => {
            return (
              <Block marginTop="30px">
                <FlexBlock jc="center" fw="wrap">
                  <Block marginLeft="10px">
                    <Link prefetch href={`/catalog/${val.slug}/${val.id}`}>
                      <PopularItem>
                        <PopularItemImage>
                          <img
                            src={val.mediaUrl}
                            alt={val.name}
                            title={val.name}
                          />
                        </PopularItemImage>
                        <Text lh="15px">{val.name}</Text>
                      </PopularItem>
                    </Link>
                  </Block>
                </FlexBlock>
              </Block>
            );
          })}
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
        </RightContainer>
      </FlexBlock>
    </MainLayout>
  );
};

Category.getInitialProps = async ({ query, apolloClient }) => {
  return {
    apolloClient,
    query
  };
};

export default graphql(GET_PRODUCT_LIST, {
  options: props => {
    const { id, page, sort } = props.query;
    return {
      variables: {
        id: id,
        page: page ? parseInt(page, 10) : 1,
        jump: 12,
        sort: sort || "",
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
})(Category);
