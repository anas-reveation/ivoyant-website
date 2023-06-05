import DesignProcess from '~/components/DesignProcess'
import ServiceDevlopment from '~/components/ServiceDevlopment'
import ServicesBanner from '~/components/ServicesBanner'
import { graphcmsClient } from '~/lib/graphcms'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { GetDigitalExprience } from '~/graphQl/HomeQuery'
import { Helmet } from 'react-helmet'

export async function loader() {
  const result = await graphcmsClient.request(GetDigitalExprience)
  return json({
    data: result,
    ENV: {
      STRAPI_URL: process.env.STRAPI_URL,
    },
  })
}

export default function DigitalExperience() {
  const result = useLoaderData<typeof loader>()
  
  return (
    <>
    <Helmet>
        <title>
          {result?.data?.digitalExpriences?.data[0]?.attributes?.DigitalExprienceSeo?.Title}
        </title>
        {result?.data?.digitalExpriences?.data[0]?.attributes?.DigitalExprienceSeo?.MetaTag.map(
          (d: any, $index: any) => {
            return <meta name={d?.Title} content={d?.Description}></meta>
          }
        )}
      </Helmet>
      <ServicesBanner
        heading={result?.data?.digitalExpriences?.data[0]?.attributes?.DigitalBanner?.Heading}
        subheading={result?.data?.digitalExpriences?.data[0]?.attributes?.DigitalBanner?.Subheading}
        imageurl={
          result.ENV.STRAPI_URL +
          result?.data?.digitalExpriences?.data[0]?.attributes?.DigitalBanner?.Image?.data?.attributes
            ?.url
        }
        leftheading={result?.data?.digitalExpriences?.data[0]?.attributes?.DigitalBanner?.Title}
        rightDescription={result?.data?.digitalExpriences?.data[0]?.attributes?.DigitalBanner?.Description}
      />
      <DesignProcess
        Heading={result?.data?.digitalExpriences?.data[0]?.attributes?.SecondHeading}
        Image={
          result.ENV.STRAPI_URL +
          result?.data?.digitalExpriences?.data[0]?.attributes?.SecondImg?.data
            ?.attributes?.url
        }
      />
      <ServiceDevlopment />
    </>
  )
}
