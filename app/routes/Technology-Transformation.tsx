import ServicesBanner from '~/components/ServicesBanner'
import TransformationBanner from '~/components/TransformationBanner'

import { graphcmsClient } from '~/lib/graphcms'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { GetTechnologyTransformation } from '~/graphQl/HomeQuery'
import { marked } from 'marked'
import { Helmet } from 'react-helmet'

export async function loader() {
  const result = await graphcmsClient.request(GetTechnologyTransformation)
  const content = result?.technologyTransformation?.data?.attributes?.RichText

  const technologyRich = content.map((item: any) => ({
    richText: marked(item.RichText),
    secondSectionImage: item.SecondSectionImage,
  }))
  return json({
    data: result,
    technologyRich,
    content,
    ENV: {
      STRAPI_URL: process.env.STRAPI_URL,
    },
  })
}

export default function TechnologyTransformation() {
  const result = useLoaderData<typeof loader>()

  return (
    <>
      <Helmet>
        <title>
          {
            result?.data?.technologyTransformation?.data?.attributes
              ?.TechnologyTransformationSeo?.Title
          }
        </title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="" />
        <meta
          name="twitter:image"
          content="https://magical-granita-8b9709.netlify.app/images/home/group-2911.svg"
        />

        {result?.data?.technologyTransformation?.data?.attributes?.TechnologyTransformationSeo?.MetaTag.map(
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

        {result?.data?.technologyTransformation?.data?.attributes?.TechnologyTransformationSeo?.PropertyTag.map(
          (d: any, $index: any) => {
            return <meta property={d?.property} content={d?.content}></meta>
          }
        )}
      </Helmet>
      <ServicesBanner
        heading={
          result?.data?.technologyTransformation?.data?.attributes?.Heading
        }
        subheading={
          result?.data?.technologyTransformation?.data?.attributes?.Subheading
        }
        imageurl={
          result.ENV.STRAPI_URL +
          result?.data?.technologyTransformation?.data?.attributes?.Image?.data
            ?.attributes?.url
        }
        leftheading={
          result?.data?.technologyTransformation?.data?.attributes?.Title
        }
        rightDescription={
          result?.data?.technologyTransformation?.data?.attributes?.Description
        }
      />
      <TransformationBanner />
    </>
  )
}
