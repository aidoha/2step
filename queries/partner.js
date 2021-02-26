import gql from "graphql-tag";

export const GET_PARTNER = gql`
  query getPartner($id: Int!) {
    partner: getShopPartner(id: $id) {
      id
      name
      mediaUrl
      description
      email
      site
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
`;
export const GET_PRODUCTS = gql`
  query getProducts($page: Int!, $jump: Int!, $partnerIds: [Int]!) {
    productFilter(page: $page, jump: $jump, partnerIds: $partnerIds) {
      products {
        name
        slug
        oid
        rating
        minimalPrice
        mediaUrl
      }
    }
  }
`;
