export interface BannerProps {
  title?: string
  description?: string
  imageurl?: string
}

export default function BannerWhyWe(props: BannerProps) {
  const { title, description, imageurl } = props

  return (
    <>
      <div className="container-fluid banning">
        <div className="row">
          <div className="col-md-6 col-12 bg-black d-flex justify-content-center align-items-center flex-column">
            <div className="w-75 extra-bann py-4">
              <h2 className="fw-bold white-text pb-4">{title}</h2>
              <h5 className="white-text fw-normal fs-6 lh-base ">
                {description}
              </h5>
            </div>
          </div>
          <div
            className="col-md-6 col-12 explore-bg"
            style={{
              backgroundImage: `url(${imageurl})`,
              backgroundSize:"100% 100%"
            }}
          ></div>
        </div>
      </div>
    </>
  )
}
