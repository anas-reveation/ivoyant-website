import { Link } from '@remix-run/react'
import Button from './Button'
import { useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'
import { graphcmsClient } from '~/lib/graphcms'
import { loader } from '~/root'

export default function Footer() {
  const result = useLoaderData<typeof loader>()

  return (
    <div className="bg-secondary  py-5">
      <div className="container">
        <p className="para text-white">We Are Here to Answer Your Questions</p>
        <Link to="/contact">
          <Button
            text="Lets Talk"
            borderColor="white"
            color="text-white"
            className="mb-4 mt-2 py-1"
            width="120px"
          />
        </Link>

        <div className="row gy-4 justify-content-between">
          <div className="col-md-6 col-12">
            <div className="d-flex align-items-center">
              <img
                src={
                  result.ENV.STRAPI_URL +
                  result?.data?.footer?.data?.attributes?.Logo?.data?.attributes
                    ?.url
                }
                alt="logo-footer"
                className="logo-footer"
              />
              <div className="ms-3 text-white footer-family">
                {result?.data?.footer?.data?.attributes?.Name}
              </div>
            </div>
            <p className="text-white fw-light para mt-3">
              {result?.data?.footer?.data?.attributes?.Description}
            </p>
            <div className="row">
              {result?.data?.footer?.data?.attributes?.SocialMediaLinks?.map(
                (d: any) => {
                  return (
                    <>
                      <div className="col-md-1 col-2">
                        <a href={d?.SocialLink} target="_blank">
                          <img
                            src={
                              result.ENV.STRAPI_URL +
                              d?.SocialIcon?.data?.attributes?.url
                            }
                            alt="social links"
                            className="social-img"
                          />
                        </a>
                      </div>
                    </>
                  )
                }
              )}
            </div>
          </div>
          <div className="col-md-5 col-12">
            <div className="row gy-4">
              <div className="col-md-6 col-12">
                <h5 className="footer-color mb-4">Navigate</h5>
                {result?.data?.footer?.data?.attributes?.navigate_links?.data.map(
                  (d: any) => {
                    return (
                      <>
                        <div className="mb-3">
                          <a
                            className="text-white text-decoration-none"
                            href={d?.attributes?.Url}
                          >
                            <span className="">
                              {' '}
                              <img
                                className="arrowright-icon"
                                alt="arrow"
                                src="../images/Home/arrowright.svg"
                              />
                            </span>{' '}
                            {d?.attributes?.Name}
                          </a>
                        </div>
                      </>
                    )
                  }
                )}
              </div>
              <div className="col-md-6 col-12">
                <h5 className="footer-color mb-4">Additional Links</h5>
                {result?.data?.footer?.data?.attributes?.additional_links?.data.map(
                  (d: any) => {
                    return (
                      <>
                        <div className="mb-3">
                          <Link
                            className="text-white text-decoration-none"
                            to={d?.attributes?.Url}
                          >
                            <span className="">
                              {' '}
                              <img
                                className="arrowright-icon"
                                alt="arrow"
                                src="../images/Home/arrowright.svg"
                              />
                            </span>{' '}
                            {d?.attributes?.Name}
                          </Link>
                        </div>
                      </>
                    )
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
