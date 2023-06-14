import { loader } from '~/routes/Blogs'
import { useLoaderData } from '@remix-run/react'

export default function BlogsBanner() {
  const result = useLoaderData<typeof loader>()

  return (
    <>
      <div className="bg-black">
        <div className="container py-5">
          <div className="row align-items-center mt-4">
            <div className="col-12 col-md-4 col-lg-6">
              <img
                src={
                  result.ENV.STRAPI_URL +
                  result?.data?.blogsPages?.data[0]?.attributes?.BgImage?.data
                    ?.attributes?.url
                }
                className="w-100"
              />
            </div>
            <div className="col-12 col-md-8 col-lg-6 white-text">
              <h6 className="para">
                {result?.data?.blogsPages?.data[0]?.attributes?.ShortHeading}
              </h6>
              <h2 className="fw-600 py-3">
                {result?.data?.blogsPages?.data[0]?.attributes?.Heading}{' '}
              </h2>
              <p className="para fw-normal pb-3">
                {result?.data?.blogsPages?.data[0]?.attributes?.Subheading}
              </p>

              <div className="row align-items-center">
                <div className="col-3 col-md-2">
                  <img src="./images/blogs/Ellipse 5.svg" className="w-75" />
                </div>
                <div className="col-5 col-md-4 ps-0">
                  <p className="para mb-2 fw-600">Amada Smith</p>
                  <p className="f-14 mb-0">8 Min Read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
