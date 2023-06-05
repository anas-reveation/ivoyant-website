import IndustriesSlugCard from '~/components/IndustriesSlugCard'
import OurApprochCard from '~/components/OurApprochCard'

export default function IndustriesSlug() {
  return (
    <>
      <div className="container-fluid bg-black">
        <div className="container py-5">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-8 col-12">
              <h2 className=" white-text pb-3">Finance And Payments</h2>
              <p className="para white-text lh-base fw-normal">
                Digital financial services are on the ascend and technology
                transformation is reimagining the finance industry.. wonder we
                observe a growing demand for FinTech software development
                services when talking to our clients. whether you are a fintech
                startup or a bank, ivoyant can help provide your customers with
                a delightful consumer experiences and technology solutions.
              </p>
            </div>
            <img className="col-12 col-md-4" src="./images/howwe/bro.svg" />
          </div>
        </div>
      </div>
      <h4 className="fw-600 text-center py-4">
        FinTech Applications That We Develop
      </h4>
      <div className="container mb-4">
        <div className="row justify-content-md-between justify-content-center gy-4">
          <IndustriesSlugCard />
          <IndustriesSlugCard />
          <IndustriesSlugCard />
          <IndustriesSlugCard />
          <IndustriesSlugCard />
          <IndustriesSlugCard />
        </div>
      </div>
      <div className="bg-secondary border-bottom">
        <div className="container py-5">
          <div className="row justify-content-center justify-content-md-between align-items-center">
            <div className="col-12 col-md-6 white-text">
              <h2>As a Technology Company, We Provide:</h2>
            </div>
            <div className="col-12 col-md-6 lh-lg white-text">
              <ul className="para  fw-normal disc">
                <li>Custom financial applications development</li>
                <li>Fintech-related UI/UX and design services</li>
                <li>Mobile banking app development</li>
                <li>
                  Digital banking software development and payment solutions
                </li>
                <li>Factoring solutions.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
