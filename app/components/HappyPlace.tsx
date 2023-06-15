import { loader } from '~/routes/LifeAtIvoyant'
import { useLoaderData } from '@remix-run/react'

export default function HappyPlace() {
  const result = useLoaderData<typeof loader>()

  return (
    <>
      <div className="container-fluid bg-secondary">
        <h4 className="fw-bold pt-4 white-text text-center">
          {result?.data?.lIfeAtIvoyants?.data[0]?.attributes?.ForthHeading}{' '}
        </h4>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {result?.data?.lIfeAtIvoyants?.data[0]?.attributes?.CaroselImages?.map(
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
                      <img
                        src={
                          result.ENV.STRAPI_URL +
                          d?.CaroselImages?.data?.attributes?.url
                        }
                        className="d-block img-h-w"
                        alt={d?.CaroselImages?.data?.attributes?.name}
                      />
                    </div>
                  </>
                )
              }
            )}
          </div>
          <div className="carousel-indicators py-3 position-unset">
            {result?.data?.lIfeAtIvoyants?.data[0]?.attributes?.CaroselImages?.map(
              (d: any, $index: any) => {
                return (
                  <>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to={$index}
                      className={$index === 0 ? 'active' : ''}
                      aria-label={`Slide ${$index + 1}`}
                    ></button>
                  </>
                )
              }
            )}
          </div>
        </div>
      </div>
    </>
  )
}
