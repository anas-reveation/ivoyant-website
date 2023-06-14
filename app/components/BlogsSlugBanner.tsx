export interface BlogSlugBannerProps {
  Heading?: string
  Name?: string
  Date?: string
  imageurl?: string
}

export default function BlogsSlugBanner(props: BlogSlugBannerProps) {
  const { Heading, Name, Date: dateString, imageurl } = props

  const dateObject = dateString ? new Date(dateString) : null

  const day = dateObject?.getDate()
  const month = dateObject?.toLocaleString('en-US', { month: 'long' })
  const year = dateObject?.getFullYear()

  const formattedDate = day && month && year ? `${day} ${month} ${year}` : null

  return (
    <>
      <div
        className="w-100 bg-black"
        style={{
          backgroundImage: `linear-gradient(rgb(44 29 29 / 71%),rgb(21 20 20 / 81%)),url(${imageurl})`,
          backgroundSize: '100% 100%',
        }}
      >
        <div className="container white-text">
          <div className="width-60 mb-4 pt-5">
            <h1 className="fw-600 lh-base mt-5">{Heading}</h1>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-3 col-md-4 d-flex align-items-center py-md-5 py-3">
              <img alt="User" src={`../images/blogs/Vector@2x.svg`} />
              <p className="fs-14 mb-0 ps-3">By {Name}</p>
            </div>

            <div className="col-lg-3 col-md-4 d-flex align-items-center pb-3 pb-md-0">
              <img src="../images/blogs/Vector3.svg" />
              <p className="fs-14 mb-0 ps-3">{formattedDate}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
