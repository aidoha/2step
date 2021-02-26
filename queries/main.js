import gql from 'graphql-tag'

export const ALL_CATEGORIES = gql`
  {
    allCategories {
      id
      name
    }
    brands: getMainBrands {
      id
      name
      mediaUrl
    }
  }
`

export const GET_CATEGORY = gql`
  query getCategory($id: Int!) {
    getRootCategory(id: $id) {
      id
      name
      subcategories {
        id
        name
        subcategories {
          id
          name
          mediaUrl
        }
      }
    }
  }
`

export const GET_SHOP_PARTNERS = gql`
  {
    partners: allShopPartners {
      id
      name
      logoUrl
    }
  }
`
export const GET_BEST_PRODUCTS = gql`
  {
    allBlocks {
      id
      name
      pos
      blockproductsSet {
        edges {
          node {
            id
            product {
              id
              oid
              name
              minimalPrice
              mediaUrl
              slug
              rating
              category{
                name
              }
              offerSet {
                edges {
                  node {
                    id
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

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
`
export const GET_POPULAR_CATEGORIES = gql`
  query getMainCats {
    getMainCategories {
      id
      name
      mediaUrl
      slug
    }
  }
`