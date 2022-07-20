import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export const graphqlClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:8888/graphql",
  }),
  ssrMode: true,
});