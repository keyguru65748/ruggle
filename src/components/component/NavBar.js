import React from "react";
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <header>
        <div className="container-fluid custom-nav">
          <nav className="navbar navbar-expand-lg fixed-top" style={{}}>
            <a className="navbar-brand d-sm-block d-none" href="/">
              <img
                src="/images/logo.png"
                style={{ height: '90px', width: 'auto' }}
                className="img-fluid"
                alt="Ruugle"
              />
            </a>
            <a className="navbar-brand d-block d-sm-none" href="/">
              <img
                style={{ height: '90px', width: 'auto' }}
                src="/images/logo-small.png"
                className="img-fluid"
                alt="Ruugle"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
              <span className="navbar-toggler-icon" />
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" data-scroll href="/#about">
                    About <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-scroll href="/#token">
                    Tokenomics
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-scroll href="/#contact">
                    Contact
                  </a>
                </li>
                {/* <li className="nav-item">
                  <Link to="/page" className="nav-link">
                    PulsePad
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link to="/dex" className="nav-link">
                    Dex
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/IDO" className="nav-link">
                    IDO
                  </Link>
                </li>
                <a
                  className="btn my-2 my-sm-0 orange-btn"
                  data-target="#registerModalCenter"
                  data-toggle="modal"
                  href="/"
                >
                  Register Today
                </a>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
