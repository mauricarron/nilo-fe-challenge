"use client";

import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "@/lib/api/apollo-client";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
