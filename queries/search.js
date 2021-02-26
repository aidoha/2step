import gql from "graphql-tag";

export const GET_CATEGORY_FEATURES = gql`
  query getCatFeat($id: Int!) {
    features: categoryFilter(categoryId: $id)
  }
`;

export const SEARCH = gql`
  query Search($name: String!) {
    search: fuzzySearch(name: $name) {
      edges {
        node {
          id
          name
          oid
          mediaUrl
          minimalPrice
        }
      }
    }
  }
`;

export const GET_PRODUCT_LIST = gql`
  query getProd(
    $page: Int!
    $jump: Int!
    $sort: String!
    $features: [FeaturesFilterInput]
    $productName: String!
    $brands: [String]
    $partnerNames: [String]
  ) {
    productFilter(
      page: $page
      jump: $jump
      sort: $sort
      features: $features
      productName: $productName
      brands: $brands
      partnerNames: $partnerNames
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
        slug
        rating
        offerSet(active: true, checked: true) {
          edges {
            node {
              id
              finalPrice
              installment {
                maxMonth
                monthPay
              }
            }
          }
        }
      }
    }
  }
`;
