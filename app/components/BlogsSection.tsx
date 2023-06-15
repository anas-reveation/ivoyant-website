import Button from './Button'
import { loader } from '~/routes/Blogs'
import { useLoaderData } from '@remix-run/react'
import { Link } from '@remix-run/react'

export default function BlogsSection() {
  const result = useLoaderData<typeof loader>()
  console.log(result)

  return (
    <>
      <div className="container my-4">
        <div className="row gy-4">
          {result?.SlugData?.blogsSlugs?.data.map((d: any, $index: any) => {
            return (
              <div className="col-lg-4 col-md-6 col-12 ">
                <div
                  className="d-flex align-items-end bg-secondary"
                  style={{
                    backgroundImage: `url(${
                      result.ENV.STRAPI_URL +
                      d.attributes?.BgImage?.data?.attributes?.url
                    })`,
                    height: '550px',
                    backgroundSize: 'contain',
                  }}
                >
                  <div
                    className="white-text p-4 bg-secondary w-100 d-flex flex-column justify-content-between"
                    style={{ height: '225px' }}
                  >
                    <div className="row align-items-center">
                      <div className="col-1">
                        <img
                          src="./images/blogs/Vector1.svg"
                          className="blog-arrow"
                          alt="User"
                        />
                      </div>
                      <div className="col-10 ">
                        <p className="fs-14 para mb-0 ">{d.attributes?.Name}</p>
                      </div>
                    </div>
                    <div>
                      {' '}
                      <h5 className="py-4 ">{d.attributes?.CardTitle}</h5>
                    </div>
                    <div>
                      <hr className="my-0 opacity-n white-text" />
                      <Link
                        to={d.attributes?.Slug}
                        style={{ textDecoration: 'none' }}
                      >
                        <div className="row align-items-center mt-4">
                          <div className="col-4">
                            <p className="fs-14 para mb-0  white-text">
                              Learn More
                            </p>
                          </div>
                          <div className="col-8 text-end">
                            <img
                              src="./images/blogs/Vector.svg"
                              className="blog-arrow"
                              alt="arrow"
                            />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
