export interface NumbersProps {
  heading?: string
  subheading?: string
  imageurl?: string
}

export default function NumberOF(props: NumbersProps) {
  const { heading, subheading, imageurl } = props

  return (
    <>
      <div className="col-10 col-sm-5 col-lg-3">
        <div className="row align-items-center justify-content-between">
          <div className="col-2 col-sm-3   col-md-3  ">
            <img
              className="number-size bg-light-green p-3"
              alt=""
              src={imageurl}
            />
          </div>
          <div className="col-8 col-md-8 white-text fw-600 lh-1p">
            <h1 className="fw-600">{heading}</h1>
            <h6>{subheading}</h6>
          </div>
        </div>
      </div>
    </>
  )
}
