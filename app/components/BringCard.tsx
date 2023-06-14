export interface BringCardProps {
  title?: string
  description?: string
  imageurl?: string
}

export default function BringCard(props: BringCardProps) {
  const { title, description, imageurl } = props

  return (
    <>
      <div className="col-md-6 col-12">
        <div>
          <img className="explore-images width-100" alt="" src={imageurl} />
          <div className="text-black mt-1">
            <h4 className="fw-600 mb-4 mt-1">{title}</h4>
            <p className="para lh-base">{description}</p>
          </div>
        </div>
      </div>
    </>
  )
}
