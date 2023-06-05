import { Link } from '@remix-run/react'
export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <div className="container">
          <a
            className="navbar-brand text-white d-flex align-items-center"
            href="/"
          >
            <img
              src="../images/Home/group-2911.svg"
              alt=""
              className="logo-header"
            />
            <div className="ms-3 footer-family">ivoyant</div>
          </a>
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse header"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav text-white m-auto">
              <li className="nav-item text-white me-1">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/whoweare"
                >
                  Who We Are
                </Link>
              </li>
              <li className="nav-item dropdown text-white me-1">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  What We Do
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li className="text-white">
                    <Link className="dropdown-item" to="#">
                      Services &raquo;{' '}
                    </Link>
                    <ul className="dropdown-menu dropdown-submenu ms-1">
                      <li>
                        <Link className="dropdown-item" to="/digitalexperience">
                          Digital Experience
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/technologytransformation"
                        >
                          Technology Transformation
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/technologyoperation"
                        >
                          Technology Operation
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="text-white">
                    <Link className="dropdown-item" to="/industries">
                      Industries
                    </Link>
                  </li>
                  <li className="text-white">
                    <Link className="dropdown-item" to="/technologypractice">
                      Technology Practices
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item text-white me-1">
                <Link className="nav-link text-white" to="/howwedo">
                  How We Do
                </Link>
              </li>
              <li className="nav-item dropdown text-white me-1">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li className="text-white">
                    <Link className="dropdown-item" to="#">
                      White Page &raquo;{' '}
                    </Link>
                    <ul className="dropdown-menu dropdown-submenu ms-1">
                      <li>
                        <Link className="dropdown-item" to="/privacypolicy">
                        Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/cookiepolicy"
                        >
                          Cookie Policy
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/termscondition"
                        >
                          Terms and Condition
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="text-white">
                    <Link className="dropdown-item" to="/blogs">
                      Blogs
                    </Link>
                  </li>
                  
                </ul>
              </li>
              <li className="nav-item text-white me-1">
                <Link className="nav-link text-white" to="/careers">
                  Careers
                </Link>
              </li>
              <li className="nav-item text-white me-1">
                <Link className="nav-link text-white" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item text-white list-unstyled header d-lg-none ">
                <Link className="nav-link text-white" to="/lifeatIvoyant">
                  Life at iVoyant
                </Link>
              </li>
            </ul>
          </div>
          <li className="nav-item text-white list-unstyled header d-none d-lg-block">
            <Link className="nav-link text-white" to="/lifeatIvoyant">
              Life at iVoyant
            </Link>
          </li>
        </div>
      </nav>
    </div>
  )
}
