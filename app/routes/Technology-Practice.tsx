import AgileConcept from '~/components/AgileConcept'
import FastPractice from '~/components/FastPractice'
import PracticeBanner from '~/components/PracticeBanner'
import { graphcmsClient } from '~/lib/graphcms'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { GetTechnologyPractice } from '~/graphQl/HomeQuery'
import { GetTechnologyPracticeSlug } from '~/graphQl/HomeQuery'
import { Helmet } from 'react-helmet'

export async function loader() {
  const result = await graphcmsClient.request(GetTechnologyPractice)
  const SlugData = await graphcmsClient.request(GetTechnologyPracticeSlug)
  return json({
    data: result,
    SlugData,
    ENV: {
      STRAPI_URL: process.env.STRAPI_URL,
    },
  })
}

export default function TechnologyPractice() {
  const result = useLoaderData<typeof loader>()

  return (
    <div>
      <Helmet>
        <title>
          {
            result?.data?.technologyPractices?.data[0]?.attributes
              ?.TechnologySeo[0]?.Title
          }
        </title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="" />
        <meta
          name="twitter:image"
          content="https://magical-granita-8b9709.netlify.app/images/home/group-2911.svg"
        />

        {result?.data?.technologyPractices?.data[0]?.attributes?.TechnologySeo[0]?.MetaTag.map(
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

        {result?.data?.technologyPractices?.data[0]?.attributes?.TechnologySeo[0]?.PropertyTag.map(
          (d: any, $index: any) => {
            return <meta property={d?.property} content={d?.content}></meta>
          }
        )}
      </Helmet>

      <PracticeBanner />
      <FastPractice />
      <div className="container mt-5 mb-4">
        <h4 className="text-center text-uppercase fw-semibold mb-4">
          {
            result?.data?.technologyPractices?.data[0]?.attributes
              ?.TechnologySecond?.Heading
          }
        </h4>
        <AgileConcept />
      </div>
    </div>
  )
}
