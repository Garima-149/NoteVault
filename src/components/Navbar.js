import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
import screenshot from "./Screenshot (55).png";
const Navbar = () => {
  return (
    <>
       <img src={screenshot} alt=".." className="image"/>
      <nav className="navbar navbar-expand-lg " style={{ "background-color":"#333399"}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            NoteVault
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="nav-link active text-white hover" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active text-white hover" aria-current="page" to="/">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active text-white hover" aria-current="page" to="/resource">
                  Resources
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active text-white hover" aria-current="page" to="/feedback">
                  Feedback
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white hover" aria-current="page" to="/">
                  Contact
                </Link>
              </li>

            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};


export default Navbar;
