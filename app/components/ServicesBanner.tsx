export interface ServiceBannerProps {
  heading?: string
  subheading?: string
  imageurl?: string
  leftheading?: string
  rightDescription?: string
}

export default function ServicesBanner(props: ServiceBannerProps) {
  const { heading, subheading, imageurl, leftheading, rightDescription } = props

  return (
    <>
      <div className=" bg-black banner-height overflow-hidden">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-4"></div>
            <div className="row col-12 col-md-7 white-text my-5   banner-float">
              <h2 className="col-12 fw-600 ">{heading}</h2>
              <p className="col-12 para light-grey-text pt-4 fw-normal">
                {subheading}
              </p>
            </div>
            <div className="col-12 col-md-6 d-none d-md-block ">
              <img className="service-banner-w" src={imageurl} />
            </div>
          </div>
        </div>

        <hr className="text-white opacity-75 w-100" />
        <div className="container ">
          <div className="row justify-content-between white-text align-items-center py-5">
            <div className="col-12 col-sm-4">
              <h3 className="fw-600">{leftheading}</h3>
            </div>
            <div className="col-12 col-sm-7">
              <p className="para lh-base">{rightDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
