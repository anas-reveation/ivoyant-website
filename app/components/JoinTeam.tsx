import { Link } from '@remix-run/react'
export default function JoinTeam() {
  return (
    <div className="bg-secondary py-5 mb-5">
      <div className="container">
        <h4 className="fw-bold text-center text-white">Join Our Team</h4>
        <div className="row">
          <div className="col-4 col-md-3 margin-inherit text-lg-end text-md-start text-xl-end  pl-14">
            <p className="fw-light text-white para ">Filter By:</p>
          </div>
        </div>
        <div className="row col-12 justify-content-center gy-3">
          <div className=" col-xl-2 col-lg-3 col-md-4 col-12">
            <div className="dropdown">
              <a
                className="btn btn-secondary dropdown-toggle w-12 rounded-0 join-btn para py-2 rounded-1"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                All Categories
              </a>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-12">
            <div className="dropdown">
              <a
                className="btn btn-secondary dropdown-toggle w-12 rounded-0 join-btn para py-2 rounded-1"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown link
              </a>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-lg-3 col-md-4 col-12">
            <div>
              <div className="input-group bg-transparent">
                <span
                  className="input-group-text bg-transparent search-icon"
                  id="basic-addon2"
                >
                  <i className="bi bi-search text-white"></i>
                </span>
                <input
                  type="text"
                  className="form-control rounded-0 join-btn rounded-1 p-2 search-bar"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-9 col-md-12 mt-4 col-12">
            <hr className="hr-img"></hr>
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item bg-transparent">
                <h4
                  className="accordion-header text-white para bg-transparent"
                  id="flush-headingOne"
                >
                  <button
                    className="accordion-button collapsed bg-transparent text-white f-20 py-4 px-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    ENGINEERING & SECURITY
                  </button>
                </h4>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body text-white para">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> className.
                    This is the first item's accordion body.{' '}
                    <span className=" ">
                      <Link
                        className="text-decoration-none light-green fw-semibold"
                        to="/courses"
                      >
                        View
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-transparent text-white">
                <h2
                  className="accordion-header bg-transparent text-white"
                  id="flush-headingTwo"
                >
                  <button
                    className="accordion-button collapsed bg-transparent text-white f-20 py-4 px-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    ENGINEERING & SECURITY
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body text-white para">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> className.
                    This is the second item's accordion body. Let's imagine this
                    being filled with some actual content.
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-transparent text-white">
                <h2
                  className="accordion-header bg-transparent text-white"
                  id="flush-headingThree"
                >
                  <button
                    className="accordion-button collapsed bg-transparent text-white f-20 py-4 px-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    ENGINEERING & SECURITY
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body text-white para">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> className.
                    This is the third item's accordion body. Nothing more
                    exciting happening here in terms of content, but just
                    filling up the space to make it look, at least at first
                    glance, a bit more representative of how this would look in
                    a real-world application.
                  </div>
                </div>
              </div>
            </div>
            <hr className="hr-img mt-0"></hr>
          </div>
        </div>
      </div>
    </div>
  )
}
