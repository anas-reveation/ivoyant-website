import { Link } from '@remix-run/react'
import { useLoaderData } from '@remix-run/react'
import { loader } from '~/routes/_index'

export default function Partners() {
  const result = useLoaderData<typeof loader>()
  return (
    <div>
      <div className="container mt-5">
        <h6 className="fw-600 pt-4  mb-4 f18 para text-uppercase">
          {result?.data?.homePages?.data[0]?.attributes
              ?.PartnerImage}
        </h6>
        <div className="row align-items-center gy-4">
          {result?.data?.homePages?.data[0]?.attributes
              ?.TechnologyImage.map((d: any) => {
            return (
              <>
                <div className="col-md-2 col-6">
                  <div>
                    <img
                      src={
                        result?.ENV.STRAPI_URL +
                        d?.Images?.data?.attributes?.url
                      }
                      className="w-75 height-tech"
                    />
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}
