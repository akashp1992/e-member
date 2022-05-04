import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/main.css";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const Lists = () => {
  const [project, setProject] = useState();

  const token = localStorage.getItem("currentUser");
  console.log("token", token);
  const { token_type, email, access_token } = JSON.parse(token);
  console.log("accesstoken", access_token);
  useEffect(() => {
    var config = {
      method: "get",
      url: BASE_URL + "prodcuts",
      headers: {
        Authorization: [token_type, access_token].join(" "),
      },
    };

    // const req = setInterval(() => {
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setProject(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    // }, 5000);
    // return () => clearInterval(req);
  }, [access_token,project, token_type]);
  return (
    <div className="col-lg-12">
      <div className="card">
        {project ? (
          <div class="table-responsive oddTable">
            <table class="table table-hover m-b-0">
              <thead className="thead-dark">
                <tr>
                  <th>Project Name</th>
                  <th>Project ID</th>
                  <th>Total Members</th>
                  <th>Started On</th>
                  <th>Manage Role</th>
                  <th>Amount Target</th>
                  <th>Amount Raised</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {project &&
                  project.map((projects) => {
                    return (
                      <tr>
                        <td>
                          <span className="list-name">
                            {projects.project_name}
                          </span>
                        </td>
                        <td>{projects.id}</td>
                        <td>1500</td>
                        <td>{projects.project_date}</td>
                        <td>
                          <a
                            href="javascript:void(0);"
                            className="btn btn-info btn-sm"
                          >
                            {projects.join_as}
                          </a>
                        </td>
                        <td>{projects.target_amount}</td>
                        <td>£1000</td>
                        <td>
                          {projects.status == 0 ? (
                            <a
                              href="individualMember-projectdetails.html"
                              className="btn btn-success btn-sm"
                            >
                              Active
                            </a>
                          ) : (
                            <a
                              href="individualMember-draftdetails.html"
                              className="btn btn-warning btn-sm"
                            >
                              Draft
                            </a>
                          )}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="table-responsive oddTable">
            <table className="table table-hover m-b-0">
              <tbody>
                <tr className="mat-row">
                  <td className="Didnt-Project" colspan="9999">
                    <img
                      src="assets/images/groupproject-icon.png"
                      alt="groupproject-icon"
                      className="img-responsive"
                    />
                    <h3>You Didn't Created To Any Project Yet!</h3>
                    <p>
                      Go to create new project and create new membership.
                      <br />
                      Joined or created proejcts by you will appear here.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lists;
