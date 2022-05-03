import React from "react";
import "../css/main.css";

const Header = () => {
  return (
    <div className="row">
      <div className="col-lg-5 col-md-8 col-sm-12">
        <h2>Projects</h2>
        <ul className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="index.html">
              <i className="icon-home"></i>
            </a>
          </li>
          <li className="breadcrumb-item active">Projects</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
