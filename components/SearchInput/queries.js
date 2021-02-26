import gql from 'graphql-tag';

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
          slug
        }
      }
    }
  }
`;
