import { Link } from '@remix-run/react'
import { loader } from '~/routes/WhoWeAre'
import { useLoaderData } from '@remix-run/react'

export default function Innovations() {
  const result = useLoaderData<typeof loader>()

  return (
    <>
      <div className="text-center mt-4">
        <h2 className=" fw-semibold">
          {result?.data?.whoWeAres?.data[0]?.attributes?.FouthSection?.Title}
        </h2>
        <h5 className="mt-4">
          {
            result?.data?.whoWeAres?.data[0]?.attributes?.FouthSection
              ?.Description
          }
        </h5>
      </div>
      <img
        src="./images/whywe/innovate.svg"
        alt="Innovation"
        className="w-100 h-100"
      />
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-12 innovate-img d-flex align-items-center justify-content-center">
            <div className="d-flex align-items-center justify-content-center flex-column">
              <h6 className="para">
                {
                  result?.data?.whoWeAres?.data[0]?.attributes?.FouthSection
                    ?.ImgTitle1
                }
              </h6>
            </div>
          </div>
          <div className="col-md-4 col-12 innovate-img d-flex align-items-center justify-content-center">
            <div className="d-flex align-items-center justify-content-center flex-column">
              <h6 className="para">
                {' '}
                {
                  result?.data?.whoWeAres?.data[0]?.attributes?.FouthSection
                    ?.ImgTitle2
                }
              </h6>
            </div>
          </div>
          <div className="col-md-4 col-12 innovate-img d-flex align-items-center justify-content-center">
            <div className="d-flex align-items-center justify-content-center flex-column">
              <h6 className="para">
                {' '}
                {
                  result?.data?.whoWeAres?.data[0]?.attributes?.FouthSection
                    ?.ImgTitle3
                }
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
