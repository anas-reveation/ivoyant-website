import DigitalProducts from '~/components/DigitalProducts'
import HowWeBanner from '~/components/HowWeBanner'
import OurApprochCard from '~/components/OurApprochCard'
import OurMethodology from '~/components/OurMethodology'
import HowWeMiddle from '~/components/HowWeMiddle'
import { graphcmsClient } from '~/lib/graphcms'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { GetHowWeDo } from '~/graphQl/HomeQuery'
import { Helmet } from 'react-helmet'


export async function loader() {
  const result = await graphcmsClient.request(GetHowWeDo)
  return json({
    data: result,
    ENV: {
      STRAPI_URL: process.env.STRAPI_URL,
    },
  })
}

export default function HowWeDo() {
  const result = useLoaderData<typeof loader>()
  

  return (
    <>
    <Helmet>
        <title>
          {result?.data?.howWedos?.data[0]?.attributes?.HowWedoSeo?.Title}
        </title>
        {result?.data?.howWedos?.data[0]?.attributes?.HowWedoSeo?.MetaTag.map(
          (d: any, $index: any) => {
            return <meta name={d?.Title} content={d?.Description}></meta>
          }
        )}
      </Helmet>
      <HowWeBanner
        Heading={result?.data?.howWedos?.data[0]?.attributes?.Banner?.Heading}
        Subheading={result?.data?.howWedos?.data[0]?.attributes?.Banner?.Subheading}
        image={
          result.ENV.STRAPI_URL +
          result?.data?.howWedos?.data[0]?.attributes?.Banner?.Image?.data?.attributes
            ?.url
        }
      />
      <h4 className="fw-600 text-center py-4">{result?.data?.howWedos?.data[0]?.attributes?.SecondHeading}</h4>
      <div className="container">
        <div className="row justify-content-md-between justify-content-center">
          {result?.data?.howWedos?.data[0]?.attributes?.SecondCard.map(
            (d: any) => {
              return (
                <>
                  <OurApprochCard
                    title={d?.Title}
                    decription={d?.Description}
                  />
                </>
              )
            }
          )}
      </div>
      </div>
      <HowWeMiddle
        Heading={result?.data?.howWedos?.data[0]?.attributes?.ThirdHeading}
        Subheading={result?.data?.howWedos?.data[0]?.attributes?.ThirdSubheading}
      />
      <DigitalProducts />
      <OurMethodology
        Heading={result?.data?.howWedos?.data[0]?.attributes?.LastSection?.Heading}
        Subheading={result?.data?.howWedos?.data[0]?.attributes?.LastSection?.Subheading}
        image={
          result.ENV.STRAPI_URL +
          result?.data?.howWedos?.data[0]?.attributes?.LastSection?.Image?.data?.attributes
            ?.url
        }
      />
      <hr className="m-0"></hr>
    </>
  )
}
