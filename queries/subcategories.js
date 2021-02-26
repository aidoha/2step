import gql from "graphql-tag";

export const GET_PRODUCT_LIST = gql`
  query getProd(
    $id: Int!
    $page: Int!
    $jump: Int!
    $sort: String!
    $features: [FeaturesFilterInput]
  ) {
    productFilter(
      categoryId: $id
      page: $page
      jump: $jump
      sort: $sort
      features: $features
    ) {
      hasNextPage
      totalPages
      filterCounts
      products {
        id
        name
        mediaUrl
        oid
        minimalPrice
        offerSet(active: true, checked: true) {
          edges {
            node {
              id
            }
          }
        }
      }
    }
    categoryName: getCategory(id: $id) {
      id
      name
      popularSubcategories {
        id
        name
        mediaUrl
        slug
      }
      subcategories {
        id
        name
        slug
        popularProducts(count: 10) {
          name
          slug
          oid
          minimalPrice
          rating
          mediaUrl
        }
        subcategories {
          id
          name
          slug
        }
      }
    }
    allCats: allCategories {
      id
      name
      slug
    }
    partners: allShopPartners {
      id
      name
      logoUrl
    }
  }
`;
