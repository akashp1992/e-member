import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { forgotPassword } from "../redux/action/user.action";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(forgotPassword(email));
    console.log(dispatch(forgotPassword(email)));
    // debugger;
    // console.log(dispatch({ type: "FORGOT_PASSWORD_SUCCESS", payload: email }));
  };

  return (
    <>
      <Navbar />

      <div className="d-lg-flex half">
        <div
          className="bg order-1 order-md-2"
          style={{ backgroundImage: `url("assets/images/login-bg.jpg")` }}
        ></div>
        <div className="contents order-2 order-md-1">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-9 LogInFrom">
                <h3>Forgot Password?</h3>
                <p className="mb-4">
                  Please enter your email and we send you a password reset link.
                </p>
                <form className="FormLogin" onSubmit={handleSubmit}>
                  <div className="floating-label">
                    <input
                      type="email"
                      placeholder="Email"
                      autoComplete="off"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="email">Email:</label>
                  </div>

                  <div className="LogButtons text-center">
                    <button
                      type="submit"
                      className="btn login mr-3"
                      style={{ width: "max-content", marginTop: "40px" }}
                    >
                      Send Activation Link
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPassword;
