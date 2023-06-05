import { useLoaderData } from '@remix-run/react'
import { loader } from '~/routes/_index'

export interface CultureProps {
  title?: string
  decription?: string
  imageurl?: string
  icon?: string
}

export default function Culture(props: CultureProps) {
  const result = useLoaderData<typeof loader>()
  const { title, decription, imageurl, icon } = props

  return (
    <div className="container-fluid p-0 cult-s cult-r  overflow-hidden">
      <div className="row">
        <div className="col-md-7 col-12">
          <div className="cult-m">
            <span className="d-flex align-items-center ">
              <img className='icon-img'
                src={
                  result?.ENV.STRAPI_URL +
                  result?.data?.homePages?.data[0]?.attributes?.HomeLast[0]?.Icon
                    ?.data?.attributes?.url
                }
              />
              <h6 className="fw-600 pt-4 ms-3  mb-4 text-uppercase f18">
                {result?.data?.homePages?.data[0]?.attributes?.HomeLast[0]?.Title}{' '}
              </h6>
            </span>
            <p>
              {
                result?.data?.homePages?.data[0]?.attributes?.HomeLast[0]
                  ?.Description
              }
            </p>
          </div>
        </div>
        <div className="col-md-5 col-12 ">
          <div className="d-flex justify-content-end ">
            <img
              src={
                result?.ENV.STRAPI_URL +
                result?.data?.homePages?.data[0]?.attributes?.HomeLast[0]?.Image
                  ?.data?.attributes?.url
              }
              className="overflow-hidden culture-img"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
