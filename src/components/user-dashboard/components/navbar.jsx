import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../redux/action/user.action";
import logo from "../../../assets/images/logo.png";
import "../css/main.css";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchInput, setSearchInput] = useState("");

  const logout = () => {
    navigate("/");
    dispatch(logoutUser());
  };

  return (
    <>
      <div className="navbar-btn">
        <button type="button" className="btn-toggle-offcanvas">
          <i className="lnr lnr-menu fa fa-bars"></i>
        </button>
      </div>
      <div className="navbar-brand">
        <a href="index.html">
          <img src={logo} alt="Lucid Logo" className="img-responsive logo" />
        </a>
      </div>
      <div className="navbar-right">
        <div className="nav-control">
          <div className="hamburger btn-toggle-fullwidth">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
        <div id="navbar-menu">
          <ul className="nav navbar-nav">
            <li style={{ marginLeft: "4px" }}>
              <a
                href="javascript:void(0);"
                className="icon-menu d-none d-sm-block d-md-none d-lg-block"
              >
                <form id="navbar-search" className="navbar-form search-form">
                  <input
                    value=""
                    className="form-control"
                    placeholder="Search by member name or order number"
                    type="text"
                  />
                  <button type="button" className="btn btn-default">
                    <i className="icon-magnifier"></i>
                  </button>
                </form>
              </a>
            </li>
            <li style={{ marginLeft: "4px" }}>
              <a
                href="app-calendar.html"
                className="icon-menu d-none d-sm-block d-md-none d-lg-block"
              >
                <i className="icon-calendar"></i>
              </a>
            </li>
            <li className="dropdown">
              <a
                href="javascript:void(0);"
                className="dropdown-toggle icon-menu"
                data-toggle="dropdown"
              >
                <i className="icon-bell"></i>
                <span className="notification-dot"></span>
              </a>
              <ul className="dropdown-menu notifications">
                <li className="header">
                  <strong>You have 4 new Notifications</strong>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <div className="media">
                      <div className="media-left">
                        <i className="icon-info text-warning"></i>
                      </div>
                      <div className="media-body">
                        <p className="text">
                          Campaign <strong>Holiday Sale</strong> is nearly reach
                          budget limit.
                        </p>
                        <span className="timestamp">10:00 AM Today</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li style={{ marginLeft: "4px" }}>
                  <a href="javascript:void(0);">
                    <div className="media">
                      <div className="media-left">
                        <i className="icon-like text-success"></i>
                      </div>
                      <div className="media-body">
                        <p className="text">
                          Your New Campaign <strong>Holiday Sale</strong> is
                          approved.
                        </p>
                        <span className="timestamp">11:30 AM Today</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li style={{ marginLeft: "4px" }}>
                  <a href="javascript:void(0);">
                    <div className="media">
                      <div className="media-left">
                        <i className="icon-pie-chart text-info"></i>
                      </div>
                      <div className="media-body">
                        <p className="text">
                          Website visits from Twitter is 27% higher than last
                          week.
                        </p>
                        <span className="timestamp">04:00 PM Today</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li style={{ marginLeft: "4px" }}>
                  <a href="javascript:void(0);">
                    <div className="media">
                      <div className="media-left">
                        <i className="icon-info text-danger"></i>
                      </div>
                      <div className="media-body">
                        <p className="text">
                          Error on website analytics configurations
                        </p>
                        <span className="timestamp">Yesterday</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="footer">
                  <a href="javascript:void(0);" className="more">
                    See all notifications
                  </a>
                </li>
              </ul>
            </li>
            <li style={{ marginLeft: "4px" }}>
              <a href="app-chat.html" className="icon-menu d-none d-sm-block">
                <i className="icon-settings"></i>
              </a>
            </li>
            <li style={{ marginLeft: "4px" }}>
              <a href="javascript:void()" className="btn btn-em">
                Switch Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
