import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div>
        <p>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseWidthExample"
            aria-expanded="false"
            aria-controls="collapseWidthExample"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </p>
        <div style={{ minHeight: 120 }}>
          <div
            className="collapse collapse-horizontal"
            id="collapseWidthExample"
          >
            <div className="card card-body" style={{ width: 500 }}>
              <div class="d-flex flex-row mb-3">
                <div class="p-2">
                  <Link to="/">BARCHART</Link>
                </div>
                <div class="p-2">
                  <Link to="/piechart">PIECHART</Link>
                </div>
                <div class="p-2">
                  <Link to="/linechart">LINECHART</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
