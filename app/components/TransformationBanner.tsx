import { loader } from '~/routes/TechnologyTransformation'
import { useLoaderData } from '@remix-run/react'

export default function TransformationBanner() {
  const result = useLoaderData<typeof loader>()

  return (
    <>
      <div className="container ">
        <div className="row justify-content-center">
          <h4 className="fw-600 pt-3 pb-5 text-center">
            {
              result?.data?.technologyTransformation?.data?.attributes
                ?.SecondSectionHeading
            }
          </h4>
          <ul
            className="nav nav-pills mb-5 justify-content-center s-tab "
            id="pills-tab"
            role="tablist"
          >
            {result?.data?.technologyTransformation?.data?.attributes?.ButtonText.map(
              (d: any, $index: any) => {
                return (
                  <>
                    <li
                      className="nav-item black-text border border-dark s-act"
                      role="presentation"
                    >
                      <button
                        className={
                          $index === 0 ? 'nav-link active' : 'nav-link'
                        }
                        id={`pills-${d?.ButtonId}-tab`}
                        data-bs-toggle="pill"
                        data-bs-target={`#pills-${d?.ButtonId}`}
                        type="button"
                        role="tab"
                        aria-controls={`pills-${d.ButtonId}`}
                        aria-selected={$index === 0}
                      >
                        {d?.ButtonText}
                      </button>
                    </li>
                  </>
                )
              }
            )}
          </ul>
        </div>
      </div>
      <div className="tab-content" id="pills-tabContent">
        {result?.technologyRich.map((d: any, $index: any) => {
          return (
            <>
              <div
                className={`tab-pane fade ${
                  $index === 0
                    ? 'show active overflow-hidden'
                    : 'show overflow-hidden'
                }`}
                id={`pills-${result?.data?.technologyTransformation?.data?.attributes?.ButtonText[$index]?.ButtonId}`}
                role="tabpanel"
                aria-labelledby={`pills-${result?.data?.technologyTransformation?.data?.attributes?.ButtonText[$index]?.ButtonId}-tab`}
                key={$index}
              >
                <div className="row justify-content-between my-3 ">
                  <div className="col-xl-6 col-lg-12 col-md-12 col-12 ">
                    <div className="row ">
                      <div className="col-12 cult-m">
                        <div></div>
                        {/* <ReactMarkdown>{d?.RichText}</ReactMarkdown> */}
                        {/* <ReactMarkdown children={d?.RichText} /> */}
                        {/* <div>{d?.RichText}</div> */}
                        <div
                          className="richtext"
                          dangerouslySetInnerHTML={{ __html: d?.richText }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-12 col-md-12 col-12 ">
                    <img
                      src={
                        result.ENV.STRAPI_URL +
                        d?.secondSectionImage?.data?.attributes?.url
                      }
                      alt={d?.secondSectionImage?.data?.attributes?.name}
                      className="w-100"
                    />
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}
