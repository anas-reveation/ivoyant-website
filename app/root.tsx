import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import Header from './components/Header'
import Footer from './components/Footer'
import styles from '~/styles/main.css'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { graphcmsClient } from '~/lib/graphcms'
import { GetFooter } from '~/graphQl/HomeQuery'
import { GetIndustriesSlugData } from '~/graphQl/HomeQuery'
import { GetTechnologyPracticeSlug } from '~/graphQl/HomeQuery'

export async function loader() {
  const result = await graphcmsClient.request(GetFooter)
  const Slugdata = await graphcmsClient.request(GetIndustriesSlugData)
  const SlugData1 = await graphcmsClient.request(GetTechnologyPracticeSlug)

  return json({
    data: result,
    Slugdata,
    SlugData1,
    ENV: {
      STRAPI_URL: process.env.STRAPI_URL,
    },
  })
}

export default function App() {
  // const ENV = useLoaderData<typeof loader>()
  const result = useLoaderData<typeof loader>()

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <Meta />
        <Links />
      </head>
      <body>
        <Header />

        <Outlet />

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          defer
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
        ></script>

        <Footer
        // BaseUrl={ENV?.ENV?.STRAPI_URL}
        />
      </body>
    </html>
  )
}

export function links() {
  return [
    {
      href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css',
      rel: 'stylesheet',
      integrity:
        'sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx',
      crossOrigin: 'anonymous',
      media: 'all',
    },
    {
      rel: 'stylesheet',
      media: 'all',
      href: styles,
    },
    {
      rel: 'icon',
      href: '/favicon-16x16.png',

      type: 'image/png',
    },
    {
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap',
      rel: 'stylesheet',
      as: 'font',
      media: 'all',
    },
    {
      href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css',
      rel: 'stylesheet',
      media: 'all',
    },
    {
      href: 'https://code.jquery.com/jquery-migrate-3.4.0.js',
      integrity: 'sha256-0Nkb10Hnhm4EJZ0QDpvInc3bRp77wQIbIQmWYH3Y7Vw=',
      crossOrigin: 'anonymous',
    },
    {
      href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap',
      rel: 'stylesheet',
      as: 'font',
      media: 'all',
    },
    {
      href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
      rel: 'stylesheet',
      media: 'all',
    },
    {
      href: 'https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css',
      rel: 'stylesheet',
      media: 'all',
    },
  ]
}
