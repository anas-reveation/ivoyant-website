import { loader } from '~/routes/DigitalExperience'
import { useLoaderData } from '@remix-run/react'

export default function ServiceDevlopment() {
  const result = useLoaderData<typeof loader>()
  

  return (
    <>
      <div className=" bg-secondary border-bottom">
        <div className="container">
          <div className="row white-text justify-content-center">
            <div className="col-11 ">
              <h4 className="fw-600 pt-3 text-center text-uppercase">
                {result?.data?.digitalExpriences?.data[0]?.attributes?.ThirdHeading}
              </h4>
              <p className="para py-4 text-justify">
                {result?.data?.digitalExpriences?.data[0]?.attributes?.ThirdSubheading}
              </p>
            </div>
          </div>
          <div className="row gy-4 gx-5 pb-4">
            {result?.data?.digitalExpriences?.data[0]?.attributes?.DigialCard.map(
              (d: any) => {
                return (
                  <>
                    <div className="col-xl-6 col-md-12  col-12 pb-3 pb-md-0 ">
                      <div className="row bg-white  align-items-center">
                        <div className="col-5 p-0">
                          <img
                            src={
                              result.ENV.STRAPI_URL +
                              d?.Image?.data?.attributes?.url
                            }
                            className=" w-100"
                          />
                        </div>
                        <div className="col-7 px-4">
                          <div>
                            <p className="fw-600 para text-uppercase">
                              {d?.Title}
                            </p>
                            <p className="f-15 ">
                              {d?.Description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
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
