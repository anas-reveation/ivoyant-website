import Button from './Button'
import { Link } from '@remix-run/react'

export interface IndustrysProps {
  title?: string
  decription?: string
  imageurl?: string
  link?: string
}

export default function IndustriesCard(props: IndustrysProps) {
  const { title, decription, imageurl, link } = props

  return (
    <>
      <div className="col-xl-6 col-lg-6 col-md-12  col-12">
        <div className="row min-h-260 shadow">
          <div className="col-xl-5 col-md-4 col-12 pe-md-0 pe-0 d-flex justify-content-center">
            <img className=" serve-img" src={imageurl} />
          </div>

          <div className="col-xl-7 col-md-8 col-12 bg-white d-flex flex-column justify-content-between py-3  ">
            <h5 className=" fw-600">{title}</h5>
            <p className=" f-13 dark-grey-text">{decription}</p>
            <Link to={`${link}`}>
              <Button
                text="Read More"
                borderColor="black"
                color="black-text"
                className=""
                width="120px"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
