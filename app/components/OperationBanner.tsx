import { loader } from '~/routes/TechnologyOperation'
import { useLoaderData } from '@remix-run/react'

export default function OperationBanner() {
  const result = useLoaderData<typeof loader>()
  

  return (
    <>
      <div className="container">
        <div className="row">
          <h4 className="fw-600 text-center py-3 text-uppercase">
            {
              result?.data?.technologyOperation?.data?.attributes
                ?.SecondSectionHeading
            }
          </h4>
          <div className="col-12">
            <h2 className="fw-600 py-3">
              {
                result?.data?.technologyOperation?.data?.attributes
                  ?.SecondSectionSubheading
              }
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  result?.technologyRich
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
