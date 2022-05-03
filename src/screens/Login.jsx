import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/action/user.action";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
import "../assets/css/style.css";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function LoginScreen() {
  const loginreducer = useSelector((state) => state.loginReducer);
  const { loading, error } = loginreducer;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = (e) => {
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

    if (!password) {
      isError = true;
      setPasswordError("password is required");
    } else {
      setPasswordError("");
    }

    if (isError) {
      return;
    }

    const data = new FormData();
    data.append("username", email);
    data.append("password", password);

    var config = {
      method: 'post',
      url: BASE_URL + "login",
      data : data
    };

    axios(config)
      .then(function (response) {
        console.log(response)
        if (response.status === 200) {
          localStorage.setItem("currentUser", JSON.stringify(response.data));
          navigate("/dashboard");
        }
        else {
          toast.error("Invalid Crendentials", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
          navigate("/login");
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

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
                <h3>Welcome back</h3>
                <p className="mb-4">
                  Please activate your account by filling these form:
                </p>
                {error && <Error error="Invalid Credentials" />}
                {loading && <Loader />}

                <form className="FormLogin" onSubmit={login}>
                  <div className="floating-label">
                    <input
                      type="text"
                      autoComplete="off"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <div style={{ color: "red" }}>{emailError}</div>

                    <label htmlFor="email">Email:</label>
                  </div>
                  <div className="floating-label">
                    <input
                      type="password"
                      placeholder="Password"
                      autoComplete="off"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <div style={{ color: "red" }}>{passwordError}</div>
                    <label htmlFor="password">Password:</label>
                  </div>
                  <div className="d-flex mt-4 mb-5 align-items-center">
                    <label className="control control--checkbox mb-0">
                      <span className="caption">
                        <span class="caption">
                          I have read and agree to the{" "}
                          <a
                            class="semi"
                            href="https://investorsincommunity.org/terms/"
                          >
                            Terms of Service
                          </a>
                        </span>
                      </span>
                      <input type="checkbox" />
                      <div className="control__indicator"></div>
                    </label>
                    <span className="ml-auto">
                      <Link to="/forgot-password" className="forgot-pass">
                        Forgot Password?
                      </Link>
                    </span>
                  </div>
                  <div className="LogButtons text-center">
                    <button type="submit" className="btn login mr-3">
                      Log In
                    </button>
                    <Link className="btn Register" to="/register">
                      Register
                    </Link>
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
}
