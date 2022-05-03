import { Link, Outlet, useMatch } from "react-router-dom";

export default function RegisterTab2() {
  const group = useMatch("/register/group");
  const personal = useMatch("/register/group/personal");
  const address = useMatch("/register/group/address");
  const details = useMatch("/register/group/details");
  // console.log(personal);
  return (
    <>
      <ul class="nav  py-4">
        <li class="nav-item">
          <Link
            to="personal"
            className={`nav-link ${personal || group ? "active" : ""}`}
          >
            <span class="ui-steps-number">1</span>
            <span class="ui-steps-title">Personal Details</span>
          </Link>
        </li>
        <li class="nav-item">
          <Link
            to="address"
            className={`nav-link link-secondary ${address ? "active" : ""}`}
          >
            <span class="ui-steps-number">2</span>
            <span class="ui-steps-title">Address Details</span>
          </Link>
        </li>
        <li class="nav-item">
          <Link
            to="details"
            className={`nav-link link-secondary ${details ? "active" : ""}`}
          >
            <span class="ui-steps-number">3</span>
            <span class="ui-steps-title">Group Details</span>
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
