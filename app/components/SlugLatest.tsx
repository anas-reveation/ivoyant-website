export interface SlugLatestCardProps {
  BlogsData?: []
  ImageEnv?: string
}

export default function SlugLatestCard(props: SlugLatestCardProps) {
  const { BlogsData, ImageEnv } = props
  console.log(BlogsData)

  return (
    <>
      <div className="mt-3 box-shadow p-5 bg-white">
        <h3 className="pb-4">Latest Post</h3>
        {BlogsData?.slice(0, 3).map((d: any) => {
          return (
            <>
              <div className="row mb-4">
                <div className="col-4">
                  <img
                    src={
                      ImageEnv + d?.attributes?.BgImage?.data?.attributes?.url
                    }
                    className="w-100 img-latest"
                  />
                </div>
                <div className="col-8">
                  <p className="para">{d?.attributes?.CardTitle}</p>
                  <div className=" d-flex align-items-center">
                    <img src="../images/blogs/Vector4.svg" className="" />
                    <p className="para col-6 mb-0 ps-3">
                      {d?.attributes?.CreateDate}
                    </p>
                  </div>
                </div>
              </div>
            </>
          )
        })}

        {/* <div className="row mb-4">
          <div className="col-4">
            <img src="../images/blogs/Rectangle 726.svg" className="w-100" />
          </div>
          <div className="col-8">
            <p className="para">Thoughtful man using laptop pondering</p>
            <div className=" d-flex align-items-center">
              <img src="../images/blogs/Vector4.svg" className="" />
              <p className="para col-6 mb-0 ps-3">31 may 2021</p>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-4">
            <img src="../images/blogs/Rectangle 726.svg" className="w-100" />
          </div>
          <div className="col-8">
            <p className="para">Thoughtful man using laptop pondering</p>
            <div className=" d-flex align-items-center">
              <img src="../images/blogs/Vector4.svg" className="" />
              <p className="para col-6 mb-0 ps-3">31 may 2021</p>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-4">
            <img src="../images/blogs/Rectangle 726.svg" className="w-100" />
          </div>
          <div className="col-8">
            <p className="para">Thoughtful man using laptop pondering</p>
            <div className=" d-flex align-items-center">
              <img src="../images/blogs/Vector4.svg" className="" />
              <p className="para col-6 mb-0 ps-3">31 may 2021</p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  )
}
