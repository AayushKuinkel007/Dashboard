import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid p-2 bg-dark">
        <div className="row align-items-center">
          <div className="col-md-4 d-flex align-items-center">
            <h3 className="text-light m-0">Img</h3>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <ul className="d-flex justify-content-center m-0 p-0">
              <li className="ms-5" style={{ listStyle: "none" }}>
                <Link className="text-light" to='/' style={{textDecoration:'none'}}>
                    Home
                </Link>
              </li>
              <li className="ms-5 text-light" style={{ listStyle: "none" }}>
                About us
              </li>
              <li className="ms-5 text-light" style={{ listStyle: "none" }}>
                Contact us
              </li>
            </ul>
          </div>
          <div className="col-md-4 d-flex justify-content-end align-items-center">
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
            <Link to="/signup" className="btn btn-success ms-3">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
