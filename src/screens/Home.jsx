import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Error from "../components/Error";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/css/style.css";

export default function HomeScreen() {
  return (
    <>
      <Navbar />
      <section id="Homebanner" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h1>Effortless members management</h1>
              <p>
                UK-based membership software for automation, engagement, and
                growth.
              </p>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <Link to="/contact-us" className="btn-get-started scrollto">
                  Contact Us
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 Homebanner-img"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img
                src="assets/images/hero-img.png"
                className="img-fluid animated"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        {/* ======= Why Us Section ======= */}
        <section id="why-us" className="why-us ">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h6>
                Easily Track Membership
                <br />
                With Emembr's Management Software
              </h6>
            </div>
            <div className="row">
              <div className="col-lg-5 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                <div className="MembershipContent">
                  <h5>Have A Record For Years To Come:</h5>
                  <p>
                    Maintain a detailed record of your organization’s member
                    data and histories, such as online transactions, e-commerce
                    receipts, and membership duration.
                  </p>
                </div>
                <div className="MembershipContent">
                  <h5>
                    Manually Enter Memberships Or Set Up Online Registration:
                  </h5>
                  <p>
                    Simplify The Membership Process With Online Registration
                    While Maintaining The Option Of Manual Entries. With Either
                    System, You Can Follow The Evolution Of Your Memberships On
                    A Daily Basis.
                  </p>
                </div>
                <div className="MembershipContent">
                  <h5>Use Statistics To Grow Your Organization:</h5>
                  <p>Use Statistics To Grow Your Organization:</p>
                </div>
              </div>

              <div
                className="col-lg-7 align-items-stretch order-1 order-lg-2 img"
                data-aos="zoom-in"
                data-aos-delay="150"
              >
                <img
                  src="assets/images/software.png"
                  className="img-fluid"
                  alt="Software-icon"
                />
              </div>
            </div>
          </div>
        </section>
        {/* End Why Us Section */}

        <section id="Membership" className="Membership-Type-section section-bg">
          <div className="container" data-aos="zoom-in">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="section-title">
                  <h1>Choose Your Membership Type </h1>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="Membership-Type">
                  <div className="h-100">
                    <div className="icon">
                      <img
                        src="assets/images/individual-icon.png"
                        alt="individual-icon"
                      />
                    </div>
                    <h4>Individual Membership</h4>
                    <p>
                      A personal account, that allows people to manage all your
                      listed giving, from fundraising, contribution, offering,
                      etc
                    </p>
                  </div>
                  <div className="border-button">
                    <a href="./register.html">Register Now</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="Membership-Type ">
                  <div className="h-100">
                    <div className="icon">
                      <img
                        src="assets/images/business-icon.png"
                        alt="business-icon"
                      />
                    </div>
                    <h4>Business Membership</h4>
                    <p>
                      Manage, engage, and grow your membership with a powerful,
                      cloud-based association management system (AMS), packed
                      with dynamic solutions and unique workflows.
                    </p>
                  </div>
                  <div className="border-button">
                    <a href="./register.html">Register Now</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="Membership-Type">
                  <div className="h-100">
                    <div className="icon">
                      <img
                        src="assets/images/group-icon.png"
                        alt="group-icon"
                      />
                    </div>
                    <h4>Group Membership</h4>
                    <p>
                      The platform provides dynamic solutions for each level of
                      your organization, from enterprise-level functionality for
                      executive office staff to self-service tools for members.
                    </p>
                  </div>
                  <div className="border-button">
                    <a href="./register.html">Register Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ======= About Us Section ======= */}
        <section id="Flexible" className="Flexible">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>
                Flexible memberships. <span>Flexible</span>
              </h2>
              <h6>
                Different membership types to <br />
                fit your organization
              </h6>
            </div>

            <div className="row content">
              <div
                className="col-lg-6 d-flex align-items-center aos-init aos-animate"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <img
                  src="assets/images/skills.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <div className="row content">
                  <div className="col-lg-6  mb-3">
                    <h5>MULTIPLE TIERS</h5>
                    <p>
                      Create an unlimited number of different membership types
                      to meet the specific needs of your organization.{" "}
                    </p>
                  </div>
                  <div className="col-lg-6  mb-3">
                    <h5>RECURRING BILLING</h5>
                    <p>
                      Select whether you want your membership type to re-bill at
                      the end of the cycle or not.Create an unlimited number of
                      different membership types to meet the specific needs of
                      your organization.{" "}
                    </p>
                  </div>
                  <div className="col-lg-6  mb-3">
                    <h5>ANY INTERVAL</h5>
                    <p>
                      Membership types can be defined to last for any interval
                      (annual, monthly, weekly, or custom) and can expire or
                      re-bill at the end.{" "}
                    </p>
                  </div>
                  <div className="col-lg-6  mb-3">
                    <h5>DEFINE STATUSES</h5>
                    <p>
                      Determine whether you want to have registered members go
                      into 'prospective', 'pending', or 'active' status.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End About Us Section */}

        {/* ======= Services Section ======= */}

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
                  />
                  <button
                    type="button"
                    className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2 arrow-button"
                  >
                    <i className="bx bxs-send"></i>
                  </button>
                </div>
                {/* <p><i className="ri-checkbox-circle-fill"></i>Your email has been successfully registered, headlines will be sent to you soon.</p>  */}
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
      </main>

      <Footer />
    </>
  );
}
