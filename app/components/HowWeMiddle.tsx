import { subscribe } from 'graphql'

export interface MiddleBannerProps {
  Heading?: string
  Subheading?: string
}

export default function HowWeMiddle(props: MiddleBannerProps) {
  const { Heading, Subheading } = props

  return (
    <>
      <div className="container-fluid bg-black mt-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-12 text-center py-5">
              <h4 className="fw-600 white-text pb-3">{Heading}</h4>
              <p className="para white-text fw-normal text-start">
                {Subheading}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
