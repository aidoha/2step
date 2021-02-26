import React, { useState } from "react";
import Link from "next/link";
import {
  Wrap,
  MainCategories,
  MainCategoriesItem,
  AllCategoriesWrap
} from "./style";
import { Query } from "react-apollo";
import allCategories from "../../queries/allCategories";
import BurgerIcon from "../icons/burger";

// Components
import CategoriesBlock from "../CategoriesBlock";

const CategoriesMenu = () => {
  const [categoriesBlock, setCategoriesBlock] = useState(false);
  return (
    <Wrap>
      <AllCategoriesWrap onClick={() => setCategoriesBlock(true)}>
        <BurgerIcon />
        Все категории
      </AllCategoriesWrap>
      <MainCategories>
        <Query query={allCategories}>
          {({ data, loading, error }) => {
            if (loading) return <div />;
            if (error) return <div>{`Error ${error}`}</div>;
            const { categories } = data;
            const categoriesCutted = categories.slice(0, 5);
            return categoriesCutted.map(val => (
              <Link prefetch href={`/categories/${val.slug}/${val.id}`}>
                <MainCategoriesItem>{val.name}</MainCategoriesItem>
              </Link>
            ));
          }}
        </Query>
      </MainCategories>
      {categoriesBlock && (
        <CategoriesBlock
          onCategoryListClick={() => setCategoriesBlock(false)}
        />
      )}
    </Wrap>
  );
};

export default CategoriesMenu;
