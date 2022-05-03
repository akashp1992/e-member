import React from "react";
import "../css/main.css";

export default function ExpensesDetails() {
  return (
    <div className="card">
      <div className="header">
        <h2>All Expenses Details</h2>
        <div className="header-SeeMore">
          <a href="javascript:void(0);"> See More</a>
        </div>
      </div>
      <div className="table-responsive oddTable">
        <table className="table m-b-0">
          <thead className="thead-dark">
            <tr>
              <th>Project Name</th>
              <th>Member Type</th>
              <th>Group Joined On</th>
              <th>Group Ending On</th>
              <th>Amount Paid</th>
              <th>Amount Pending</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className="list-name">Wakefield Project</span>
              </td>
              <td>Business Project</td>
              <td>June 18,2021</td>
              <td>June 18,2024</td>
              <td>£4000</td>
              <td>£4000</td>
              <td>
                <a href="javascript:void(0);" className="btn btn-Pay btn-sm">
                  Pay
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="list-name">Wakefield Project</span>
              </td>
              <td>Business Project</td>
              <td>June 18,2021</td>
              <td>June 18,2024</td>
              <td>£4000</td>
              <td>£4000</td>
              <td>
                <a
                  href="javascript:void(0);"
                  className="btn btn-Completed btn-sm"
                >
                  Completed
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="list-name">Wakefield Project</span>
              </td>
              <td>Individual Project</td>
              <td>June 18,2021</td>
              <td>June 18,2024</td>
              <td>£4000</td>
              <td>£4000</td>
              <td>
                <a href="javascript:void(0);" className="btn btn-due btn-sm">
                  Over due
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="list-name">Wakefield Project</span>
              </td>
              <td>Individual Project</td>
              <td>June 18,2021</td>
              <td>June 18,2024</td>
              <td>£4000</td>
              <td>£4000</td>
              <td>
                <a href="javascript:void(0);" className="btn btn-Pay btn-sm">
                  Pay
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="list-name">Wakefield Project</span>
              </td>
              <td>Individual Project</td>
              <td>June 18,2021</td>
              <td>June 18,2024</td>
              <td>£4000</td>
              <td>£4000</td>
              <td>
                <a href="javascript:void(0);" className="btn btn-Pay btn-sm">
                  Pay
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="list-name">Wakefield Project</span>
              </td>
              <td>Individual Project</td>
              <td>June 18,2021</td>
              <td>June 18,2024</td>
              <td>£4000</td>
              <td>£4000</td>
              <td>
                <a href="javascript:void(0);" className="btn btn-Pay btn-sm">
                  Pay
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="list-name">Wakefield Project</span>
              </td>
              <td>Group Project</td>
              <td>June 18,2021</td>
              <td>June 18,2024</td>
              <td>£4000</td>
              <td>£4000</td>
              <td>
                <a
                  href="javascript:void(0);"
                  className="btn btn-Completed btn-sm"
                >
                  Completed
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
