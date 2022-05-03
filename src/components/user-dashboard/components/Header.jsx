import React from "react";
import "../css/main.css";
import { AiOutlineHome } from "react-icons/ai";

export default function Header() {
  return (
    <div className="row">
      <div className="col-lg-5 col-md-8 col-sm-12">
        <h2>Dashboard</h2>
        <ul className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="index.html">
              <i className="icon-home"></i>
            </a>
          </li>
          <li className="breadcrumb-item active">Overview</li>
        </ul>
      </div>
    </div>
  );
}
