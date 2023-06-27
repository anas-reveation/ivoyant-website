import { Link } from '@remix-run/react'
import Testimonial from '~/components/Testimonial'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { graphcmsClient } from '~/lib/graphcms'
import { loader } from '~/routes/Who-We-Are'

export interface AboutUsProps {
  title?: string
  decription?: string
}

export default function AboutUs() {
  const result = useLoaderData<typeof loader>()
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-4 col-12">
          <h4 className="text-dark fw-bold font-40">
            {result?.data?.whoWeAres?.data[0]?.attributes?.Title}
          </h4>
        </div>
        <div className="col-md-8 col-12">
          <p className="fw-light para lh-base">
            {result?.data?.whoWeAres?.data[0]?.attributes?.Description}
          </p>
        </div>
      </div>
    </div>
  )
}
