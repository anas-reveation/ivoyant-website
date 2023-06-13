import { useLoaderData } from '@remix-run/react'
import { loader } from '~/routes/LifeAtIvoyant'

export default function LiveWork() {
  const result = useLoaderData<typeof loader>()

  return (
    <>
      <div className="container py-3 mb-3">
        <div className="row justify-content-center ">
          <div className="text-center black-text col-10 py-4">
            <h4 className="fw-bold pb-3">
              {result?.data?.lIfeAtIvoyants?.data[0]?.attributes?.SecondHeading}
            </h4>
            <h5 className="text-start fs-6">
              {
                result?.data?.lIfeAtIvoyants?.data[0]?.attributes
                  ?.SecondSubHeading
              }
            </h5>
          </div>
          <div className="container">
            <div className="row gy-4">
              {result?.data?.lIfeAtIvoyants?.data[0]?.attributes?.SecondSectionCard.map(
                (d: any) => {
                  return (
                    <>
                      <div className=" col-12 col-md-6 col-xl-3">
                        <div className="bg-secondary p-4 min-15 h-100">
                          <div className="d-flex align-items-start mb-3">
                            <img
                              className="me-3 livework-h-w"
                              alt=""
                              src={
                                result.ENV.STRAPI_URL +
                                d?.Icon?.data?.attributes?.url
                              }
                            />
                            <h6 className="text-white fw-bold para">
                              {d?.Title}
                            </h6>
                          </div>
                          <p className="white-text f-13 mb-0 para">
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
    </>
  )
}
