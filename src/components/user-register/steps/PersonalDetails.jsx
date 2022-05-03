import { useState } from "react";
import { useDispatch } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { personaldetails } from "../../../redux/action/user.action";

export default function PersonalDetails() {
  const group = useMatch("/register/group");
  const groupPersonal = useMatch("/register/group/personal");
  const business = useMatch("/register/business");
  const businessPersonal = useMatch("/register/business/personal");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [repasswordError, setRepasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /\S+@\S+\.\S+/;
    let isError = false;
    if (!email) {
      isError = true;
      setEmailError("Email is required");
    } else if (!emailRegex.test(email)) {
      isError = true;
      setEmailError("Please Enter Valid Email");
    } else {
      setEmailError("");
    }

    if (!firstname) {
      isError = true;
      setFirstnameError("Firstname is required");
    } else {
      setFirstnameError("");
    }

    if (!lastname) {
      isError = true;
      setLastnameError("Lastname is required");
    } else {
      setLastnameError("");
    }

    if (!password) {
      isError = true;
      setPasswordError("password is required");
    } else {
      setPasswordError("");
    }

    if (!repassword) {
      isError = true;
      setRepasswordError("repassword is required");
    } else if (password !== repassword) {
      isError = true;
      setRepasswordError("Password does not match");
    } else {
      setRepasswordError("");
    }

    if (isError) {
      return;
    }

    const obj = {
      email: email,
      firstname: firstname,
      lastname: lastname,
      password: password,
      repassword: repassword,
    };

    // localStorage.setItem("personalDetails", JSON.stringify(obj));

    dispatch(personaldetails(obj));

    if (group || groupPersonal) {
      navigate("/register/group/address");
    } else if (business || businessPersonal) {
      navigate("/register/business/address");
    } else {
      navigate("/register/individual/address");
    }
  };

  return (
    <div
      className="tab-pane fade show active"
      id="Personalindividualp"
      role="tabpanel"
      aria-labelledby="Personalindividualp-tab"
    >
      <form className="px-5">
        <div className="row mb-3">
          <div className="col-lg-12 col-sm-12">
            <div className="FormArea w-100">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div style={{ color: "red" }}>{emailError}</div>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-6 col-sm-12">
            <div className="FormArea w-100">
              <label htmlFor="first_name">First Name</label>
              <input
                className="form-control"
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
              <div style={{ color: "red" }}>{firstnameError}</div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="FormArea w-100">
              <label htmlFor="last_name">Last Name</label>
              <input
                className="form-control"
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
              <div style={{ color: "red" }}>{lastnameError}</div>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-6 col-sm-12">
            <div className="FormArea w-100">
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div style={{ color: "red" }}>{passwordError}</div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="FormArea w-100">
              <label htmlFor="Repassword">Re-Type Password</label>
              <input
                className="form-control"
                type="password"
                value={repassword}
                onChange={(e) => setRepassword(e.target.value)}
              />
              <div style={{ color: "red" }}>{repasswordError}</div>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12">
            <button
              className="btn btn-Activate"
              type="button"
              onClick={handleSubmit}
            >
              Proceed to Next Step{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
