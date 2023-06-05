/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/docs/en/main/file-conventions/entry.client
 */

import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import {
  HttpLink,
  ApolloLink,
  concat,
} from "@apollo/client";
startTransition(() => {
  const httpLink = new HttpLink({ uri: "https://ivoyant-strapi.azurewebsites.net//graphql" });
  const authMiddleware = new ApolloLink((operation, forward) => {
    return forward(operation);
  });
  function Client() {
    const client = new ApolloClient({
      // `restore` rehydrates the cache so it will match the cache on the server
      cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
      link: concat(authMiddleware, httpLink),
    });
    return (
      <ApolloProvider client={client}>
        <RemixBrowser />
      </ApolloProvider>
    );
  }
  hydrateRoot(document, <Client/>);
});
