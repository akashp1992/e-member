import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../redux/action/user.action";
import user from "../assets/images/user-sign.png";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const dispatch = useDispatch();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <header id="header" class="fixed-top header-inner-pages">
      <div
        className="container-fluid d-flex align-items-center shadow-none mb-0 "
        style={{ justifyContent: "space-between" }}
      >
        <Link to="/" className="logo me-auto">
          <img src={logo} alt="" className="img-fluid" />
        </Link>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link className="nav-link scrollto" to="/about-us">
                About Us
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="/how-it-works">
                How It Work
              </Link>
            </li>
            <li className="dropdown">
              <Link className="dropdown-item" to="/how-it-works">
                <span>LIVE PROJECTS </span>{" "}
                <i className="bi bi-chevron-down"></i>
              </Link>
              <ul>
                <li>
                  <Link to="/how-it-works">Indivdual Project</Link>
                </li>
                <li>
                  <Link to="/how-it-works">Group Project</Link>
                </li>
                <li>
                  <Link to="/how-it-works">Business Project</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="nav-link scrollto" to="/contact-us">
                Pricing
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="/contact-us">
                Contact Us
              </Link>
            </li>
            {currentUser ? (
              <>
                <li>
                  <Link className=" scrollto" to="/profile">
                    {currentUser.name}
                  </Link>
                </li>

                <li
                  className="dropdown-item"
                  onClick={() => {
                    dispatch(logoutUser());
                  }}
                >
                  Logout <i className="fas fa-sign-out-alt"></i>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    className="getstarted scrollto"
                    to="/register/individual"
                  >
                    <img src={user} alt="" className="img-fluid" />
                    Register
                  </Link>
                </li>

                <li>
                  <Link className="getstarted scrollto nav-link" to="/login">
                    <img src={user} alt="" className="img-fluid" /> Log In
                  </Link>
                </li>
              </>
            )}
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}
