import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
  uri: "https://graphqlpokemon.favware.tech/v8",
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        getAllPokemon: {
          keyArgs: false,
          merge(existing = [], incoming: any[]) {
            return [...existing, ...incoming];
          },
        },
        getFuzzyPokemon: {
          keyArgs: ["pokemon"],
          merge(existing = [], incoming: any[]) {
            return [...existing, ...incoming];
          },
        },
      },
    },
  },
});

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: cache,
});
