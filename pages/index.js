import { useState } from "react";
import withData from "../lib/apollo";
import {
  ALL_CATEGORIES,
  GET_BEST_PRODUCTS,
  SEARCH,
  GET_POPULAR_CATEGORIES
} from "../queries/main";
import { graphql, Query } from "react-apollo";
//Components
import MainLayout from "../components/MainLayout";
import CategoryBestOffer from "../components/common/CategoryBestOffer";
import Head from "../components/head";
import SearchResultBlock from "../components/SearchBlock";
import TopBanner from "../components/common/TopBanner";
import BestSeller from "../components/BestSellers";
import ProductCard from "../components/ProductCard";
import PopularCategories from "../components/PopularCategories";
import BannerActual from "../components/BannerActual";

const Shop = ({ data }) => {
  const { loading, error } = data;
  if (loading) return <div />;
  if (error) return <div />;
  const [search] = useState("");

  return (
    <MainLayout section={2} bg="#F8F8F8">
      <Head
        title="2STEP - интернет-магазин. Тысячи товаров по выгодным ценам в рассрочку и кредит"
        description="Тысячи товаров из проверенных интернет-магазинов. Рассрочка, кредит и онлайн оплата. Сравнивайте цены, экономьте время, покупайте с умом.
          "
      />
      <Query query={SEARCH} variables={{ name: search }}>
        {({ loading, data }) => {
          if (loading) return <div />;
          return (
            <SearchResultBlock
              active={search !== ""}
              data={data.search.edges}
              search={search}
            />
          );
        }}
      </Query>
      <TopBanner />
      <CategoryBestOffer />
      <Query query={GET_POPULAR_CATEGORIES}>
        {({ loading, data, error }) => {
          if (loading) return <div />;
          if (error) return <div />;
          return (
            <PopularCategories
              data={data.getMainCategories}
              title={"Популярные категории"}
            />
          );
        }}
      </Query>
      <Query query={GET_BEST_PRODUCTS}>
        {({ loading, data, error }) => {
          if (loading) return <div />;
          if (error) return <div />;
          return (
            <BestSeller
              data={data.allBlocks[0]}
              title={data.allBlocks[0].name}
            />
          );
        }}
      </Query>
      <BannerActual />
      <Query query={GET_BEST_PRODUCTS}>
        {({ loading, data, error }) => {
          if (loading) return <div />;
          if (error) return <div />;
          return (
            <ProductCard
              data={data.allBlocks[1]}
              title={"Специально для Вас"}
            />
          );
        }}
      </Query>
    </MainLayout>
  );
};

export default withData(graphql(ALL_CATEGORIES)(Shop));
