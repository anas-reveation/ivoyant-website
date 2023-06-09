import { Link, useLocation } from '@remix-run/react'
import { json } from '@remix-run/node'
import { loader } from '~/root'
import { useLoaderData } from '@remix-run/react'

export default function Header() {
  const result = useLoaderData<typeof loader>()

  const location = useLocation()

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary ">
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
            <ul className="navbar-nav text-white m-auto what-we">
              <li className={`nav-item text-white me-1 `}>
                <Link
                  className={`nav-link text-white ${
                    location.pathname === '/whoweare' ? 'active' : ''
                  }`}
                  to="/whoweare"
                >
                  Who We Are
                </Link>
              </li>
              <li className="nav-item dropdown text-white me-1 what-we-are">
                <a
                  className={`nav-link dropdown-toggle text-white ${
                    location.pathname.includes('/digitalexperience') ||
                    location.pathname.includes('/technologytransformation') ||
                    location.pathname.includes('/technologyoperation') ||
                    location.pathname.includes('/industries') ||
                    location.pathname.includes('/technologypractice')
                      ? 'active'
                      : ''
                  }`}
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  What We Do
                </a>
                <ul
                  className="dropdown-menu bg-black text-white"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li className="text-white">
                    <Link className={`dropdown-item `} to="#">
                      Services <span className="light-green f-11">&#9658;</span>
                    </Link>
                    <ul
                      className="dropdown-menu dropdown-submenu ms-1 "
                      id="submenu"
                    >
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
                    <Link className={`dropdown-item `} to="/industries">
                      Industries{' '}
                      <span className="light-green f-11">&#9658;</span>
                    </Link>
                    <ul
                      className="dropdown-menu dropdown-submenu ms-1 bg-black"
                      id="submenu"
                    >
                      {result?.Slugdata?.industriesCards?.data.map((d: any) => {
                        return (
                          <li>
                            <Link
                              className="dropdown-item"
                              to={'industries' + '/' + d?.attributes?.Slug}
                            >
                              {d?.attributes?.Title}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </li>
                  <li className="text-white">
                    <Link className={`dropdown-item `} to="/technologypractice">
                      Technology Practices{' '}
                      <span className="light-green f-11">&#9658;</span>
                    </Link>
                    <ul
                      className="dropdown-menu dropdown-submenu ms-1 bg-black"
                      id="submenu"
                    >
                      {result?.SlugData1?.technologyPracticeSlugs?.data.map(
                        (d: any) => {
                          return (
                            <li>
                              <Link
                                className="dropdown-item"
                                to={
                                  'technologypractice' +
                                  '/' +
                                  d?.attributes?.Slug
                                }
                              >
                                {d?.attributes?.Heading}
                              </Link>
                            </li>
                          )
                        }
                      )}
                    </ul>
                  </li>
                </ul>
              </li>
              <li className={`nav-item text-white me-1 `}>
                <Link
                  className={`nav-link text-white ${
                    location.pathname === '/howwedo' ? 'active' : ''
                  }`}
                  to="/howwedo"
                >
                  How We Do
                </Link>
              </li>
              <li className={`nav-item text-white me-1 `}>
                <Link
                  className={`nav-link text-white ${
                    location.pathname === '/careers' ? 'active' : ''
                  }`}
                  to="/careers"
                >
                  Careers
                </Link>
              </li>
              <li className="nav-item dropdown text-white me-1 resource">
                <a
                  className={`nav-link dropdown-toggle text-white ${
                    location.pathname.includes('/privacypolicy') ||
                    location.pathname.includes('/cookiepolicy') ||
                    location.pathname.includes('/termscondition') ||
                    location.pathname.includes('/blogs')
                      ? 'active'
                      : ''
                  } `}
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
                      White Page{' '}
                      <span className="light-green f-11">&#9658;</span>
                    </Link>
                    <ul className="dropdown-menu dropdown-submenu ms-1">
                      <li>
                        <Link className="dropdown-item" to="/privacypolicy">
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/cookiepolicy">
                          Cookie Policy
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`dropdown-item ${
                            location.pathname === '/termscondition'
                              ? 'active'
                              : ''
                          }`}
                          to="/termscondition"
                        >
                          Terms and Condition
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className={`text-white `}>
                    <Link
                      className={`dropdown-item ${
                        location.pathname === '/blogs' ? 'active' : ''
                      }`}
                      to="/blogs"
                    >
                      Blogs
                    </Link>
                  </li>
                </ul>
              </li>

              <li className={`nav-item text-white me-1 `}>
                <Link
                  className={`nav-link text-white ${
                    location.pathname === '/contact' ? 'active' : ''
                  }`}
                  to="/contact"
                >
                  Contact Us
                </Link>
              </li>
              <li className="nav-item text-white list-unstyled header d-lg-none">
                <Link
                  className={`nav-link text-white ${
                    location.pathname === '/lifeatIvoyant' ? 'active' : ''
                  }`}
                  to="/lifeatIvoyant"
                >
                  Life at iVoyant
                </Link>
              </li>
            </ul>
          </div>
          <li className="nav-item text-white list-unstyled header d-none d-lg-block">
            <Link
              className={`nav-link text-white ${
                location.pathname === '/lifeatIvoyant' ? 'active' : ''
              }`}
              to="/lifeatIvoyant"
            >
              Life at iVoyant
            </Link>
          </li>
        </div>
      </nav>
    </div>
  )
}
