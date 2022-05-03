import React from "react";
import "../css/main.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../redux/action/user.action";
import user from "../../../assets/images/user.png";
import overview_icon from "../../../assets/images/overview-icon.png";
import project_icon from "../../../assets/images/project-icon.png";
import member_icon from "../../../assets/images/member-icon.png";
import explore_icon from "../../../assets/images/explore-icon.png";
import wallet_icon from "../../../assets/images/wallet-icon.png";
import log_icon from "../../../assets/images/log-icon.png";

const SideNav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    navigate("/");
    dispatch(logoutUser());
  };

  const token = localStorage.getItem("currentUser")
  const {token_type, email, access_token} = JSON.parse(token);

  return (
    <>
      <div className="user-account">
        <img
          src={user}
          className="rounded-circle user-photo"
          alt="User Profile Picture"
        />
        <div className="dropdown">
          <a
            href="javascript:void(0);"
            className="dropdown-toggle user-name"
            data-toggle="dropdown"
          >
            <strong>{email}</strong>
          </a>
          <span>Individual Member</span>
          <ul className="dropdown-menu dropdown-menu-right account">
            <li>
              <a href="page-profile2.html">
                <i className="icon-user"></i>My Profile
              </a>
            </li>
            <li>
              <a href="app-inbox.html">
                <i className="icon-envelope-open"></i>Messages
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <i className="icon-settings"></i>Settings
              </a>
            </li>
            <li className="divider"></li>
            <li>
              <div className="sidenav-footer">
                <div className="sidenav-footer-content">
                  <div className="sidenav-footer-subtitle">Logged in as:</div>
                  <div className="sidenav-footer-title">Valerie Luna</div>
                </div>
              </div>
              <a href="javascript:void()" onClick={logout}>
                <i className="icon-power"></i>Logout
              </a>
            </li>
          </ul>
        </div>
        <ul className="row list-unstyled">
          <li className="col-6">
            <h6 style={{ fontWeight: 500 }}>£4000</h6>
            <small>Total Funds</small>
          </li>
          <li className="col-6">
            <h6 style={{ fontWeight: 500 }}>1350</h6>
            <small>Total Members</small>
          </li>
        </ul>
        <hr />
      </div>

      <div className="tab-content p-l-0 p-r-0">
        <nav id="left-sidebar-nav" className="sidebar-nav">
          <ul id="main-menu" className="metismenu">
            <li>
              <NavLink to="/dashboard">
                <img src={overview_icon} alt="Overview-icon" />
                <span>Overview</span>
              </NavLink>
            </li>
            <li className="active">
              <NavLink to="/Project">
                <img src={project_icon} alt="Projects-icon" />
                <span>Projects</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="individualMember-list.html">
                <img src={member_icon} alt="Memberships-icon" />
                <span>Memberships</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                <img src={explore_icon} alt="Explore-icon" />
                <span>Live Projects</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                <img src={wallet_icon} alt="Wallet-icon" /> <span>Wallet</span>
              </NavLink>
            </li>
            <li className="sidenav-footer">
              <a href="#" onClick={logout}>
                <img src={log_icon} alt="Log-icon" /> <span>Log Out</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideNav;
