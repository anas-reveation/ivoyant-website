export interface MethodologyProps {
  Heading?: string
  Subheading?: string
  image?: string
}

export default function OurMethodology(props: MethodologyProps) {
  const { Heading, Subheading, image } = props

  return (
    <>
      <div className=" bg-secondary">
        <div className="container">
          <div className="row justify-content-center py-5">
            <div className="col-10 text-center ">
              <h4 className="fw-600 white-text pb-4">{Heading} </h4>
              <p className="para white-text fw-light pb-4">{Subheading}</p>
            </div>
            <img className="col-12 w-100" alt={Heading} src={image} />
          </div>
        </div>
      </div>
    </>
  )
}
