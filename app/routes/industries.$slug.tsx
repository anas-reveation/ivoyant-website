// import { loader } from "../Industries"
import { GetIndustriesSlugData } from '~/graphQl/HomeQuery'
import { graphcmsClient } from '~/lib/graphcms'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import IndustriesSlugCard from '~/components/IndustriesSlugCard'
import { Helmet } from 'react-helmet'

export async function loader({ params }: any) {
  const slugid = params.slug
  const Slugdata = await graphcmsClient.request(GetIndustriesSlugData)
  const maindata = Slugdata.industriesCards.data.find(
    (card: any) => card.attributes.Slug === slugid
  )

  return json({
    data: maindata,
    ENV: {
      STRAPI_URL: process.env.STRAPI_URL,
    },
  })
}

export default function Industries() {
  const maindata = useLoaderData<typeof loader>()
  return (
    <>
      <Helmet>
        <title>{maindata?.data?.attributes?.IndustrySlugSeo?.Title}</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="" />
        <meta
          name="twitter:image"
          content="https://magical-granita-8b9709.netlify.app/images/home/group-2911.svg"
        />

        {maindata?.data?.attributes?.IndustrySlugSeo?.MetaTag.map(
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

        {maindata?.data?.attributes?.IndustrySlugSeo?.PropertyTag.map(
          (d: any, $index: any) => {
            return <meta property={d?.property} content={d?.content}></meta>
          }
        )}
      </Helmet>
      <div className="container-fluid bg-black">
        <div className="container py-5">
          <div className="row align-items-center justify-content-between mt-5">
            <div className="col-md-7 col-12">
              <h2 className=" white-text pb-5">
                {maindata?.data?.attributes?.FirstSection?.Heading}
              </h2>
              <p className="para white-text lh-base fw-normal">
                {maindata?.data?.attributes?.FirstSection?.Subheading}
              </p>
            </div>
            <div className="col-12 col-md-4">
              <img
                className="img-h-w"
                src={
                  maindata.ENV.STRAPI_URL +
                  maindata?.data?.attributes?.FirstSection?.Image?.data
                    ?.attributes?.url
                }
                alt={maindata?.data?.attributes?.FirstSection?.Heading}
              />
            </div>
          </div>
        </div>
      </div>
      <h4 className="fw-600 text-center py-4 text-uppercase">
        {maindata?.data?.attributes?.SecondSectionHeading}
      </h4>
      <div className="container mb-4">
        <div className="row justify-content-md-between justify-content-center gy-4">
          {maindata?.data?.attributes?.SecondSection?.map((d: any) => {
            return (
              <>
                <IndustriesSlugCard
                  title={d?.Title}
                  decription={d?.Description}
                />
              </>
            )
          })}
        </div>
      </div>
      <div className="bg-secondary border-bottom">
        <div className="container py-5">
          <div className="row justify-content-center justify-content-md-between align-items-center">
            <div className="col-12 col-md-7 white-text">
              <h4 className="lh-33 text-capitalize">
                {maindata?.data?.attributes?.ThirdSectionTitle}
              </h4>
            </div>
            <div className="col-12 col-md-5 lh-lg white-text">
              <ul className="para  fw-normal disc">
                {maindata?.data?.attributes?.ThirdSection?.map((d: any) => {
                  return (
                    <>
                      <li>{d?.BulletTitles}</li>
                    </>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
