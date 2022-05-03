import { Link, useMatch } from "react-router-dom";

export default function RegisterSide() {
  const individual = useMatch("register/individual/*");
  const group = useMatch("register/group/*");
  const business = useMatch("register/business/*");
  return (
    <div
      className="col-md-5 col-sm-12 d-flex flex-column tab"
      data-aos="fade-right"
    >
      {/* <Button to="/register-tab1"> */}
      <Link to="individual">
        <button
          className={`tablinks justify-content-flex-start align-items-center flex-fill OpenForm ${
            individual ? "active" : ""
          }`}
        >
          <h5> Register as Individual</h5>
          <p> Register for your Individual account. </p>
        </button>
      </Link>
      {/* </button> */}
      <Link to="group">
        <button
          className={`tablinks justify-content-flex-start align-items-center flex-fill OpenForm ${
            group ? "active" : ""
          }`}
        >
          <h5>Register as Group</h5>
          <p>
            {" "}
            Register as a Group; to engage with businesses and individuals to
            gain the support you need for your chosen projects in terms of
            volunteering, gifting items, etc.{" "}
          </p>
        </button>
      </Link>
      <Link to="business">
        <button
          className={`tablinks justify-content-flex-start align-items-center flex-fill OpenForm ${
            business ? "active" : ""
          }`}
        >
          <h5>Register as Business</h5>
          <p>
            {" "}
            Become a business member where you can control, manage and report on
            all your Corporate Social Responsible (CSR) activity from a single
            dashboard.{" "}
          </p>
        </button>
      </Link>
    </div>
  );
}
