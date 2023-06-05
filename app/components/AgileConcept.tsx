import { useLoaderData } from '@remix-run/react'
import { graphcmsClient } from '~/lib/graphcms'
import { json } from '@remix-run/node'
import { GetTechnologyPracticeSlug } from '~/graphQl/HomeQuery'
import { loader } from '~/routes/TechnologyPractice'
import { Link } from '@remix-run/react'
import Button from './Button'

export default function AgileConcept() {
  const result = useLoaderData<typeof loader>()
  
  return (
    <div>
      <div className="row gy-4">
        {result?.SlugData?.technologyPracticeSlugs?.data.map(
          (d: any, $index: any) => {
            return (
              <div className="col-md-4 col-12">
                <Link
                  to={`${d?.attributes?.Slug}`}
                  className="text-decoration-none"
                >
                  <div className="bg-secondary p-4 msg-h">
                    <h6 className="text-white para fw-600">
                      {d?.attributes?.TitleMain}
                    </h6>
                    <p className="medium-grey f-15 mt-5 mb-4 fw-normal">
                      {d?.attributes?.DescriptionMain}
                    </p>
                  </div>
                </Link>

                {/* <Link to={`${d?.attributes?.Slug}`}> */}
                {/* <Button
                    text="Read More"
                    borderColor="black"
                    color="black-text"
                    className=""
                    width="120px"
                  /> */}
                {/* </Link> */}
              </div>
            )
          }
        )}
      </div>
    </div>
  )
}
