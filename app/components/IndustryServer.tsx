import Button from './Button'

export interface IndustrysProps {
  title?: string
  decription?: string
  imageurl?: string
  link?: string
}

export default function IndustryServe(props: IndustrysProps) {
  const { title, decription, imageurl, link } = props

  return (
    <>
      <div className="col-xl-6 col-lg-12 col-md-12  col-12">
        <div className="row min-h-230">
          <img className="col-md-4 col-12 pe-md-0 px-1" src={imageurl} />
          <div className="col-md-8 col-12 bg-white d-flex flex-column justify-content-evenly py-3 py-md-0">
            <h5 className=" fw-600">{title}</h5>
            <p className=" f-13 dark-grey-text lh-base">{decription}</p>
            <Button
              text="Read More"
              borderColor="black"
              color="black-text"
              className=""
              width="120px"
              to={link}
            />
          </div>
        </div>
      </div>
    </>
  )
}
