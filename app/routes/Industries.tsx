import IndustriesCard from '~/components/IndustriesCard'
import Button from '~/components/Button'
import { graphcmsClient } from '~/lib/graphcms'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { GetIndustryPage } from '~/graphQl/HomeQuery'
import { Link } from '@remix-run/react'
import { GetIndustriesSlugData } from '~/graphQl/HomeQuery'
import { Helmet } from 'react-helmet'

export async function loader() {
  const result = await graphcmsClient.request(GetIndustryPage)
  const Slugdata = await graphcmsClient.request(GetIndustriesSlugData)

  return json({
    data: result,
    Slugdata,
    ENV: {
      STRAPI_URL: process.env.STRAPI_URL,
    },
  })
}

export default function Industries() {
  const result = useLoaderData<typeof loader>()

  return (
    <>
      <Helmet>
        <title>
          {result?.data?.industry?.data?.attributes?.IndustriesSeo?.Title}
        </title>
        {result?.data?.industry?.data?.attributes?.IndustriesSeo?.MetaTag.map(
          (d: any, $index: any) => {
            return <meta name={d?.Title} content={d?.Description}></meta>
          }
        )}
        {result?.data?.industry?.data?.attributes?.IndustriesSeo?.PropertyTag.map(
          (d: any, $index: any) => {
            return <meta name={d?.property} content={d?.content}></meta>
          }
        )}
      </Helmet>
      <div
        className="container-fluid industries-banner"
        style={{
          backgroundImage: `linear-gradient(rgba(67,67,67,.71),rgba(54,53,53,.81)),url('${
            result.ENV.STRAPI_URL +
            result?.data?.industry?.data?.attributes?.BgImage?.data?.attributes
              ?.url
          }')`,
        }}
      >
        <div className="container">
          <div className="row align-items-center min-h-500">
            <h2 className=" col-10 white-text ">
              {result?.data?.industry?.data?.attributes?.Heading}
            </h2>
          </div>
        </div>
      </div>
      <div className="container my-4 pb-4">
        <div className="row g-5">
          {result?.Slugdata?.industriesCards?.data?.map((d: any) => {
            return (
              <>
                <IndustriesCard
                  title={d?.attributes?.Title}
                  decription={d?.attributes?.Description}
                  imageurl={
                    result.ENV.STRAPI_URL +
                    d?.attributes?.Image?.data?.attributes?.url
                  }
                  link={d?.attributes?.Slug}
                />
              </>
            )
          })}
        </div>
      </div>
      <div className=" bg-secondary border-bottom mt-5">
        <div className="container py-5">
          <div className="row justify-content-center white-text text-center">
            <h2 className="fw-600 mb-0">
              {' '}
              {result?.data?.industry?.data?.attributes?.ThirdSection?.Title}
            </h2>
            <h6 className="para fw-normal py-4">
              {' '}
              {result?.data?.industry?.data?.attributes?.ThirdSection?.Subtitle}
            </h6>
            <Link
              to={
                result?.data?.industry?.data?.attributes?.ThirdSection?.Btnlink
              }
            >
              <Button
                text={
                  result?.data?.industry?.data?.attributes?.ThirdSection
                    ?.Btntext
                }
                borderColor="white"
                color="white-text"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
