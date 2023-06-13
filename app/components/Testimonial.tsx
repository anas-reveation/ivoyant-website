import { Link } from '@remix-run/react'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { loader } from '~/routes/WhoWeAre'

export default function Testimonial() {
  const result = useLoaderData<typeof loader>()

  return (
    <div className="bg-secondary pt-1 pb-5 mt-5 test-negative">
      <h4 className="white-text text-center fw-600 my-3">
        {result?.data?.whoWeAres?.data[0]?.attributes?.Testimonial?.Heading}
      </h4>
      <div className="container pb-5">
        <div className="row ">
          <div
            className="col-md-6 col-12 bg-test1  testi-c"
            style={{
              backgroundImage: `url(${
                result?.ENV?.STRAPI_URL +
                result?.data?.whoWeAres?.data[0]?.attributes?.Testimonial?.Image
                  ?.data?.attributes?.url
              })`,
            }}
          >
            <div></div>
          </div>
          <div
            className="col-md-6 col-12 bg-test2 testi-c"
            style={{
              backgroundImage: `url('./images/Home/test2.svg')`,
            }}
          >
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators indicators">
                {result?.data?.whoWeAres?.data[0]?.attributes?.Testimonial?.RightSection?.map(
                  (d: any, $index: any) => {
                    return (
                      <>
                        <button
                          type="button"
                          className={$index === 0 ? 'active' : ''}
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to={$index}
                          aria-label={`Slide ${$index + 1}`}
                        ></button>
                      </>
                    )
                  }
                )}
              </div>
              <div className="carousel-inner">
                {result?.data?.whoWeAres?.data[0]?.attributes?.Testimonial?.RightSection?.map(
                  (d: any, $index: any) => {
                    return (
                      <>
                        <div
                          className={
                            $index === 0
                              ? 'carousel-item active p-3'
                              : 'carousel-item p-3'
                          }
                          key={$index}
                        >
                          <div className="text-white ">
                            <div className="d-flex justify-content-center align-items-center mb-3">
                              <div>
                                <h5 className="text-center">{d?.Title}</h5>
                                <p className="text-center f-14 fw-light mb-0">
                                  {d?.Subtitle}
                                </p>
                              </div>
                              <div className="ms-4">
                                <img
                                  src={
                                    result.ENV.STRAPI_URL +
                                    d?.Icon?.data?.attributes?.url
                                  }
                                  className="test-icon"
                                />
                              </div>
                            </div>
                            <p className=" f-14 lh-base mt-5">
                              {d?.Description}
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
        </div>
      </div>
    </div>
  )
}
