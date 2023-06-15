export interface NumbersProps {
  heading?: string
  subheading?: string
  imageurl?: string
}

export default function NumberOF(props: NumbersProps) {
  const { heading, subheading, imageurl } = props

  return (
    <>
      <div className="col-10 col-sm-5 col-xl-3 col-lg-4">
        <div className="row align-items-center justify-content-between">
          <div className="col-2 col-sm-3   col-md-3  ">
            <img
              className="number-size bg-light-green p-3"
              alt={subheading}
              src={imageurl}
            />
          </div>
          <div className="col-8 col-md-8 white-text fw-600 lh-1p ps-0">
            <h1 className="fw-600">{heading}</h1>
            <p className="fw-500 mt-3">{subheading}</p>
          </div>
        </div>
      </div>
    </>
  )
}
