import { Link, Outlet, useMatch } from "react-router-dom";

export default function RegisterTab1() {
  const match = useMatch("/register/individual/address");
  return (
    <>
      <ul className="nav  py-4">
        <li className="nav-item">
          <Link className={`nav-link ${match ? "" : "active"}`} to="personal">
            <span className="ui-steps-number">1</span>
            <span className="ui-steps-title">Personal Details</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link link-secondary ${match ? "active" : ""}`}
            to="address"
          >
            <span className="ui-steps-number">2</span>
            <span className="ui-steps-title">Address Details</span>
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
