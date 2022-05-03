import "./user-dashboard/css/main.css";
import logo from "../assets/images/logo.png";
export default function Loader() {
  return (
    <>
      {/* <div className="mt-5"> */}
      {/* <div
        className="spinner-border mt-5"
        role="status"
        style={{ width: "100px", height: "100px" }}
      >
        <span className="sr-only">Loading...</span>
      </div> */}

      <div class="page-loader-wrapper">
        <div class="loader">
          <div class="m-t-30">
            <img src={logo} alt="Emembr" />
          </div>
          <p>Please wait...</p>
        </div>
      </div>
    </>
  );
}
