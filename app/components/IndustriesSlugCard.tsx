export interface SlugCardProps {
  title?: string
  decription?: string
}

export default function IndustriesSlugCard(props: SlugCardProps) {
  const { title, decription } = props

  return (
    <>
      <div className=" col-11 col-md-6 col-lg-4  ">
        <div className="bg-secondary white-text align-content-center  px-4 py-3 min-h-250 h-100">
          <p className="  para fw-600 pt-3 pb-0 text-uppercase">{title}</p>
          <p className="  fs-14 fw-light lh-base pb-0 light-grey-text">
            {decription}
          </p>
        </div>
      </div>
    </>
  )
}
