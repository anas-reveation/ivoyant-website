import Button from './Button'
import { Link, useLoaderData } from '@remix-run/react'
import { loader } from '~/routes/LifeAtIvoyant'

export default function Internship() {
  const result = useLoaderData<typeof loader>()

  return (
    <>
      <div className="container">
        <div className="row justify-content-between align-items-center my-5">
          <div className="col-12 col-md-4 col-lg-5 d-flex justify-content-center">
            <img
              src={
                result.ENV.STRAPI_URL +
                result?.data?.lIfeAtIvoyants?.data[0]?.attributes?.FourthSection
                  ?.Image?.data?.attributes?.url
              }
              alt={
                result?.data?.lIfeAtIvoyants?.data[0]?.attributes?.FourthSection
                  ?.Image?.data?.attributes?.name
              }
              className="img-h-w"
            />
          </div>
          <div className="col-12 col-md-8 col-lg-5">
            <div className="row">
              <div className="col-12">
                <h4>
                  {
                    result?.data?.lIfeAtIvoyants?.data[0]?.attributes
                      ?.FourthSection?.Title
                  }
                </h4>
                <p className="para py-4">
                  {
                    result?.data?.lIfeAtIvoyants?.data[0]?.attributes
                      ?.FourthSection?.Description
                  }
                </p>
                <Link
                  to={
                    result?.data?.lIfeAtIvoyants?.data[0]?.attributes
                      ?.FourthSection?.BtnLink
                  }
                >
                  <Button
                    text={
                      result?.data?.lIfeAtIvoyants?.data[0]?.attributes
                        ?.FourthSection?.Btntext
                    }
                    width="250px"
                    btnText="fw-600 "
                    height="45px"
                    className=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
