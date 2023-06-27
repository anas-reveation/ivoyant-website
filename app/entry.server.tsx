import type { EntryContext } from '@remix-run/node'
import { RemixServer } from '@remix-run/react'
import { renderToString } from 'react-dom/server'
import { createSitemapGenerator } from 'remix-sitemap'

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  concat,
} from '@apollo/client'
import { getDataFromTree } from '@apollo/client/react/ssr'

const { isSitemapUrl, sitemap } = createSitemapGenerator({
  siteUrl: `${process.env.SITE_URL}`,
  generateRobotsTxt: true,
  // configure other things here
})
export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  if (isSitemapUrl(request)) return await sitemap(request, remixContext)

  const httpLink = new HttpLink({ uri: process.env.STRAPI_URL })
  const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        token: process.env.STRAPI_TOKEN,
        version: 'draft',
      },
    }))
    return forward(operation)
  })
  const client = new ApolloClient({
    ssrMode: true,
    cache: new InMemoryCache(),
    link: concat(authMiddleware, httpLink),
  })
  const App = (
    <ApolloProvider client={client}>
      <RemixServer context={remixContext} url={request.url} />
    </ApolloProvider>
  )
  return getDataFromTree(App).then(() => {
    const initialState = client.extract()
    const markup = renderToString(
      <>
        {App}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__APOLLO_STATE__=${JSON.stringify(
              initialState
            ).replace(/</g, '\\u003c')}`, // The replace call escapes the < character to prevent cross-site scripting attacks that are possible via the presence of </script> in a string literal
          }}
        />
      </>
    )
    responseHeaders.set('Content-Type', 'text/html')
    return new Response('<!DOCTYPE html>' + markup, {
      status: responseStatusCode,
      headers: responseHeaders,
    })
  })
}
