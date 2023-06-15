import { Link } from '@remix-run/react'
export interface CareerBannerProps {
  Heading?: string
  Subheading?: string
  Title1?: string
  Title2?: string
  Link1?: string
  Link2?: string
  Image?: string
  LinkText1?: string
  LinkText2?: string
}

export default function CareersBanner(props: CareerBannerProps) {
  const {
    Heading,
    Subheading,
    Title1,
    Title2,
    Link1,
    Link2,
    Image,
    LinkText1,
    LinkText2,
  } = props
  return (
    <>
      <div className="bg-black py-5 banner-career">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-12 d-flex flex-column mt-auto">
              <div className="text-white top-career">
                <h2 className="">{Heading}</h2>
                <h5 className="fw-light mt-4">{Subheading}</h5>
              </div>
              <div className="row mt-5 pt-5">
                <div className="col-md-6">
                  <div>
                    <h6 className="text-white fw-light para">{Title1}</h6>
                    <Link to={Link1!} className="text-decoration-none">
                      <p className="light-green para">
                        {LinkText1}{' '}
                        <i className="fas fa-arrow-right light-green"></i>
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <h6 className="text-white fw-light para">{Title2} </h6>
                    <Link to={Link2!} className="text-decoration-none">
                      <p className="light-green para">
                        {LinkText2}{' '}
                        <i className="fas fa-arrow-right light-green"></i>
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div>
                <img src={Image} alt={Title2} className="img-h-w" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
