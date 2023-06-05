import { Link } from '@remix-run/react'

export interface SlugBioCardProps {
  Image?: string
  Name?: string
  Bio?: string
  ImgEnv?: string
  SocialLinks?: []
}

export default function SlugBioCard(props: SlugBioCardProps) {
  const { Image, Name, Bio, SocialLinks,ImgEnv } = props

  return (
    <>
      <div className="p-5 box-shadow bg-white">
        <img src={Image} className="col-3" style={{ borderRadius: '50%' }} />
        <h5 className="py-3">{Name}</h5>
        <p className="para">{Bio}</p>
        <div className="row">
          {SocialLinks?.map((d: any) => {
            return (
              <>
                <div className="col-md-1 col-2 me-2">
                  <Link to={d?.SocialLink} target="_blank">
                    <img
                      src={
                        ImgEnv +
                        d?.SocialIcon?.data?.attributes?.url
                      }
                    />
                  </Link>
                </div>
              </>
            )
          })}
          {/* <div className="col-md-1 col-2 me-2">
            <a href="" target="_blank">
              <img src="../images/blogs/path14.svg" />
            </a>
          </div>
          <div className="col-md-1 col-2 me-2">
            <a href="" target="_blank">
              <img src="../images/blogs/path14.svg" />
            </a>
          </div>
          <div className="col-md-1 col-2 me-2">
            <a href="" target="_blank">
              <img src="../images/blogs/path14.svg" />
            </a>
          </div>
          <div className="col-md-1 col-2 me-2">
            <a href="" target="_blank">
              <img src="../images/blogs/path14.svg" />
            </a>
          </div> */}
        </div>
      </div>
    </>
  )
}
