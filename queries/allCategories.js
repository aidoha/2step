import gql from 'graphql-tag';

export default gql`
  {
    categories: allCategories {
      name
      id
      slug
    }
  }
`;
