import Button from './Button'
import { Link, useLoaderData } from '@remix-run/react'
import { loader } from '~/root'

export default function Banner() {
  const result = useLoaderData<typeof loader>()

  return (
    <div className="container-fluid p-0 overflow-hidden bg-blue">
      <div className="row">
        <div className="col-md-7 col-12 d-md-block w-100">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              {result?.data?.homePages?.data[0]?.attributes?.Banner.map(
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
              {result?.data?.homePages?.data[0]?.attributes?.Banner.map(
                (d: any, $index: any) => {
                  return (
                    <div
                      className={
                        $index === 0 ? 'carousel-item active' : 'carousel-item '
                      }
                      key={$index}
                    >
                      <div className="banner-mn align-items-center container col-md-7 col-12 position-absolute banner-sm  banner-t-p">
                        <h1
                          className="white-text fw-600 active font-32"
                          data-bs-target="#carouselExampleIndicators"
                        >
                          {d.Heading}
                        </h1>
                        <h2
                          className="my-1 my-md-3 my-lg-5 white-text active fw-normal font-20"
                          data-bs-target="#carouselExampleIndicators"
                        >
                          {d?.Subheading}
                        </h2>

                        <Link to={d?.Btntext}>
                          <Button
                            text="Lets Talk"
                            borderColor="white"
                            color="white-text"
                            width="140px"
                            padding=""
                            data-bs-target="#carouselExampleIndicators"
                            className="fw-600"
                          />
                        </Link>
                      </div>
                      <img
                        src={
                          result?.ENV.STRAPI_URL +
                          d?.Image?.data?.attributes?.url
                        }
                        className="d-md-block w-100 d-none banner-s-p"
                        alt="..."
                        crossOrigin="anonymous"
                      />
                    </div>
                  )
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
