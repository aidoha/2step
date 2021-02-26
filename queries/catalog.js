import { gql } from 'apollo-boost';

export const GET_PRODUCT_LIST = gql`
  query getProd(
    $id: Int!
    $page: Int!
    $jump: Int!
    $sort: String
    $features: [FeaturesFilterInput]
    $brands: [String]
    $partnerNames: [String]
  ) {
    productFilter(
      categoryId: $id
      page: $page
      jump: $jump
      sort: $sort
      features: $features
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
                banks
                maxMonth
                monthPay
              }
            }
          }
        }
      }
    }

    partners: allShopPartners {
      id
      name
    }

    getCategory(id: $id) {
      id
      name
    }
  }
`;
