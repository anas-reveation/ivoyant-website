import Button from './Button'
import { Link } from '@remix-run/react'
export default function Post() {
  return (
    <div className="container my-5">
      <div className="row gy-4">
        <div className="col-xl-5 col-lg-5 col-md-12 col-12">
          <div className="d-flex flex-column align-items-center">
            <img src="./images/Home/post.svg" className="img-ht" />
            <div className="mt-4">
              <h4 className="fw-semibold">Cant Find A Role For you?</h4>
              <p>
                Upload your details and our recruitment team will Contact You
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-7 col-lg-7 col-md-12 col-12">
          <h4 className="fw-bold">Prospective Posts</h4>
          <h5 className="my-5">Post Your Resume</h5>
          <div className="row gy-4">
            <div className="col-md-6 col-6">
              <div className="form-group mb-4">
                <input
                  type="text"
                  className="form-control  rounded-0 border-0 post-form text-dark para"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="col-md-6 col-6">
              <select
                className="form-select form-select-lg mb-3 border-0 rounded-0 post-form para"
                aria-label=".form-select-lg example"
              >
                <option className="mt-5" selected>
                  Skills
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col-md-6 col-6">
              <div className="form-group mb-4">
                <input
                  type="text"
                  className="form-control  rounded-0 border-0 post-form para"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="col-md-6 col-6">
              <select
                className="form-select form-select-lg mb-3 border-0 rounded-0 post-form para"
                aria-label=".form-select-lg example"
              >
                <option className="mt-5" selected>
                  Experience In years
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col-md-6 col-6">
              <div className="mb-3">
                <input
                  className="form-control border-0 rounded-0 post-form para"
                  type="file"
                  id="formFile"
                />
                <span className="f-11">
                  Upload Your Resume*(upload only.doc,.docx,.rtf,.pdf files)
                </span>
              </div>
            </div>
            <div className="col-md-6 col-6">
              <select
                className="form-select form-select-lg mb-3 border-0 rounded-0 post-form para"
                aria-label=".form-select-lg example"
              >
                <option className="mt-5" selected>
                  Location
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="mt-0 mb-2">
              <span className="mt-0  fw-semibold ms-5 ps-5">or</span>
            </div>
            <div className="col-md-6 col-6 mt-0 text-center text-md-start">
              <div className="d-flex align-items-center flex-row  w-fit p-2">
                <img src="./images/Home/link-1.svg" className="me-1" />
                <p className="mb-0 para fw-semibold">Apply With Linkedin</p>
              </div>
            </div>
            <div className="col-md-6 col-6 text-end mt-0">
              <Link to="">
                <Button
                  text="Submit"
                  borderColor="black"
                  color=""
                  className="mb-3 py-1 fw-semibold para"
                  width="134px"
                  height="40px"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
