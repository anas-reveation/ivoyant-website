import { useLoaderData } from '@remix-run/react'
import { loader } from '~/routes/HowWeDo'

export interface ModuleProps {
  Heading?: string
  Subheading?: string
  Heading1?: string
  title?: string
  description?: string
}

export default function DigitalProducts(props: ModuleProps) {
  const { Heading, Subheading, Heading1, description, title } = props
  const result = useLoaderData<typeof loader>()

  return (
    <>
      <div className="">
        <div className="container mb-4">
          <div className="row justify-content-center">
            <div className="col-10 text-center py-5">
              <h4 className="fw-600 black-text pb-3">
                {result?.data?.howWedos?.data[0]?.attributes?.FourthHeading}
              </h4>
              <p className="para black-text fw-normal text-start">
                {result?.data?.howWedos?.data[0]?.attributes?.FourthSubheading}
              </p>
            </div>
            <div className="row justify-content-center justify-content-md-between">
              {result?.data?.howWedos?.data[0]?.attributes?.FourthCard.map(
                (d: any) => {
                  return (
                    <>
                      <div className=" col-11 col-md-6 col-lg-3  white-text text-center align-content-center mb-3">
                        <div className="bg-secondary module-card h-100">
                          <div className="col-12 py-3">
                            <h5 className=" fw-600 ">{d?.Title}</h5>
                            <p className="  f-14 fw-light lh-base pt-4 pb-0">
                              {d?.SubTitle}
                            </p>
                          </div>

                          <p className="col-12 para f-13 fw-light lh-base pb-3 px-1">
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
