import { V2_MetaFunction } from '@remix-run/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { json } from '@remix-run/node'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Home from './Home'
import { useLoaderData } from '@remix-run/react'
import { graphcmsClient } from '~/lib/graphcms'
import { GetHomePage } from '~/graphQl/HomeQuery'
import { GetIndustriesSlugData } from '~/graphQl/HomeQuery'
import { Helmet } from 'react-helmet'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'New Remix App' }]
}

export async function loader() {
  const result = await graphcmsClient.request(GetHomePage)
  const Slugdata = await graphcmsClient.request(GetIndustriesSlugData)
  return json({
    data: result,
    Slugdata,
    ENV: {
      STRAPI_URL: "https://ivoyant-strapi.azurewebsites.net",
    },
  })
}

export default function Index() {
  const result = useLoaderData<typeof loader>()

  return (
    <div>
      <Home />
    </div>
  )
}
