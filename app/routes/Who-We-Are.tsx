import AboutUs from '~/components/AboutUs'
import Explore from '~/components/Explore'
import Innovation from '~/components/Innovation'
import Testimonial from '~/components/Testimonial'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { graphcmsClient } from '~/lib/graphcms'
import { GetWhoWeAre } from '~/graphQl/HomeQuery'
import { Helmet } from 'react-helmet'

export async function loader() {
  const result = await graphcmsClient.request(GetWhoWeAre)
  return json({
    data: result,
    ENV: {
      STRAPI_URL: process.env.STRAPI_URL,
    },
  })
}

export default function WhoeWeAre() {
  const result = useLoaderData<typeof loader>()

  return (
    <div>
      <Helmet>
        <title>
          {result?.data?.whoWeAres?.data[0]?.attributes?.WhoWeAre?.Title}
        </title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="" />
        <meta
          name="twitter:image"
          content="https://magical-granita-8b9709.netlify.app/images/home/group-2911.svg"
        />

        {result?.data?.whoWeAres?.data[0]?.attributes?.WhoWeAre?.MetaTag.map(
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

        {result?.data?.whoWeAres?.data[0]?.attributes?.WhoWeAre?.PropertyTag.map(
          (d: any, $index: any) => {
            return <meta property={d?.property} content={d?.content}></meta>
          }
        )}
      </Helmet>
      <div className="py-5 bg-black">
        <div className="container  banner-who">
          <div className="row align-items-center justify-content-between gy-3">
            <h2 className="text-white my-5 py-4 text-md-start text-center">
              {result?.data?.whoWeAres?.data[0]?.attributes?.Heading}
            </h2>
            {result?.data?.whoWeAres?.data[0]?.attributes?.BannerData.map(
              (d: any) => {
                return (
                  <>
                    <div className="col-md-2 col-6 d-flex justify-content-md-start justify-content-center">
                      <div className="d-flex flex-column align-items-center">
                        <img
                          src={
                            result?.ENV.STRAPI_URL +
                            d?.Image?.data?.attributes?.url
                          }
                          alt={d?.Title}
                        />
                        <p className="bann-text mt-3 fw-500 text-uppercase">
                          {d?.Title}
                        </p>
                      </div>
                    </div>
                  </>
                )
              }
            )}
          </div>
        </div>
      </div>
      <AboutUs />
      <Explore />
      <Innovation />
      <Testimonial />
    </div>
  )
}
