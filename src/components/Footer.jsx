import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../assets/css/style.css";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <a href="index.html" className="logo me-auto">
                <img src={logo} alt="" className="img-fluid" />
              </a>
              <p>
                <strong>Address: </strong> 71-75 Shelton Street, Covent Garden,
                London, United Kingdom, WC2H 9JQ <br />
                <br />
                <strong>Email: </strong> info@emembrs.com
                <br />
              </p>
              <div className="social-links mt-3">
                <a href="#" className="twitter">
                  <i className="bx bxl-twitter"></i>
                </a>
                <a href="#" className="facebook">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="#" className="linkedin">
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Join Now</h4>
              <ul>
                <li>
                  <a href="register.html">Individual Membership</a>
                </li>
                <li>
                  <a href="register.html">Business Membership</a>
                </li>
                <li>
                  <a href="register.html">Group Membership</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="about.html">About Us</a>
                </li>
                <li>
                  <a href="how-we-work.html">How it Work</a>
                </li>
                <li>
                  <a href="pricing.html">Pricing</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Live Projects</h4>
              <ul>
                <li>
                  <a href="#"> Individual Projects</a>
                </li>
                <li>
                  <a href="#">Group Projects</a>
                </li>
                <li>
                  <a href="#">Business Projects</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <ul>
                <li>
                  <a href="#">Membership Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Cookie Policy</a>
                </li>
                <li>
                  <a href="#">©2022 Emembrs.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
