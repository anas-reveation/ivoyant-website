import { useLoaderData } from '@remix-run/react'
import { loader } from '~/routes/Careers'
export default function WhyJoin() {
  const result = useLoaderData<typeof loader>()

  return (
    <div className="container  mt-3 mb-4">
      <div className="row gy-4">
        {result?.data?.careers?.data[0]?.attributes?.SecondCards.map(
          (d: any) => {
            return (
              <>
                <div className="col-xl-4 col-md-6 col-12">
                  <div className="bg-secondary p-4 min-15 h-100">
                    <div className="d-flex align-items-start mb-3 h-2">
                      <img
                        className="me-3 join-img"
                        alt={d?.Title}
                        src={
                          result.ENV.STRAPI_URL + d?.Icon?.data?.attributes?.url
                        }
                      />
                      <h6 className="text-white fw-600 para text-uppercase">
                        {d?.Title}
                      </h6>
                    </div>

                    <p className="light-grey-text f-15 mb-0  lh-base">
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
  )
}
