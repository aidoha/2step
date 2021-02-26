import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

export default withApollo(
  ({ ctx, headers, initialState }) =>
    new ApolloClient({
      uri: 'https://apig.2step.me/v1',
      cache: new InMemoryCache().restore(initialState || {})
    }),
  { getDataFromTree: 'ssr' }
);
