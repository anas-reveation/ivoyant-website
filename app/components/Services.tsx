import { Link } from '@remix-run/react'
import Button from './Button'
import { links } from '~/root'
export interface ServicesProps {
  title?: string
  decription?: string
  imageurl?: string
  link?: string
}

export default function Services(props: ServicesProps) {
  const { title, decription, imageurl, link } = props
  return (
    <div className="container bg-secondary h-100">
      <div className="row px-1 px-md-3 align-content-between justify-content-center justify-content-md-between min-h-250 h-100">
        <div className="col-12 ">
          <img className="mt-3 service-icon" alt={title} src={imageurl} />
          <h5 className="text-white fw-600 mb-4 mt-3 text-uppercase">
            {title}
          </h5>
          <p className="light-grey-text f-13 lh-base">{decription}</p>
        </div>
        <div className="col-12 mt-4">
          <Link to={`${link}`}>
            <Button
              text="Read More"
              borderColor="white"
              color="white-text"
              className="mb-3"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
