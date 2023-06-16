import { loader } from '~/routes/TechnologyPractice'
import { useLoaderData } from '@remix-run/react'

export default function PracticeBanner() {
  const result = useLoaderData<typeof loader>()

  return (
    <>
      <div className="bg-black">
        <div className="container py-5">
          <div className="row align-items-center py-5">
            <div className="col-md-5">
              <h2 className="text-white fw-bold">
                {
                  result?.data?.technologyPractices?.data[0]?.attributes
                    ?.FirstSection?.Heading
                }
              </h2>
              <p className="para text-white mt-5">
                {
                  result?.data?.technologyPractices?.data[0]?.attributes
                    ?.FirstSection?.Subheading
                }
              </p>
            </div>
            <div className="col-md-7">
              <img
                src={
                  result.ENV.STRAPI_URL +
                  result?.data?.technologyPractices?.data[0]?.attributes
                    ?.FirstSection?.Image?.data?.attributes?.url
                }
                alt=""
                className="practice-margin"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary">
        <div className="container">
          <h5 className="text-white fw-normal lh-base py-5">
            {
              result?.data?.technologyPractices?.data[0]?.attributes
                ?.FirstSection?.Description
            }
          </h5>
        </div>
      </div>
    </>
  )
}
