import BannerWhyWe from '~/components/BannerWhyWe'
import BringCard from '~/components/BringCard'
import { useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'
import { graphcmsClient } from '~/lib/graphcms'
import { GetBringWholeSelf } from '~/graphQl/HomeQuery'
import { Helmet } from 'react-helmet'

export async function loader() {
  const result = await graphcmsClient.request(GetBringWholeSelf)
  return json({
    data: result,
    ENV: {
      STRAPI_URL: process.env.STRAPI_URL,
    },
  })
}

export default function ExplorePage() {
  const result = useLoaderData<typeof loader>()

  return (
    <>
      <Helmet>
        <title>
          {
            result?.data?.bringWholeSelves?.data[0]?.attributes
              ?.BringWholeSelfSeo?.Title
          }
        </title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="" />
        <meta
          name="twitter:image"
          content="https://magical-granita-8b9709.netlify.app/images/home/group-2911.svg"
        />

        {result?.data?.bringWholeSelves?.data[0]?.attributes?.BringWholeSelfSeo?.MetaTag.map(
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

        {result?.data?.bringWholeSelves?.data[0]?.attributes?.BringWholeSelfSeo?.PropertyTag.map(
          (d: any, $index: any) => {
            return <meta property={d?.property} content={d?.content}></meta>
          }
        )}
      </Helmet>
      <BannerWhyWe
        title={result?.data?.bringWholeSelves?.data[0]?.attributes?.Title1}
        description={
          result?.data?.bringWholeSelves?.data[0]?.attributes?.Description1
        }
        imageurl={
          result?.ENV.STRAPI_URL +
          result?.data?.bringWholeSelves?.data[0]?.attributes.Image1?.data
            ?.attributes?.url
        }
      />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <img
              src={
                result.ENV.STRAPI_URL +
                result?.data?.bringWholeSelves?.data[0]?.attributes?.Image2
                  ?.data?.attributes?.url
              }
              className=" w-75 h-100"
              alt=""
            />
          </div>
          <div className="col-12 col-md-6 px-5">
            <h4 className="fw-600 black-text text-center py-4 mt-4">
              {result?.data?.bringWholeSelves?.data[0]?.attributes?.Title2}
            </h4>
            <h5 className="black-text fw-light fs-6 lh-base">
              {
                result?.data?.bringWholeSelves?.data[0]?.attributes
                  ?.Description2
              }
            </h5>
          </div>
        </div>
      </div>
      <div className="bg-black my-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <h2 className="fw-bold white-text py-md-5 my-md-5 py-5 my-0">
                {result?.data?.bringWholeSelves?.data[0]?.attributes?.Title3}
              </h2>
            </div>
            <div className="col-12 col-md-6">
              <h5 className="fs-6 fw-light white-text py-md-5 my-md-5 py-0 my-0 pb-5 lh-base">
                {
                  result?.data?.bringWholeSelves?.data[0]?.attributes
                    ?.Description3
                }{' '}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-4">
        <div className="row ">
          {result?.data?.bringWholeSelves?.data[0]?.attributes?.LastSectionCard.map(
            (d: any) => {
              return (
                <>
                  <BringCard
                    title={d?.Title}
                    description={d?.Description}
                    imageurl={
                      result?.ENV.STRAPI_URL + d?.Image?.data?.attributes?.url
                    }
                  />
                </>
              )
            }
          )}
        </div>
      </div>
    </>
  )
}
