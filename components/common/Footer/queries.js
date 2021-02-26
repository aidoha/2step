import gql from 'graphql-tag';

export const POP_CATEGORIES = gql`
  query popularCats {
    popular: getMainCategories {
      id
      name
      slug
    }
  }
`;