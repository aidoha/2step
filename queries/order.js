import gql from "graphql-tag";

export const GET_OFFER = gql`
  query getOffer($id: Int!) {
    offer: getOffersByIds(ids: [$id]) {
      id
      finalPrice
      deliveryPrice(cityId: 1)
      prodId {
        id
        name
        oid
        slug
        mediaUrl
        offerSet(active: true, checked: true) {
          edges {
            node {
              id
              finalPrice
              deliveryPrice(cityId: 1)
              installment {
                banks
              }
              shopPartner {
                name
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
      shopPartner {
        id
        name
        addressSet {
          edges {
            node {
              id
              street
              city {
                id
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const EPAY_QUERY = gql`
  query getEpay($orderId: Int!, $months: Int) {
    getEpayPayment(orderId: $orderId, months: $months) {
      orderId
      amount
      months
      item
      urlPayment
    }
  }
`;

export const CREATE_ORDER = gql`
  mutation createOrd(
    $offerId: Int!
    $ordFio: String!
    $ordEmail: String!
    $ordComments: String
    $ordPhone: String!
    $ordAddress: String
    $instId: Int
    $isPickup: Boolean
    $quantity: Int
    $iin: String
  ) {
    createOrder(
      userId: 1
      cityId: 1
      offerId: $offerId
      clientName: $ordFio
      email: $ordEmail
      address: $ordAddress
      comments: $ordComments
      phone: $ordPhone
      isPickup: $isPickup
      instId: $instId
      quantity: $quantity
      iin: $iin
    ) {
      orderId
    }
  }
`;
