import React from "react";
import "../css/main.css";

export default function ProjectRepot() {
  return (
    <div className="card">
      <div className="header">
        <h2>Overall Project Report</h2>
        <ul className="header-dropdown">
          <li className="dropdown">
            <a
              href="javascript:void(0);"
              className="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            ></a>
            <ul className="dropdown-menu dropdown-menu-right">
              <li>
                <a href="javascript:void(0);">Action</a>
              </li>
              <li>
                <a href="javascript:void(0);">Another Action</a>
              </li>
              <li>
                <a href="javascript:void(0);">Something else</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="body">
        <div id="pie-chart" className="ct-chart"></div>
      </div>
    </div>
  );
}
