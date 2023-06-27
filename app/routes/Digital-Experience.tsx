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
          {
            result?.data?.digitalExpriences?.data[0]?.attributes
              ?.DigitalExprienceSeo?.Title
          }
        </title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="" />
        <meta
          name="twitter:image"
          content="https://magical-granita-8b9709.netlify.app/images/home/group-2911.svg"
        />

        {result?.data?.digitalExpriences?.data[0]?.attributes?.DigitalExprienceSeo?.MetaTag.map(
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

        {result?.data?.digitalExpriences?.data[0]?.attributes?.DigitalExprienceSeo?.PropertyTag.map(
          (d: any, $index: any) => {
            return <meta property={d?.property} content={d?.content}></meta>
          }
        )}
      </Helmet>
      <ServicesBanner
        heading={
          result?.data?.digitalExpriences?.data[0]?.attributes?.DigitalBanner
            ?.Heading
        }
        subheading={
          result?.data?.digitalExpriences?.data[0]?.attributes?.DigitalBanner
            ?.Subheading
        }
        imageurl={
          result.ENV.STRAPI_URL +
          result?.data?.digitalExpriences?.data[0]?.attributes?.DigitalBanner
            ?.Image?.data?.attributes?.url
        }
        leftheading={
          result?.data?.digitalExpriences?.data[0]?.attributes?.DigitalBanner
            ?.Title
        }
        rightDescription={
          result?.data?.digitalExpriences?.data[0]?.attributes?.DigitalBanner
            ?.Description
        }
      />
      <DesignProcess
        Heading={
          result?.data?.digitalExpriences?.data[0]?.attributes?.SecondHeading
        }
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
