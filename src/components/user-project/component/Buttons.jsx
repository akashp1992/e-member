import React, { useEffect, useState } from "react";
import "../css/main.css";
import { useDispatch } from "react-redux";
import { CreateNewProject } from "../../../redux/action/user.action";
import validation from './CustomHook/Validations'
const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_TOKEN = process.env.REACT_APP_BASE_TOKEN;


const Buttons = () => {
  const [Inputs, setInputs] = useState({
    ProjectName: "",
    Location: "",
    ProjectDate: "",
    ProjectEndDate: "",
    JoinAs: "",
    ChoseType: "",
    Detail: "",
    TargetAmount: "",
    ProjectId: "",
    ProjectPin: "",
    AddImages: "",
    AddDocument: "",
  });

  const [errors, setErrors] = useState({});

  // const navigate = useNavigate();

  // // const [isError, setError] = useState(false)
  // const [ProjectError, setProjectError] = useState("")
  // const [LocationError, setLocationError] = useState("")
  // const [DateError, setDateError] = useState("")
  // const [EndDateError, setEndDateError] = useState("")
  // const [JoinError, setJoinError] = useState("")
  // const [ChooseError, setChooseError] = useState("")
  // const [IdError, setIdError] = useState("")
  // const [PinError, setPinError] = useState("")
  // const [ImageError, setImageError] = useState("")
  // const [DocumentError, setDocumentError] = useState("")
  // const [TargetError, setTargetError] = useState("")
  // const [DescError, setDescError] = useState("")

  const HandleInputs = (e) => {
    var { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
    setErrors(validation(Inputs));
    setDataIsCorrect(true);
  };


  const [dataIsCorrect, setDataIsCorrect] = useState(false);


  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      setDataIsCorrect(false)
    }
  }, [errors])
  const token = localStorage.getItem("currentUser");
  const { token_type, email, access_token } = JSON.parse(token);

  const CreateProject = (e) => {
    e.preventDefault();

    var data = JSON.stringify({
      project_name: Inputs.ProjectName,
      location: Inputs.Location,
      project_date: Inputs.ProjectDate,
      project_end_date: Inputs.ProjectEndDate,
      join_as: Inputs.JoinAs,
      chose_type: Inputs.ChoseType,
      create_project_id: Inputs.ProjectId,
      create_project_pin: Inputs.ProjectPin,
      image: Inputs.AddImages,
      add_docum: Inputs.AddDocument,
      target_amount: Inputs.TargetAmount,
      detail: Inputs.Detail,
      role: 0,
      status: 0,
    });


    var requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: [token_type, access_token].join(" "),
        "Content-Type": "application/json",
      },
      body: data,
      redirect: "follow",
    };
    console.log(data);

    fetch(BASE_URL + "product", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <div className="col-lg-12">
        <div className="card">
          <div className="body">
            <div className="Project-action clearfix">
              <div className="pull-left Project-dropdown">
                <button
                  className="btn  btn-sm dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  All Projects
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="javascript:void(0);">
                    <label className="fancy-radio">
                      <input type="radio" name="project" value="All" /> <i></i>{" "}
                      All
                    </label>
                  </a>
                  <a className="dropdown-item" href="javascript:void(0);">
                    <label className="fancy-radio">
                      {" "}
                      <input type="radio" name="project" value="Active" />{" "}
                      <i></i> Active
                    </label>
                  </a>
                  <a className="dropdown-item" href="javascript:void(0);">
                    <label className="fancy-radio">
                      {" "}
                      <input
                        type="radio"
                        name="project"
                        value="Completed"
                      />{" "}
                      <i></i> Completed
                    </label>
                  </a>
                  <a className="dropdown-item" href="javascript:void(0);">
                    <label className="fancy-radio">
                      {" "}
                      <input type="radio" name="project" value="Closed" />{" "}
                      <i></i> Closed
                    </label>
                  </a>
                  <a className="dropdown-item" href="javascript:void(0);">
                    <label className="fancy-radio">
                      {" "}
                      <input type="radio" name="project" svalue="Drafts" />{" "}
                      <i></i> Drafts
                    </label>
                  </a>
                </div>
              </div>
              <div className="pull-right ml-auto">
                <div className="btn-group ProjectRight-btns">
                  <button
                    type="button"
                    className="btn pbtn Makebtn"
                    data-toggle="modal"
                    data-target="#addcontact"
                  >
                    <i className="icon-plus"></i> Make a Payment
                  </button>
                  <button
                    type="button"
                    className="btn pbtn Createbtn"
                    data-toggle="modal"
                    data-target="#Createnew-project"
                  >
                    <i className="icon-plus"></i> Create New Project
                  </button>
                  <button
                    type="button"
                    className="btn pbtn Joinbtn"
                    data-toggle="modal"
                    data-target="#PrivateProject-Modal"
                  >
                    <i className="icon-plus"></i> Join Private Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add New Task */}
      <div
        className="modal fade ProjectModal"
        id="Createnew-project"
        tabIndex="-1"
        role="dialog"
      >
        <div
          className="modal-dialog modal-sm  modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title"> Create New Project</h4>
              <button type="button" className="close" data-dismiss="modal">
                <img src="assets/images/close-circle.png" alt="Log-icon" />
              </button>
            </div>
            <div className="modal-body">
              <div className="row clearfix">
                <div className="col-12">
                  <div className="Project-Create">
                    <label className="fancy-radio">
                      <input type="radio" name="project" value="All" /> <i></i>{" "}
                      Create Individual Project
                    </label>
                    <label className="fancy-radio">
                      <input type="radio" name="project" value="All" /> <i></i>{" "}
                      Create Group Project
                    </label>
                    <label className="fancy-radio">
                      <input type="radio" name="project" value="Active" />{" "}
                      <i></i> Create Business Group
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <a
                href="#GeneralDetails-Modal"
                className=" btn btn-primary"
                data-toggle="modal"
                data-dismiss="modal"
              >
                Next {""}
              </a>

            </div>
          </div>
        </div>
      </div>
      {/*Private Project modal */}
      <div
        className="modal fade ProjectModal"
        id="PrivateProject-Modal"
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog  modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="defaultModalLabel">
                Private Project Details{" "}
              </h4>
              <button type="button" className="close" data-dismiss="modal">
                <img src="assets/images/close-circle.png" alt="Log-icon" />
              </button>
            </div>
            <div className="modal-body">
              <div className="row clearfix">
                <div className="col-12">
                  <div className="form-group">
                    <label>Project ID:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Task no."
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label>Project ID:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Job title"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label>Joining Role:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="User"
                    />
                  </div>
                  <a className="project-privacy" href="#">
                    Learn more about project privacy
                  </a>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <a
                href="#Congratulations-Modal"
                className=" btn btn-primary"
                data-toggle="modal"
                data-dismiss="modal"
              >
                Join Project{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* General Details-Modal */}
      <div
        className="modal fade ProjectModal"
        id="GeneralDetails-Modal"
        tabIndex="-1"
        role="dialog"
      >
        <div
          className="modal-dialog modal-md modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="defaultModalLabel">
                General Details
              </h4>
              <button type="button" className="close" data-dismiss="modal">
                <img src="assets/images/close-circle.png" alt="Log-icon" />
              </button>
            </div>
            <div className="modal-body">
              <div className="row clearfix">
                <div className="col-6">
                  <div className="form-group">
                    <label>Project Name:</label>
                    <input
                      required
                      type="text"
                      name="ProjectName"
                      className="form-control"
                      placeholder="Wakefield Project"
                      value={Inputs.ProjectName}
                      onChange={HandleInputs}
                    />
                    {errors.ProjectName && <div style={{ color: 'red' }}>{errors.ProjectName}</div>}
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label>Location:</label>
                    <input
                      type="text"
                      name="Location"
                      className="form-control"
                      placeholder="United Kingdom"
                      value={Inputs.Location}
                      onChange={HandleInputs}
                    />
                    {errors.Location && <span style={{ color: 'red' }}>{errors.Location}</span>}
                  </div>
                </div>
                <div className="col-12 m-b-10">
                  <label>Project Dates:</label>
                  <div
                    className="input-daterange input-group"
                    data-provide="datepicker"
                  >
                    <input
                      type="date"
                      className="form-control"
                      //  name="start"
                      name="ProjectDate"
                      placeholder="Start Date"
                      value={Inputs.ProjectDate}
                      onChange={HandleInputs}
                    /><br/>
                    
                    <span className="input-group-addon"> </span>
                   
                    <input
                      type="date"
                      className="form-control"
                      //  name="end"
                      name="ProjectEndDate"
                      placeholder="End Date/ Reocurrance"
                      value={Inputs.ProjectEndDate}
                      onChange={HandleInputs}
                    />
                    <br/>
                    {errors.ProjectDate && <span style={{ color: 'red' }}>{errors.ProjectDate}</span>}
                  </div>
                  {errors.ProjectEndDate && <span style={{ color: 'red' }}>{errors.ProjectEndDate}</span>}
                </div>
                <div className="col-6">
                  <label>Join As:</label>
                  <input
                    type="text"
                    name="JoinAs"
                    className="form-control"
                    placeholder="Admin"
                    value={Inputs.JoinAs}
                    onChange={HandleInputs}
                  />
                   {errors.JoinAs && <span style={{ color: 'red' }}>{errors.JoinAs}</span>}
                </div>
                <div className="col-6">
                  <label>Choose Type of Giving:</label>
                  <select
                    className="form-control show-tick m-b-10"
                    name="ChoseType"
                    value={Inputs.ChoseType}
                    onChange={HandleInputs}
                  >
                    <option value="Select Team">Select Team</option>
                    <option value="John Smith">John Smith</option>
                    <option value="Hossein Shams">Hossein Shams</option>
                    <option value="Maryam Amiri">Maryam Amiri</option>
                    <option value="Tim Hank">Tim Hank</option>
                    <option value="Gary Camara">Gary Camara</option>
                  </select>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label>Target Amount :</label>
                    <input
                      type="text"
                      name="TargetAmount"
                      className="form-control"
                      placeholder="Target Amount"
                      value={Inputs.TargetAmount}
                      onChange={HandleInputs}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              {
                !dataIsCorrect ? <button
                  data-target="#GeneralDetailsoptional-Modal"
                  className=" btn btn-primary"
                  data-toggle="modal"
                  data-dismiss="modal"
                >Next</button>
                  : <button
                    data-target="#GeneralDetailsoptional-Modal"
                    className=" btn btn-primary"
                    data-toggle="modal"
                    data-dismiss="modal"
                    disabled
                  >Next</button>
              }

            </div>
          </div>
        </div>
      </div>
      {/* General Details optional-Modal */}
      <div
        className="modal fade ProjectModal"
        id="GeneralDetailsoptional-Modal"
        tabIndex="-1"
        role="dialog"
      >
        <div
          className="modal-dialog modal-lg  modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="defaultModalLabel">
                General Details
              </h4>
              <button type="button" className="close" data-dismiss="modal">
                <img src="assets/images/close-circle.png" alt="Log-icon" />
              </button>
            </div>
            <div className="modal-body">
              <div className="row clearfix">
                <div className="col-6">
                  <div className="form-group">
                    <label>
                      Create Project ID: <small>optional</small>
                    </label>
                    <input
                      type="text"
                      name="ProjectId"
                      className="form-control"
                      placeholder="Wakefield Project"
                      value={Inputs.ProjectId}
                      onChange={HandleInputs}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label>
                      Create Project PIN: <small>optional</small>
                    </label>
                    <input
                      type="text"
                      name="ProjectPin"
                      className="form-control"
                      placeholder="United Kingdom"
                      value={Inputs.ProjectPin}
                      onChange={HandleInputs}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <label>
                    Add Images: <small>optional</small>
                  </label>
                  <div className="input-group mb-3">
                    <div className="custom-file">
                      <input
                        type="file"
                        name="AddImages"
                        className="custom-file-input"
                        id="inputGroupFile01"
                        value={Inputs.AddImages}
                        onChange={HandleInputs}
                      />

                      <label
                        className="custom-file-label"
                        htmlFor="inputGroupFile01"
                      >
                        JPEG, PNG / 10MB file limit
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <label>
                    Add Documentation: <small>optional</small>
                  </label>
                  <div className="input-group mb-3">
                    <div className="custom-file">
                      <input
                        type="file"
                        name="AddDocument"
                        className="custom-file-input"
                        id="inputGroupFile01"
                        value={Inputs.AddDocument}
                        onChange={HandleInputs}
                      />

                      <label
                        className="custom-file-label"
                        htmlFor="inputGroupFile01"
                      >
                        Upload
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-12 form-group">
                  <label>Add Description:</label>
                  <textarea
                    className="form-control"
                    name="Detail"
                    rows="5"
                    cols="30"
                    required
                    placeholder="Add project description here"
                    value={Inputs.Detail}
                    onChange={HandleInputs}
                  ></textarea>
                </div>
                <div className="col-12">
                  <div className="Project-Create">
                    <label className="fancy-radio">
                      <input type="radio" name="project" value="All" /> <i></i>{" "}
                      Visible
                    </label>
                    <p>
                      {" "}
                      Go to create new project and create new membership.Joined
                      or created proejcts by you will appear here.
                    </p>
                    <label className="fancy-radio">
                      {" "}
                      <input type="radio" name="project" value="Active" />{" "}
                      <i></i> Hide
                    </label>
                    <p>
                      This project will not be visible on the explore projects
                      page. Members can join this project with the Project ID
                      number and Project Access Code.
                    </p>
                  </div>
                  <a className="project-privacy" href="#">
                    Learn more about project privacy
                  </a>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <a
                href="#Saveasdraft-Modal"
                className="btn btn-primary"
                data-toggle="modal"
                data-dismiss="modal"
                onClick={CreateProject}
              >
                Save as draft{" "}
              </a>
              <a
                href="#Congratulations-Modal"
                className="btn btn-wthbg"
                data-toggle="modal"
                data-dismiss="modal"
                onClick={CreateProject}
              >
                Make Project live
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Congratulations-Modal */}
      <div
        className="modal fade ProjectModal"
        id="Congratulations-Modal"
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog  modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="defaultModalLabel">
                General Details{" "}
              </h4>
              <button type="button" className="close" data-dismiss="modal">
                <img src="assets/images/close-circle.png" alt="Log-icon" />
              </button>
            </div>
            <div className="modal-body">
              <h2>Congratulations!</h2>
              <p>Your project is now live.</p>
              <br />
              <p>
                You can now invite members to join this project by providing
                them with the details below:
              </p>
              <p>
                Project Name: <span>Project</span>
              </p>
              <p>
                Project ID: <span>13642</span>
              </p>
              <p>
                Project PIN: <span>GBeXxhnDpAHx</span>
              </p>
            </div>
            <div className="modal-footer">
              <a href="index.html" className="btn btn-primary">
                Go to dashboard{" "}
              </a>
              <a href="individualMember-invite.html" className=" btn btn-wthbg">
                Send join invites{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Saveasdraft-Modal */}
      <div
        className="modal fade ProjectModal"
        id="Saveasdraft-Modal"
        tabIndex="-1"
        role="dialog"
      >
        <div
          className="modal-dialog  modal-md modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-body">
              <img
                src="assets/images/individualdraft-saved.png"
                alt="individualdraft-saved"
                className="img-responsive"
              />
              <h5>
                Your project has been
                <br /> saved as a draft.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buttons;
