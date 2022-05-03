import React from "react";
import "../css/main.css";

export default function LatestProject() {
  return (
    <div className="card">
      <div className="header">
        <h2>Latest Projects</h2>
        <div className="header-SeeMore">
          <a href="javascript:void(0);"> See More</a>
        </div>
      </div>
      <div className="table-responsive oddTable">
        <table className="table m-b-0">
          <thead className="thead-dark">
            <tr>
              <th>Project Name</th>
              <th>Group ID</th>
              <th>Member Type</th>
              <th>Project Started On</th>
              <th>Target Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className="list-name">Wakefield</span>
              </td>
              <td>1234</td>
              <td>Individual Project</td>
              <td>June 18,2021</td>
              <td>£4000</td>
              <td>
                <a href="javascript:void(0);" className="btn btn-join btn-sm">
                  Join
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="list-name">Wakefield</span>
              </td>
              <td>1234</td>
              <td>Individual Project</td>
              <td>June 18,2021</td>
              <td>£4000</td>
              <td>
                <a href="javascript:void(0);" className="btn btn-join btn-sm">
                  Join
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="list-name">Wakefield</span>
              </td>
              <td>1234</td>
              <td>Individual Project</td>
              <td>June 18,2021</td>
              <td>£4000</td>
              <td>
                <a href="javascript:void(0);" className="btn btn-join btn-sm">
                  Join
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="list-name">Wakefield</span>
              </td>
              <td>1234</td>
              <td>Individual Project</td>
              <td>June 18,2021</td>
              <td>£4000</td>
              <td>
                <a href="javascript:void(0);" className="btn btn-join btn-sm">
                  Join
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="list-name">Wakefield</span>
              </td>
              <td>1234</td>
              <td>Individual Project</td>
              <td>June 18,2021</td>
              <td>£4000</td>
              <td>
                <a href="javascript:void(0);" className="btn btn-join btn-sm">
                  Join
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="list-name">Wakefield</span>
              </td>
              <td>1234</td>
              <td>Individual Project</td>
              <td>June 18,2021</td>
              <td>£4000</td>
              <td>
                <a href="javascript:void(0);" className="btn btn-join btn-sm">
                  Join
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
