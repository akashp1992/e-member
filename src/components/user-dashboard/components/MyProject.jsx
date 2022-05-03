import React from "react";
import "../css/main.css";

export default function MyProject() {
  return (
    <div className="card">
      <div className="header">
        <h2>My Projects</h2>
        <div className="header-SeeMore">
          <a href="javascript:void(0);"> See More</a>
        </div>
      </div>
      <div className="table-responsive oddTable">
        <table className="table m-b-0">
          <thead className="thead-dark">
            <tr>
              <th>Project Name</th>
              <th>Total Members</th>
              <th>Project Started On</th>
              <th>Project Ending On</th>
              <th>Target Amount</th>
              <th>Amount Collected</th>
              <th>% Achieved</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className="list-name">Wakefield Project</span>
              </td>
              <td>500</td>
              <td>June 18,2021</td>
              <td>June 18,2024</td>
              <td>£4000</td>
              <td>£1000</td>
              <td>
                <div className="progress progress-xs">
                  <div
                    className="progress-bar progress-bar-success"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "100%" }}
                  >
                    <span className="progress-text">100%</span>{" "}
                  </div>
                </div>
              </td>
              <td>
                <a
                  href="javascript:void(0);"
                  className="btn btn-success btn-sm"
                >
                  Active
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="list-name">Wakefield Project</span>
              </td>
              <td>500</td>
              <td>June 18,2021</td>
              <td>June 18,2024</td>
              <td>£4000</td>
              <td>£1000</td>
              <td>
                <div className="progress progress-xs">
                  <div
                    className="progress-bar progress-bar-warning"
                    role="progressbar"
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "10%" }}
                  >
                    {" "}
                    <span className="progress-text">0%</span>{" "}
                  </div>
                </div>
              </td>
              <td>
                <a
                  href="javascript:void(0);"
                  className="btn btn-warning btn-sm"
                >
                  Draft
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="list-name">Wakefield Project</span>
              </td>
              <td>500</td>
              <td>June 18,2021</td>
              <td>June 18,2024</td>
              <td>£4000</td>
              <td>£1000</td>
              <td>
                <div className="progress progress-xs">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "50%" }}
                  >
                    {" "}
                    <span className="progress-text">50%</span>{" "}
                  </div>
                </div>
              </td>
              <td>
                <a
                  href="javascript:void(0);"
                  className="btn btn-success btn-sm"
                >
                  Active
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="list-name">Wakefield Project</span>
              </td>
              <td>500</td>
              <td>June 18,2021</td>
              <td>June 18,2024</td>
              <td>£4000</td>
              <td>£1000</td>
              <td>
                <div className="progress progress-xs">
                  <div
                    className="progress-bar progress-bar-warning"
                    role="progressbar"
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "10%" }}
                  >
                    {" "}
                    <span className="progress-text">0%</span>{" "}
                  </div>
                </div>
              </td>
              <td>
                <a
                  href="javascript:void(0);"
                  className="btn btn-warning btn-sm"
                >
                  Draft
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="list-name">Wakefield Project</span>
              </td>
              <td>500</td>
              <td>June 18,2021</td>
              <td>June 18,2024</td>
              <td>£4000</td>
              <td>£1000</td>
              <td>
                <div className="progress progress-xs">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "80%" }}
                  >
                    {" "}
                    <span className="progress-text">80%</span>{" "}
                  </div>
                </div>
              </td>
              <td>
                <a
                  href="javascript:void(0);"
                  className="btn btn-success btn-sm"
                >
                  Active
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="list-name">Wakefield Project</span>
              </td>
              <td>500</td>
              <td>June 18,2021</td>
              <td>June 18,2024</td>
              <td>£4000</td>
              <td>£1000</td>
              <td>
                <div className="progress progress-xs">
                  <div
                    className="progress-bar progress-bar-warning"
                    role="progressbar"
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "10%" }}
                  >
                    {" "}
                    <span className="progress-text">0%</span>{" "}
                  </div>
                </div>
              </td>
              <td>
                <a
                  href="javascript:void(0);"
                  className="btn btn-warning btn-sm"
                >
                  Draft
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="list-name">Wakefield Project</span>
              </td>
              <td>500</td>
              <td>June 18,2021</td>
              <td>June 18,2024</td>
              <td>£4000</td>
              <td>£1000</td>
              <td>
                <div className="progress progress-xs">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="20"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "20%" }}
                  >
                    {" "}
                    <span className="progress-text">20%</span>{" "}
                  </div>
                </div>
              </td>
              <td>
                <a
                  href="javascript:void(0);"
                  className="btn btn-success btn-sm"
                >
                  Active
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
