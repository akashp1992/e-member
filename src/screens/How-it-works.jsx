import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Error from "../components/Error";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function HowScreen() {
  // const dispatch = useDispatch();

  useEffect(() => { }, []);

  return (

    <>
      <Navbar />
      <section id="howitwork" className="d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-flex-start">
            <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0" data-aos="fade-left" data-aos-delay="200">
              <h1>How it Works</h1>

            </div>
          </div>
        </div>
      </section>
      {/* End howitwork */}

      <main id="main">


        {/* ======= Contact Section ======= */}
        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">

            <h1>COMING SOON</h1>

          </div>
        </section>

        {/* End Contact Section */}

      </main> {/* End #main */}

      <Footer />
    </>


  );
}