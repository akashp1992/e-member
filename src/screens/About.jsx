import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Error from "../components/Error";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutScreen() {
  // const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <>
      {/* ======= aboutbanner Section ======= */}
      <Navbar />
      <section id="aboutbanner" className="d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-flex-start">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <h1>About Us</h1>
              <p>Our History, Our Mission, Our Future</p>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* End aboutbanner */}
      <main id="main">
        {/* ======= About Us Section ======= */}
        <section id="why-us" className="why-us ">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div
                className="col-lg-6 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="MembershipContent">
                  <h3>
                    We are on a mission to transform the way professional
                    communities enable and enrich relationships.
                  </h3>
                  <p>
                    Emembr's membership management software fully automates the
                    application process to help give your new members a great
                    first impression. Cut out complicated paperwork by creating
                    a  web-based, mobile-friendly  form  where applicants can
                    provide all the information they  need and  pay online by
                    credit card.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-6 align-items-stretch order-1 order-lg-2 img"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <img
                  src="assets/images/about-right.png"
                  className="img-fluid"
                  alt="Software-icon"
                />
              </div>
            </div>
          </div>
        </section>{" "}
        {/* End About Us Section */}
        {/* ======= Cta Section ======= */}
        <section id="cta" className="cta">
          <div className="container" data-aos="zoom-in">
            <div className="row justify-content-between">
              <div className="col-lg-5 text-center text-lg-start">
                <h3>Start using Emembrs platform today</h3>
                <div className="position-relative w-100 mt-3 mb-3">
                  <input
                    className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                    type="text"
                    placeholder="Enter Your Email"
                  />{" "}
                  {/* style="height: 48px;" */}
                  <button
                    type="button"
                    className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
                  >
                    <i className="bx bxs-send"></i>
                  </button>
                </div>
                {/* <p><i className="ri-checkbox-circle-fill"></i>Your email has been successfully registered, headlines will be sent to you soon.</p> */}
              </div>
              <div className="col-lg-4 cta-btn-container text-center">
                <img
                  src="assets/images/emailshadow-icon.png"
                  className="img-fluid"
                  alt="Emailshadow-icon"
                />
              </div>
            </div>
          </div>
        </section>
        {/* End Cta Section */}
        {/* ======= Features  Section ======= */}
        <section className="Features">
          <div className="container">
            <div className="row justify-content-center g-0">
              <div className="col-lg-4 text-center" data-aos="fade-up">
                <div className="section-title">
                  <h2>Tools</h2>
                  <h6>
                    All the tools you need to manage your nonprofit in one
                    easy-to-use software
                  </h6>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-sm-6 col-md-3 mb-6 mb-3 F-hovering"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <div className="icon-box text-center">
                    <img
                      className="shadow-icon"
                      src="assets/images/f-icon1.png"
                      alt="icon"
                    />
                    <h5>Easy onboarding</h5>
                    <div className="cardHoverText">
                      <p>
                        Each organization has a unique way of handling new
                        members, and you can tailor the onboarding process to
                        fit your needs. Customize the welcome email with your
                        branding and content. Limit the data fields new members
                        need to fill out to get them onboarded quickly or expand
                        upon them to get the info you need.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-md-3 mb-6 mb-3 F-hovering"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="icon-box text-center">
                    <img
                      className="shadow-icon"
                      src="assets/images/f-icon2.png"
                      alt="icon"
                    />
                    <h5>Secure online database</h5>
                    <div className="cardHoverText">
                      <p>
                        Each organization has a unique way of handling new
                        members, and you can tailor the onboarding process to
                        fit your needs. Customize the welcome email with your
                        branding and content. Limit the data fields new members
                        need to fill out to get them onboarded quickly or expand
                        upon them to get the info you need.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-md-3 mb-6 mb-3 F-hovering"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div className="icon-box text-center">
                    <img
                      className="shadow-icon"
                      src="assets/images/f-icon3.png"
                      alt="icon"
                    />
                    <h5>Multi-level structure</h5>
                    <div className="cardHoverText">
                      <p>
                        Each organization has a unique way of handling new
                        members, and you can tailor the onboarding process to
                        fit your needs. Customize the welcome email with your
                        branding and content. Limit the data fields new members
                        need to fill out to get them onboarded quickly or expand
                        upon them to get the info you need.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-md-3 mb-6 mb-3 F-hovering"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <div className="icon-box text-center">
                    <img
                      className="shadow-icon"
                      src="assets/images/f-icon4.png"
                      alt="icon"
                    />
                    <h5>Memberships level</h5>
                    <div className="cardHoverText">
                      <p>
                        Each organization has a unique way of handling new
                        members, and you can tailor the onboarding process to
                        fit your needs. Customize the welcome email with your
                        branding and content. Limit the data fields new members
                        need to fill out to get them onboarded quickly or expand
                        upon them to get the info you need.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-md-3 mb-6 mb-3 F-hovering"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                >
                  <div className="icon-box text-center">
                    <img
                      className="shadow-icon"
                      src="assets/images/f-icon5.png"
                      alt="icon"
                    />
                    <h5>Auto-renewals B recurring payments</h5>
                    <div className="cardHoverText">
                      <p>
                        Each organization has a unique way of handling new
                        members, and you can tailor the onboarding process to
                        fit your needs. Customize the welcome email with your
                        branding and content. Limit the data fields new members
                        need to fill out to get them onboarded quickly or expand
                        upon them to get the info you need.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-md-3 mb-6 mb-3 F-hovering"
                  data-aos="zoom-in"
                  data-aos-delay="600"
                >
                  <div className="icon-box text-center">
                    <img
                      className="shadow-icon"
                      src="assets/images/f-icon6.png"
                      alt="icon"
                    />
                    <h5>Member dashboard</h5>
                    <div className="cardHoverText">
                      <p>
                        Each organization has a unique way of handling new
                        members, and you can tailor the onboarding process to
                        fit your needs. Customize the welcome email with your
                        branding and content. Limit the data fields new members
                        need to fill out to get them onboarded quickly or expand
                        upon them to get the info you need.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-md-3 mb-6 mb-3 F-hovering"
                  data-aos="zoom-in"
                  data-aos-delay="700"
                >
                  <div className="icon-box text-center">
                    <img
                      className="shadow-icon"
                      src="assets/images/f-icon7.png"
                      alt="icon"
                    />
                    <h5>Organizational memberships</h5>
                    <div className="cardHoverText">
                      <p>
                        Each organization has a unique way of handling new
                        members, and you can tailor the onboarding process to
                        fit your needs. Customize the welcome email with your
                        branding and content. Limit the data fields new members
                        need to fill out to get them onboarded quickly or expand
                        upon them to get the info you need.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-md-3 mb-6 mb-3 F-hovering"
                  data-aos="zoom-in"
                  data-aos-delay="800"
                >
                  <div className="icon-box text-center">
                    <img
                      className="shadow-icon"
                      src="assets/images/f-icon8.png"
                      alt="icon"
                    />
                    <h5>Admin role management</h5>
                    <div className="cardHoverText">
                      <p>
                        Each organization has a unique way of handling new
                        members, and you can tailor the onboarding process to
                        fit your needs. Customize the welcome email with your
                        branding and content. Limit the data fields new members
                        need to fill out to get them onboarded quickly or expand
                        upon them to get the info you need.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-md-3 mb-6 mb-3 F-hovering"
                  data-aos="zoom-in"
                  data-aos-delay="900"
                >
                  <div className="icon-box text-center">
                    <img
                      className="shadow-icon"
                      src="assets/images/f-icon9.png"
                      alt="icon"
                    />
                    <h5>Member types</h5>
                    <div className="cardHoverText">
                      <p>
                        Each organization has a unique way of handling new
                        members, and you can tailor the onboarding process to
                        fit your needs. Customize the welcome email with your
                        branding and content. Limit the data fields new members
                        need to fill out to get them onboarded quickly or expand
                        upon them to get the info you need.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-md-3 mb-6 mb-3 F-hovering"
                  data-aos="zoom-in"
                  data-aos-delay="1000"
                >
                  <div className="icon-box text-center">
                    <img
                      className="shadow-icon"
                      src="assets/images/f-icon10.png"
                      alt="icon"
                    />
                    <h5>Profile update emails</h5>
                    <div className="cardHoverText">
                      <p>
                        Each organization has a unique way of handling new
                        members, and you can tailor the onboarding process to
                        fit your needs. Customize the welcome email with your
                        branding and content. Limit the data fields new members
                        need to fill out to get them onboarded quickly or expand
                        upon them to get the info you need.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-md-3 mb-6 mb-3 F-hovering"
                  data-aos="zoom-in"
                  data-aos-delay="1100"
                >
                  <div className="icon-box text-center">
                    <img
                      className="shadow-icon"
                      src="assets/images/f-icon11.png"
                      alt="icon"
                    />
                    <h5>Mobile payments</h5>
                    <div className="cardHoverText">
                      <p>
                        Each organization has a unique way of handling new
                        members, and you can tailor the onboarding process to
                        fit your needs. Customize the welcome email with your
                        branding and content. Limit the data fields new members
                        need to fill out to get them onboarded quickly or expand
                        upon them to get the info you need.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-md-3 mb-6 mb-3 F-hovering"
                  data-aos="zoom-in"
                  data-aos-delay="1200"
                >
                  <div className="icon-box text-center">
                    <img
                      className="shadow-icon"
                      src="assets/images/f-icon12.png"
                      alt="icon"
                    />
                    <h5>Multiple payment options</h5>
                    <div className="cardHoverText">
                      <p>
                        Each organization has a unique way of handling new
                        members, and you can tailor the onboarding process to
                        fit your needs. Customize the welcome email with your
                        branding and content. Limit the data fields new members
                        need to fill out to get them onboarded quickly or expand
                        upon them to get the info you need.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* end of .container*/}
        </section>{" "}
        {/* End Features  Section */}
      </main>{" "}
      {/* End #main */}
      <Footer />
    </>
  );
}
