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
        <h2 className="fw-semibold">{Title1}</h2>
        <p className="para mt-3 mb-4 f18">{Description1}</p>
        <ul className="row gy-3 para">
          {BulletsPoint?.map((d: any) => {
            return <li className="col-md-6">{d?.BulletPoints}</li>
          })}
        </ul>
      </div>
    </div>
  )
}
