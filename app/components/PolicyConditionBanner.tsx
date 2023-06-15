export interface PolicyConditionBannerProps {
  Heading?: string
  image?: string
}

export default function PolicyConditionBanner(
  props: PolicyConditionBannerProps
) {
  const { Heading, image } = props

  return (
    <>
      <div className="bg-black">
        <div className="container py-4">
          <div className="row white-text align-items-center">
            <div className="col-6">
              <h2 className="fw-600">{Heading}</h2>
            </div>
            <div className="col-6">
              <img src={image} alt={Heading} className="img-h-w" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
