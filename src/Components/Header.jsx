import { Link } from "react-router-dom";
import './Header.css';
import GuviBlogLogo from '../assets/GuviBlogLogo.png'
import blogHeader from '../assets/blogHeader.png'

function Navbar() {

  return (
    <>
      <nav className="navbar text-center navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img width="121" height="53" src={GuviBlogLogo} alt="Guvi-blog-logo" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto justify-content-center">
              <li className="nav-item me-3">
                <Link className="nav-link active" aria-current="page" href="#!">COURSES</Link>
              </li>
              <li className="nav-item dropdown me-3">
                <Link className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  LIVE CLASSES
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" href="#!">Class 1</Link></li>
                  <li><Link className="dropdown-item" href="#!">Class 2</Link></li>
                  <li><Link className="dropdown-item" href="#!">Class 3</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown me-3">
                <Link className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  PRACTICE
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" href="#!">Class 1</Link></li>
                  <li><Link className="dropdown-item" href="#!">Class 2</Link></li>
                  <li><Link className="dropdown-item" href="#!">Class 3</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown me-3">
                <Link className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  RESOURCES
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" href="#!">Class 1</Link></li>
                  <li><Link className="dropdown-item" href="#!">Class 2</Link></li>
                  <li><Link className="dropdown-item" href="#!">Class 3</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown me-3">
                <Link className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  OUR PRODUCTS
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" href="#!">Class 1</Link></li>
                  <li><Link className="dropdown-item" href="#!">Class 2</Link></li>
                  <li><Link className="dropdown-item" href="#!">Class 3</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <img className="pic" src={blogHeader} alt="header" />
    </>
  )
}

export default Navbar