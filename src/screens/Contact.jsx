import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Error from "../components/Error";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function ContactScreen() {
  // const dispatch = useDispatch();

  useEffect(() => { }, []);

  return (

    <>


      <Navbar />
      <section id="Contactbanner" className="d-flex align-items-center">
        <div className="container">

          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
              <h1>Contact Us</h1>
              <p>Get In Touch To See How We Can Help You
              </p>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 Contactbanner-img" data-aos="zoom-in" data-aos-delay="200">
              <img src="assets/images/contact-right.png" className="img-fluid animated" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* End Contactbanner */}

      <main id="main">


        {/* ======= Contact Section ======= */}
        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">
            <div className="row">

              <div className="col-lg-5 d-flex align-items-stretch">
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>71-75 Shelton Street, London, Greater London, United Kingdom </p>
                  </div>

                  <div className="email">
                    <i className="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>info@emembrs.com</p>
                  </div>

                  {/* <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
    </div> */}

                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9078258933405!2d-0.12577288434324635!3d51.51490701797537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ccab26369b%3A0xcbca337b01407c64!2s75%20Shelton%20St%2C%20London%20WC2H%209JQ%2C%20UK!5e0!3m2!1sen!2sbg!4v1646894238634!5m2!1sen!2sbg" frameborder="0" allowfullscreen></iframe>
                  {/* style="border:0; width: 100%; height: 290px;" */}
                </div>

              </div>

              <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your Name</label>
                      <input type="text" name="name" className="form-control" id="name" required />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your Email</label>
                      <input type="email" className="form-control" name="email" id="email" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Subject</label>
                    <input type="text" className="form-control" name="subject" id="subject" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Message</label>
                    <textarea className="form-control" name="message" rows="10" required></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div className="text-center"><button type="submit">Send Message</button></div>
                </form>
              </div>

            </div>

          </div>
        </section>  {/* End Contact Section */}

      </main>  {/* End #main */}

      <Footer />

    </>


  );
}