export interface BannerProps {
  Heading?: string
  Subheading?: string
  image?: string
}

export default function HowWeBanner(props: BannerProps) {
  const { Heading, Subheading, image } = props

  return (
    <>
      <div className="container-fluid bg-black banner-height">
        <div className="container py-5">
          <div className="row align-items-center justify-content-between">
            <div className="col-4"></div>
            <div className="row col-12 col-md-7 white-text my-5  banner-float">
              <h2 className="col-12 fw-bold ">{Heading}</h2>
              <p className="col-12 para light-grey-text pt-4 fw-normal">
                {Subheading}
              </p>
            </div>
            <div className="col-12 col-md-7 d-none d-md-block ">
              <img className="w-100" alt="how we do" src={image} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
