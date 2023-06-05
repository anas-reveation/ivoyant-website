import type { EntryContext } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  concat,
} from "@apollo/client";
import { getDataFromTree } from "@apollo/client/react/ssr";
export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
 ) {
  const httpLink = new HttpLink({ uri: process.env.STRAPI_URL });
  const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        token: "b4c164423c6e8b5bb4964ae45c5e0bfd3c8c49d3b2af73406093198b53df0818a00cd9da3a9fb2376e985bbc36fe1dbc629d32e8381e82c0e131a67a30875579f921cdcaf6b26451ed1ed6a20e023e922accd9c6cd8da1a2c505f89a614f07c6167ea71eef27488ef363b5b1cafc96d781e014ca63e910a8804c8e0619fa05b0",
        version: "draft",
      },
    }));
    return forward(operation);
  });
  const client = new ApolloClient({
    ssrMode: true,
    cache: new InMemoryCache(),
    link: concat(authMiddleware, httpLink),
  });
  const App = (
    <ApolloProvider client={client}>
      <RemixServer context={remixContext} url={request.url} />
    </ApolloProvider>
  );
  return getDataFromTree(App).then(() => {
    const initialState = client.extract();
    const markup = renderToString(
      <>
        {App}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__APOLLO_STATE__=${JSON.stringify(
              initialState
            ).replace(/</g, "\\u003c")}`, // The replace call escapes the < character to prevent cross-site scripting attacks that are possible via the presence of </script> in a string literal
          }}
        />
      </>
    );
    responseHeaders.set("Content-Type", "text/html");
    return new Response("<!DOCTYPE html>" + markup, {
      status: responseStatusCode,
      headers: responseHeaders,
    });
  });
}