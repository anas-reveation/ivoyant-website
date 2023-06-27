import { useLoaderData } from '@remix-run/react'
import { graphcmsClient } from '~/lib/graphcms'
import { json } from '@remix-run/node'
import { GetTechnologyPracticeSlug } from '~/graphQl/HomeQuery'
import { loader } from '~/routes/Technology-Practice'
import { Link } from '@remix-run/react'
import Button from './Button'

export default function AgileConcept() {
  const result = useLoaderData<typeof loader>()

  return (
    <div>
      <div className="row gy-4">
        {result?.data?.technologyPractices?.data[0]?.attributes?.TechnologyThirdCard.map(
          (d: any, $index: any) => {
            return (
              <div className="col-md-4 col-12">
                <div className="bg-secondary p-4  h-100">
                  <h6 className="text-white para fw-600 text-uppercase pt-3">
                    {d?.Title}
                  </h6>
                  <p className="medium-grey f-15 mt-5 mb-3 fw-normal">
                    {d?.Description}
                  </p>
                </div>
              </div>
            )
          }
        )}
      </div>
    </div>
  )
}
