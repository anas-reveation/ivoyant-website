import OperationBanner from '~/components/OperationBanner'
import ServicesBanner from '~/components/ServicesBanner'

import { graphcmsClient } from '~/lib/graphcms'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { GetTechnologyOperation } from '~/graphQl/HomeQuery'
import { marked } from 'marked'
import { Helmet } from 'react-helmet'
export async function loader() {
  const result = await graphcmsClient.request(GetTechnologyOperation)
  const content1 = result?.technologyOperation?.data?.attributes?.RichTextData
  const technologyRich = marked(content1)
  return json({
    data: result,
    technologyRich,
    ENV: {
      STRAPI_URL: process.env.STRAPI_URL,
    },
  })
}

export default function TechnologyOperation() {
  const result = useLoaderData<typeof loader>()

  return (
    <>
      <Helmet>
        <title>
          {
            result?.data?.technologyOperation?.data?.attributes
              ?.TechnologyOperationSeo?.Title
          }
        </title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="" />
        <meta
          name="twitter:image"
          content="https://magical-granita-8b9709.netlify.app/images/home/group-2911.svg"
        />

        {result?.data?.technologyOperation?.data?.attributes?.TechnologyOperationSeo?.MetaTag.map(
          (d: any, $index: any) => {
            return <meta name={d?.Title} content={d?.Description}></meta>
          }
        )}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="iVoyant" />
        <meta
          property="og:image"
          content="https://magical-granita-8b9709.netlify.app/images/home/group-2911.svg"
        />

        {result?.data?.technologyOperation?.data?.attributes?.TechnologyOperationSeo?.PropertyTag.map(
          (d: any, $index: any) => {
            return <meta property={d?.property} content={d?.content}></meta>
          }
        )}
      </Helmet>
      <ServicesBanner
        heading={result?.data?.technologyOperation?.data?.attributes?.Heading}
        subheading={
          result?.data?.technologyOperation?.data?.attributes?.Subheading
        }
        imageurl={
          result.ENV.STRAPI_URL +
          result?.data?.technologyOperation?.data?.attributes?.Image?.data[0]
            ?.attributes?.url
        }
        leftheading={result?.data?.technologyOperation?.data?.attributes?.Title}
        rightDescription={
          result?.data?.technologyOperation?.data?.attributes?.Description
        }
      />
      <OperationBanner />
    </>
  )
}
