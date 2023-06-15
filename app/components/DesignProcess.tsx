export interface DesignProcessProps {
  Heading?: string
  Image?: string
}
export default function DesignProcess(props: DesignProcessProps) {
  const { Heading, Image } = props
  return (
    <>
      <div className="container my-3">
        <div className="row justify-content-center">
          <div className="col-12 ">
            <h4 className="fw-600 black-text text-center py-3 text-uppercase">
              {Heading}
            </h4>
            <img src={Image} alt={Heading} className="w-100" />
          </div>
        </div>
      </div>
    </>
  )
}
