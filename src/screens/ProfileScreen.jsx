import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/action/user.action";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Success";

export default function Profilescreen() {
  const loginstate = useSelector((state) => state.loginReducer);
  const updateuserstate = useSelector((state) => state.updateReducer);
  const currentUser = loginstate.currentUser;
 
  //const { loading, success, error } = updateuserstate;
  const dispatch = useDispatch();
  const [name, setname] = useState(currentUser.name);
  const [email, setemail] = useState(currentUser.email);
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  function update(e) {
    e.preventDefault();
    if (password === cpassword) {
      const updateduser = {
        name: name,
        email: email,
        password: password,
      };
      dispatch(updateUser(currentUser.id, updateduser));
    } else {
      alert("Passwords Not matched");
    }
  }


  return (
    <div className="d-lg-flex half">
    <div className="bg order-1 order-md-2"  style={{ backgroundImage: `url("assets/images/login-bg.jpg")`}} ></div>
    <div className="contents order-2 order-md-1">
       <div className="container">
          <div className="row align-items-center justify-content-center">
             <div className="col-lg-9 LogInFrom">
                <h5>{currentUser.name.toUpperCase()} Welcome back</h5>
             
            <form onSubmit={update}>
            <div className="floating-label">
              <input
                type="text"
                placeholder="name"
                className="form-control"
                required
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
                     <label htmlFor="name">Name:</label>
                        </div>
                        <div className="floating-label">
              <input
                type="text"
                placeholder="email"
                className="form-control"
                value={email}
                required
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
   <label htmlFor="email">Email:</label>
                        </div>
              <div className="floating-label">
              <input
                type="password"
                placeholder="password"
                className="form-control"
                value={password}
                required
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
   <label htmlFor="pass">Email:</label>
                        </div>
                        <div className="floating-label">
              <input
                type="password"
                placeholder="confirm password"
                className="form-control"
                value={cpassword}
                required
                onChange={(e) => {
                  setcpassword(e.target.value);
                }}
              />
   <label htmlFor="email">Email:</label>
                        </div>
              <div className="text-right">
                <button type="submit" className="btn mt-3">
                  UPDATE
                </button>
              </div>
            </form>

               
             </div>
          </div>
       </div>
    </div>
 </div>
  );
}
