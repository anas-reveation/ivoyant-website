import { Link } from '@remix-run/react'
export interface CareerBannerProps {
  Heading?: string
  Subheading?: string
  Title1?: string
  Title2?: string
  Link1?: string
  Link2?: string
  Image?: string
}

export default function CareersBanner(props: CareerBannerProps) {
  const { Heading, Subheading, Title1, Title2, Link1, Link2, Image } = props
  return (
    <>
      <div className="bg-black py-5 banner-career">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-12 d-flex flex-column mt-auto">
              <div className="text-white">
                <h2 className="">{Heading}</h2>
                <h5 className="fw-light mt-3">{Subheading}</h5>
              </div>
              <div className="row mt-5 pt-5">
                <div className="col-md-6">
                  <div>
                    <h6 className="text-white fw-light para">{Title1}</h6>
                    <Link to="" className="text-decoration-none">
                      <p className="light-green para">
                        {Link1}{' '}
                        <i className="fas fa-arrow-right light-green"></i>
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <h6 className="text-white fw-light para">{Title2} </h6>
                    <Link to="" className="text-decoration-none">
                      <p className="light-green para">
                        {Link2}{' '}
                        <i className="fas fa-arrow-right light-green"></i>
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div>
                <img src={Image} className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
