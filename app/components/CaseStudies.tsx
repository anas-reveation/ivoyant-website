import Button from './Button'
import { Link, useLoaderData } from '@remix-run/react'
import { loader } from '~/routes/_index'

export default function CaseStudies() {
  const result = useLoaderData<typeof loader>()

  return (
    <div className="bg-secondary py-4 mt-5">
      <div className="container">
        <h6 className="fw-600 white-text text-center pt-2 text-uppercase">
          {result?.data?.homePages?.data[0]?.attributes?.CaseShortHead}
        </h6>
        <h4 className="fw-600 white-text text-center py-4">
          {result?.data?.homePages?.data[0]?.attributes?.CaseLongHead}
        </h4>
        <div className="row g-5 mb-5">
          {result?.data?.homePages?.data[0]?.attributes.CaseStudies.map(
            (d: any) => {
              return (
                <>
                  <div className="col-xl-6 col-lg-6 col-md-12  col-12">
                    <div className="row min-h-260 h-100">
                      <img
                        className="col-md-5 col-12 pe-md-0 px-1 img-ww"
                        alt={d?.Title}
                        src={
                          result?.ENV.STRAPI_URL +
                          d?.Image?.data?.attributes?.url
                        }
                      />
                      <div className="col-md-7 col-12 bg-white d-flex flex-column  justify-content-between">
                        <div>
                          <h5 className="pt-3 fw-600">{d?.Title}</h5>
                          <p className="pt-3 f-13 dark-grey-text lh-base">
                            {d?.Description}
                          </p>
                        </div>

                        <Link to={d?.ReadMoreLink}>
                          <Button
                            text="Read More"
                            borderColor="black"
                            color="black-text"
                            className="mb-3 py-1"
                            width="120px"
                          />
                        </Link>
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
  )
}
