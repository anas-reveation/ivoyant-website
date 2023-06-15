import Banner from '~/components/Banner'
import Services from '~/components/Services'
import NumberOF from '~/components/NumberOF'
import Customer from '~/components/Customer'
import Partners from '~/components/Partners'
import CaseStudies from '~/components/CaseStudies'
import Culture from '~/components/Culture'
import { Link, useLoaderData } from '@remix-run/react'
import IndustriesCard from '~/components/IndustriesCard'
import { loader } from './_index'
import { Helmet } from 'react-helmet'

export default function Home() {
  const result = useLoaderData<typeof loader>()

  return (
    <>
      <Helmet>
        <title>
          {result?.data?.homePages?.data[0]?.attributes?.HomePageSeo?.Title}
        </title>
        {result?.data?.homePages?.data[0]?.attributes?.HomePageSeo?.MetaTag.map(
          (d: any, $index: any) => {
            return <meta name={d?.Title} content={d?.Description}></meta>
          }
        )}
        {result?.data?.homePages?.data[0]?.attributes?.HomePageSeo?.PropertyTag.map(
          (d: any, $index: any) => {
            return <meta name={d?.property} content={d?.content}></meta>
          }
        )}
      </Helmet>
      <div className="">
        <div className="">
          <Banner />
          <h4 className="black-text text-center fw-600 py-3 text-uppercase">
            {result?.data?.homePages?.data[0]?.attributes?.Serviceheading}{' '}
          </h4>
          <div className="container mb-4">
            <div className="row justify-content-center justify-content-md-between gy-4">
              {result?.data?.homePages?.data[0]?.attributes?.Servivecard.map(
                (d: any) => {
                  return (
                    <>
                      <div className="col-12 col-xl-4 col-md-6 mb-4 mb-md-0">
                        <Services
                          title={d?.Title}
                          decription={d?.Description}
                          imageurl={
                            result.ENV.STRAPI_URL +
                            d?.Logo?.data?.attributes?.url
                          }
                          link={d?.Btnlink}
                        />
                      </div>
                    </>
                  )
                }
              )}
            </div>
          </div>
          <div
            className=" background my-4"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 0.32%),url(./images/Home/bg-inno.svg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="container py-5">
              <div className="row justify-content-center justify-content-md-between gy-4 ">
                {result?.data?.homePages?.data[0]?.attributes?.ThirdCard.map(
                  (d: any) => {
                    return (
                      <>
                        <NumberOF
                          heading={d?.Title}
                          subheading={d?.Description}
                          imageurl={
                            result.ENV.STRAPI_URL +
                            d?.Image?.data?.attributes?.url
                          }
                        />
                      </>
                    )
                  }
                )}
              </div>
            </div>
          </div>
          <div className="container-fluid bg-secondary">
            <div className="container">
              <h4 className="fw-600 font-16 white-text text-center pt-4 mb-1 text-uppercase">
                {
                  result?.data?.homePages?.data[0]?.attributes
                    ?.Industryshorthead
                }
              </h4>
              <h4 className="fw-600 white-text text-center py-4">
                {result?.data?.homePages?.data[0]?.attributes?.IndustryLonghead}
              </h4>
              <div className="row justify-content-center justify-content-lg-between gx-5 gy-5">
                {result?.Slugdata?.industriesCards?.data
                  ?.slice(0, 4)
                  .map((d: any) => {
                    return (
                      <>
                        <IndustriesCard
                          title={d?.attributes?.Title}
                          decription={d?.attributes?.Description}
                          imageurl={
                            result.ENV.STRAPI_URL +
                            d?.attributes?.Image?.data?.attributes?.url
                          }
                          link={'/industries/' + d?.attributes?.Slug}
                        />
                      </>
                    )
                  })}
              </div>
              <div className="d-flex justify-content-md-end justify-content-center py-5">
                <Link
                  to="/industries"
                  className="bann-text text-decoration-none fw-semibold space-m"
                >
                  View All
                </Link>
              </div>
            </div>
          </div>
          <Customer />
          <Partners />
          <CaseStudies />
          <Culture />
        </div>
      </div>
    </>
  )
}
