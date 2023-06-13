import Button from './Button'
import { loader } from '~/routes/LifeAtIvoyant'
import { Link, useLoaderData } from '@remix-run/react'

export default function CareersAt() {
  const result = useLoaderData<typeof loader>()

  return (
    <>
      <div className="container-fluid bg-secondary overflow-hidden">
        <div className="container">
          <div className="row justify-content-between align-items-center my-5">
            <div className="col-12 col-md-8 col-lg-5 white-text">
              <div className="row">
                <div className="col-12">
                  <h3 className="fw-bold">
                    {
                      result?.data?.lIfeAtIvoyants?.data[0]?.attributes
                        ?.LastSection?.Title
                    }
                  </h3>
                  <p className="para py-4">
                    {
                      result?.data?.lIfeAtIvoyants?.data[0]?.attributes
                        ?.LastSection?.Description
                    }{' '}
                  </p>
                  <Link
                    to={
                      result?.data?.lIfeAtIvoyants?.data[0]?.attributes
                        ?.LastSection?.BtnLink
                    }
                  >
                    <Button
                      text={
                        result?.data?.lIfeAtIvoyants?.data[0]?.attributes
                          ?.LastSection?.Btntext
                      }
                      width="220px"
                      btnText="fw-600 "
                      height="45px"
                      className=" white-text"
                      borderColor="white"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-5 d-flex justify-content-center">
              <img
                src={
                  result.ENV.STRAPI_URL +
                  result?.data?.lIfeAtIvoyants?.data[0]?.attributes?.LastSection
                    ?.Image?.data?.attributes?.url
                }
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
