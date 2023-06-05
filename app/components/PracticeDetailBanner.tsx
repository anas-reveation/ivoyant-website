export interface PracticeBannerProps {
  Heading?: string
  Subheading?: string
  image?:string
}

export default function PracticeDetailBanner(props: PracticeBannerProps) {
  const { Heading, Subheading ,image} = props

  return (
    <div
      className="pract-detail d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.65)), url(${image})`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-xl-6 col-lg-7 col-12">
            <div>
              <h2 className="text-white fw-bold pb-4">{Heading}</h2>
              <p className="para text-white f18 mb-0">{Subheading} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
