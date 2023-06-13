export interface DetailThirdProps {
  Title1?: string
  Description1?: string
  BulletsPoint?: []
}

export default function PracticeDetailThird(props: DetailThirdProps) {
  const { Title1, Description1, BulletsPoint } = props

  return (
    <div className="bg-secondary py-4 border-bottom">
      <div className="container my-4 text-white">
        <h2 className="fw-semibold mb-3">{Title1}</h2>
        <h6 className="para mt-4 mb-5 fw-500">{Description1}</h6>
        <ul className="row gy-4 para mb-5">
          {BulletsPoint?.map((d: any) => {
            return <li className="col-md-6">{d?.BulletPoints}</li>
          })}
        </ul>
      </div>
    </div>
  )
}
