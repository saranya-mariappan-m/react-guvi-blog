import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const NavigationMenu = () => {

  const [navbarExpanded, setNavbarExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setNavbarExpanded(!navbarExpanded);
  };

  const location = useLocation();
  const ExcludedPaths = ['/blog', '/blog/full-stack-development', '/blog/data-science', '/blog/careers', '/blog/cyber-security'];
  const showNavBar = ExcludedPaths.includes(location.pathname);

  return showNavBar ? (
    <nav className="navbar text-center navbar-expand-lg navbar-light bg-light m-5 ">
      <Link className="navbar-brand" to="/">
        {navbarExpanded ? 'Blog Category' : null}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={handleNavbarToggle}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`navbar-collapse justify-content-center ${navbarExpanded ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/blog">
              ALL
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog/full-stack-development">
              FULL STACK DEVELOPMENT
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog/data-science">
              DATA SCIENCE
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog/cyber-security">
              CYBER SECURITY
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog/careers">
              CAREER
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  ) : null;
};

export default NavigationMenu;
