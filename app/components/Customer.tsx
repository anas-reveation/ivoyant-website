import { useLoaderData } from '@remix-run/react'
import { loader } from '~/routes/_index'

export interface CustomersProps {
  name?: string

  imageurl?: string
}

export default function Customer(props: CustomersProps) {
  const result = useLoaderData<typeof loader>()
  const { name, imageurl } = props

  return (
    <div>
      <div className="container my-4">
        <p className="fw-600 pt-4 f18 para text-uppercase">
          {result?.data?.homePages?.data[0]?.attributes?.Coustmerhead}
        </p>
        <div className="row align-items-center  justify-content-center gy-4">
          {result?.data?.homePages?.data[0]?.attributes?.CoustmerImage?.map(
            (d: any) => {
              return (
                <>
                  <div className="col-md-2 col-6 partner-w">
                    <div>
                      <img
                        src={
                          result?.ENV.STRAPI_URL +
                          d?.Images?.data?.attributes?.url
                        }
                        alt="Delighting Customers"
                        className="w-75"
                      />
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
