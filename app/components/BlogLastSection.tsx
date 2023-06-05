import Button from './Button'
import { loader } from '~/routes/Blogs'

import { useLoaderData } from '@remix-run/react'

export default function BlogLastSection() {
  const result = useLoaderData<typeof loader>()
  
  return (
    <>
      <div className="  border-bottom">
        <div className="container py-5">
          <div className="row justify-content-center black-text text-center">
            <h2 className="fw-600 mb-0">
              {' '}
              {result?.data?.blogsPages?.data[0]?.attributes?.TitleLast}
            </h2>
            <h6 className="para fw-600 dark-grey py-4">
              {result?.data?.blogsPages?.data[0]?.attributes?.DescriptionLast}
            </h6>
            <Button
              text={
                result?.data?.blogsPages?.data[0]?.attributes?.ButtonText
              }
              borderColor="black"
              color="black-text"
              className="fw-600"
            />
          </div>
        </div>
      </div>
    </>
  )
}
