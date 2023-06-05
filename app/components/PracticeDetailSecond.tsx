export interface DetailSecondProps {
  Title?: string
  Description?: string
  image?:string
}


export default function PracticeDetailSecond(props:DetailSecondProps) {
  const { Title, Description,image } = props

  return (
    <div className="container my-4">
      <h4 className="fw-semibold">{Title}</h4>
      <p className="para mt-3 mb-4">
        {Description}
      </p>
      <div className="row">
        <div className="col-12">
          <div>
            <img className="w-100 h-100" src={image} />
          </div>
        </div>
      </div>
    </div>
  )
}
