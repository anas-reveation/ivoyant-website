import PracticeDetailBanner from '~/components/PracticeDetailBanner'
import PracticeDetailSecond from '~/components/PracticeDetailSecond'
import PracticeDetailThird from '~/components/PracticeDetailThird'
import { Helmet } from 'react-helmet'

import { graphcmsClient } from '~/lib/graphcms'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { GetTechnologyPracticeSlug } from '~/graphQl/HomeQuery'

export async function loader({ params }: any) {
  const slugid = params.slug
  const Slugdata = await graphcmsClient.request(GetTechnologyPracticeSlug)
  const maindata = Slugdata.technologyPracticeSlugs?.data.find(
    (card: any) => card.attributes.Slug === slugid
  )

  return json({
    data: maindata,
    ENV: {
      STRAPI_URL: process.env.STRAPI_URL,
    },
  })
}

export default function PracticeDetail() {
  const maindata = useLoaderData<typeof loader>()
  return (
    <div>
      <Helmet>
        <title>{maindata?.data?.attributes?.TechnologySlugSeo?.Title}</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="" />
        <meta
          name="twitter:image"
          content="https://magical-granita-8b9709.netlify.app/images/home/group-2911.svg"
        />

        {maindata?.data?.attributes?.TechnologySlugSeo?.MetaTag.map(
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

        {maindata?.data?.attributes?.TechnologySlugSeo?.PropertyTag.map(
          (d: any, $index: any) => {
            return <meta property={d?.property} content={d?.content}></meta>
          }
        )}
      </Helmet>
      <PracticeDetailBanner
        Heading={maindata?.data?.attributes?.Heading}
        Subheading={maindata?.data?.attributes?.Subheading}
        image={
          maindata.ENV.STRAPI_URL +
          maindata?.data?.attributes?.BgImage?.data?.attributes?.url
        }
      />
      <PracticeDetailSecond
        Title={maindata?.data?.attributes?.Title}
        Description={maindata?.data?.attributes?.Description}
        image={
          maindata.ENV.STRAPI_URL +
          maindata?.data?.attributes?.Images?.data?.attributes?.url
        }
      />
      <PracticeDetailThird
        Title1={maindata?.data?.attributes?.Title1}
        Description1={maindata?.data?.attributes?.Description1}
        BulletsPoint={maindata?.data?.attributes?.BullletText}
      />
    </div>
  )
}
