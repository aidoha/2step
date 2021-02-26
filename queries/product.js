import { gql } from 'apollo-boost';

export const GET_PRODUCT = gql`
  query getProduct($id: Int!) {
    product: getProduct(id: $id) {
      id
      name
      slug
      mediaUrl
      description
      category {
        id
        name
        slug
      }
      brand {
        id
        name
        slug
      }
      rating
      ratingRatio
      reviewSet(first: 10) {
        edges {
          node {
            uName
            rate
            description
            created
          }
        }
      }
      # viewCount
      oid
      minimalPrice
      features
      similarProducts {
        id
        name
        mediaUrl
        rating
        minimalPrice
        slug
        oid
      }
      offerSet(active: true, checked: true) {
        edges {
          node {
            id
            oid
            finalPrice
            deliveryPrice(cityId: 1)
            installment {
              banks
              maxMonth
              monthPay
            }
            shopPartner {
              name
              logoUrl
              reviewsAvg
              reviewsCount
              addressSet {
                edges {
                  node {
                    id
                    street
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
