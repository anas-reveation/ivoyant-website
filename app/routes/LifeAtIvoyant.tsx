import CareersAt from '~/components/CareersAt'
import HappyPlace from '~/components/HappyPlace'
import Internship from '~/components/Internship'
import LiveWork from '~/components/LiveWork'
import { graphcmsClient } from '~/lib/graphcms'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { GetLIfeAtIvoyant } from '~/graphQl/HomeQuery'
import { Helmet } from 'react-helmet'

export async function loader() {
  const result = await graphcmsClient.request(GetLIfeAtIvoyant)
  return json({
    data: result,
    ENV: {
      STRAPI_URL: process.env.STRAPI_URL,
    },
  })
}

export default function LifeAtIvoyant() {
  const result = useLoaderData<typeof loader>()

  return (
    <>
      <Helmet>
        <title>
          {
            result?.data?.lIfeAtIvoyants?.data[0]?.attributes?.LifeAtIvoyantSeo
              ?.Title
          }
        </title>
        {result?.data?.lIfeAtIvoyants?.data[0]?.attributes?.LifeAtIvoyantSeo?.MetaTag.map(
          (d: any, $index: any) => {
            return <meta name={d?.Title} content={d?.Description}></meta>
          }
        )}
        {result?.data?.lIfeAtIvoyants?.data[0]?.attributes?.LifeAtIvoyantSeo?.PropertyTag.map(
          (d: any, $index: any) => {
            return <meta name={d?.property} content={d?.content}></meta>
          }
        )}
      </Helmet>
      <div
        className="life-at"
        style={{
          backgroundImage: `linear-gradient(179.31deg, rgba(0, 0, 0, 0.5) 36.37%, rgba(170, 150, 150, 0.5) 99.67%),url(${
            result.ENV.STRAPI_URL +
            result?.data?.lIfeAtIvoyants?.data[0]?.attributes?.BgImage?.data
              ?.attributes?.url
          })`,
          backgroundSize: '100% 100%',
        }}
      >
        <div className="container">
          <div className="row align-items-center white-text align-content-center min-h-500">
            <h5 className="fs-6 ">
              {result?.data?.lIfeAtIvoyants?.data[0]?.attributes?.ShortHeading}
            </h5>
            <h2 className=" col-10 fw-bold">
              {result?.data?.lIfeAtIvoyants?.data[0]?.attributes?.LongHeading}
            </h2>
          </div>
        </div>
      </div>
      <LiveWork />
      <HappyPlace />
      <Internship />
      <CareersAt />
    </>
  )
}
