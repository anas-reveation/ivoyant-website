export interface ApprochProps {
  title?: string
  decription?: string
}

export default function OurApprochCard(props: ApprochProps) {
  const { title, decription } = props

  return (
    <>
      <div className=" col-12 col-xl-4 col-md-6 col-lg-4  ">
        <div className="bg-secondary white-text  mb-3 min-h-250 h-100 p-4">
          <h5 className=" fw-600 h-1 ">{title}</h5>
          <p className=" para font-14 fw-normal lh-base pt-5">{decription}</p>
        </div>
      </div>
    </>
  )
}
