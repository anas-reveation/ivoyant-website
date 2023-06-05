import Button from './Button'
import { Link } from '@remix-run/react'
export default function ViewCoursesForm() {
  function handleFileSelect(event: any) {
    let inputImage = event.target.files[0]
    let imageName = document.getElementById('imageName')
    if (imageName) {
      imageName.innerText = inputImage.name
    }
  }
  return (
    <div className="container my-5 form-hover">
      <h1 className="fw-semibold mb-5">Java Microservices Developer</h1>
      <div>
        <h5 className="fw-semibold">Easy Apply</h5>
        <p>
          Choose an Option to complete yourapplication.you can till fill your
          profile manually
        </p>
        <div className="row gy-4 mb-5">
          <div className="col-xl-10 col-lg-9 col-md-8 col-12">
            <div className=" border border-2  text-center d-flex flex-column justify-content-center browse-h">
              <label
                htmlFor="formFile"
                className="form-label para fw-semibold mb-0 "
              >
                Browse Resume{' '}
                <span className="fw-light">or just drop it here</span>
                <p className="fw-light para">(Optional)</p>
                <span id="imageName"></span>
              </label>
              <input
                type="file"
                className="form-control border-0 rounded-0 post-forms para d-none"
                id="formFile"
                capture="environment"
                onChange={handleFileSelect}
              />
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-12">
            <p className="para text-center f-11">
              Please sign in to apply with Linkedln
            </p>
            <div>
              <Link to="">
                <Button
                  text="Apply with Linkedin"
                  borderColor="black"
                  color=""
                  className="mb-3 py-1 fw-semibold para"
                  width="216px"
                  height="40px"
                />
              </Link>
            </div>
            <div>
              <Link to="">
                <Button
                  text="Apply with Indeed"
                  borderColor="black"
                  color=""
                  className="mb-3 py-1 fw-semibold para"
                  width="216px"
                  height="40px"
                />
              </Link>
            </div>
          </div>
        </div>
        <h5 className="fw-semibold">Personal Information</h5>
        <img src="./images/Home/photo.svg" alt="" className="my-4" />
        <div className="row gy-4">
          <div className="col-md-6">
            <div className="form-group ">
              <label className="form-label para">First Name</label>
              <input
                type="text"
                className="form-control  rounded-0"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder=""
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group ">
              <label className="form-label para">Last Name</label>
              <input
                type="text"
                className="form-control  rounded-0"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder=""
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group ">
              <label className="form-label para">Email</label>
              <input
                type="text"
                className="form-control  rounded-0"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder=""
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group ">
              <label className="form-label para">Confirm Your Email</label>
              <input
                type="text"
                className="form-control  rounded-0"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder=""
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group ">
              <label className="form-label para">Place Of Residence</label>
              <input
                type="text"
                className="form-control  rounded-0"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder=""
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group ">
              <label className="form-label para">Phone Number</label>
              <input
                type="text"
                className="form-control  rounded-0"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder=""
              />
            </div>
          </div>
        </div>
        <hr className="my-5"></hr>
        <div className="row">
          <div className="col-md-6">
            <h5 className="fw-semibold">Experience</h5>
          </div>
          <div className="col-md-6 text-end">
            <Link to="">
              <Button
                text="+ Add"
                borderColor="black"
                color=""
                className="mb-3 py-1 fw-semibold para"
                width="134px"
                height="40px"
              />
            </Link>
          </div>
        </div>
        <div className="row  my-4">
          <div className="col-12 d-flex flex-row justify-content-end ">
            <div className="col-11 ">
              <div className="border border-1">
                <div className="row p-4 gy-4">
                  <div className="col-md-6">
                    <div className="form-group ">
                      <label className="form-label para">Title</label>
                      <input
                        type="text"
                        className="form-control  rounded-0"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group ">
                      <label className="form-label para">Company</label>
                      <input
                        type="text"
                        className="form-control  rounded-0"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group ">
                      <label className="form-label para">Office Location</label>
                      <input
                        type="text"
                        className="form-control  rounded-0"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label para rounded-0">
                        Description
                      </label>
                      <textarea
                        className="form-control rounded-0"
                        id="exampleFormControlTextarea1"
                        rows={3}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="row justify-content-end">
                      <div className="col-md-2 w-auto">
                        <Link to="">
                          <Button
                            text="Cancel"
                            borderColor="black"
                            color=""
                            className="mb-3 py-1 fw-semibold para"
                            width="134px"
                            height="40px"
                          />
                        </Link>
                      </div>
                      <div className="col-md-2 w-auto">
                        <Link to="">
                          <Button
                            text="Save"
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
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6">
            <h5 className="fw-semibold">Education</h5>
          </div>
          <div className="col-md-6 text-end">
            <Link to="">
              <Button
                text="+ Add"
                borderColor="black"
                color=""
                className="mb-3 py-1 fw-semibold para"
                width="134px"
                height="40px"
              />
            </Link>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-12 d-flex flex-row justify-content-end ">
            <div className="col-11">
              <div className="border border-1">
                <div className="row p-4 gy-4">
                  <div className="col-md-12">
                    <div className="form-group ">
                      <label className="form-label para">Institution</label>
                      <input
                        type="text"
                        className="form-control  rounded-0"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group ">
                      <label className="form-label para">Major</label>
                      <input
                        type="text"
                        className="form-control  rounded-0"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group ">
                      <label className="form-label para">Degree</label>
                      <input
                        type="text"
                        className="form-control  rounded-0"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label para rounded-0">
                        Description
                      </label>
                      <textarea
                        className="form-control rounded-0"
                        id="exampleFormControlTextarea1"
                        rows={3}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="row justify-content-end">
                      <div className="col-md-2 w-auto">
                        <Link to="">
                          <Button
                            text="Cancel"
                            borderColor="black"
                            color=""
                            className="mb-3 py-1 fw-semibold para"
                            width="134px"
                            height="40px"
                          />
                        </Link>
                      </div>
                      <div className="col-md-2 w-auto">
                        <Link to="">
                          <Button
                            text="Save"
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
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <h5 className="fw-semibold">On The Web</h5>
          </div>
        </div>

        <div className="row  my-4">
          <div className="col-12 d-flex flex-row justify-content-end ">
            <div className="col-12">
              <div className="">
                <div className="row  gy-4">
                  <div className="col-md-6">
                    <div className="form-group ">
                      <label className="form-label para">Linkedin</label>
                      <input
                        type="text"
                        className="form-control  rounded-0"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group ">
                      <label className="form-label para">Website</label>
                      <input
                        type="text"
                        className="form-control  rounded-0"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group ">
                      <label className="form-label para">Other Links</label>
                      <input
                        type="text"
                        className="form-control  rounded-0"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 mb-4">
          <div className="col-md-6">
            <h5 className="fw-semibold">Resume</h5>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className=" border border-2  text-center d-flex flex-column justify-content-center py-4">
              <label
                htmlFor="formFile"
                className="form-label para fw-semibold mb-0 cursor-browse"
              >
                Browse Resume{' '}
                <span className="fw-light">or just drop it here</span>
                <span id="imageName"></span>
              </label>
              <input
                type="file"
                className="form-control border-0 rounded-0 post-forms para d-none"
                id="formFile"
                capture="environment"
                onChange={handleFileSelect}
              />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <h5 className="fw-semibold">Message to Hiring Manager</h5>
            <p>Let the Company know Your interest working there</p>
          </div>
        </div>
        <div className="row  gy-4 ">
          <div className="col-12">
            <div className="">
              <textarea
                className="form-control rounded-0"
                id="exampleFormControlTextarea1"
                rows={5}
              ></textarea>
            </div>
          </div>
          <div className="col-12 text-end">
            <Link to="">
              <Button
                text="Next"
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
  )
}
