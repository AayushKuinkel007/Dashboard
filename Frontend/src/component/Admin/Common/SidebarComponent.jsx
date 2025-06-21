import React from "react";
import { Link } from "react-router-dom";
const SidebarComponent = () => {
  return (
    <>
      <div className="bg-light border broder-end">
        <ul className="nav flex-column p-3">
          <li className="nav-item">
            <div className="d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-columns-gap me-2"
                viewBox="0 0 16 16"
              >
                <path d="M6 1v3H1V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm14 12v3h-5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM6 8v7H1V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm14-6v7h-5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z" />
              </svg>
              <Link className="nav-link p-0" to="/">
                Dashboard
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/product-list">
              Products
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SidebarComponent;
