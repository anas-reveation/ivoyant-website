import { Link } from '@remix-run/react'
import Button from './Button'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { loader } from '~/routes/Who-We-Are'

export interface ExploreProps {
  title?: string
  decription?: string
  imageurl?: string
  link?: string
}

export default function Explore() {
  const result = useLoaderData<typeof loader>()

  return (
    <div className="bg-secondary py-1 mt-5">
      <div className="container mt-5">
        <div className="row gy-4">
          {result?.data?.whoWeAres?.data[0]?.attributes?.ThirdSection.map(
            (d: any) => {
              return (
                <>
                  <div className="col-xl-6 col-lg-6 col-md-12 col-12 d-flex flex-column ">
                    <img
                      className="explore-images width-100"
                      src={
                        result?.ENV.STRAPI_URL + d?.Image?.data?.attributes?.url
                      }
                      alt={d?.Title}
                    />
                    <div className="text-white mt-4 d-flex flex-column justify-content-between digi-card">
                      <div>
                        <h4 className="fw-600">{d?.Title}</h4>
                        <p className="para fs-14">{d?.Description}</p>
                      </div>

                      <div>
                        <Link to={d?.Link}>
                          <Button
                            text={d?.btntext}
                            borderColor="white"
                            color="text-white"
                            btnText="fw-600 "
                            className="mb-3"
                            width="150px"
                            height="40px"
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
