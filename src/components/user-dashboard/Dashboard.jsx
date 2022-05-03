import React, { useEffect, useState } from "react";
import "./css/main.css";
import Navbar from "./components/navbar";
import SideNav from "./components/side-nav";
import Header from "./components/Header";
import Card from "./components/Card";
import ProjectRepot from "./components/ProjectRepot";
import LatestProject from "./components/LatestProject";
import MyProject from "./components/MyProject";
import ExpensesDetails from "./components/ExpensesDetails";

const Dashboard = () => {
  return (
    <>
      <body className="theme-cyan">
        <div
          id="wrapper"
          className="wrapper"
          style={{
            height: "88px",
          }}
        >
          <nav className="navbar navbar-fixed-top">
            <div className="container-fluid" style={{ marginBottom: "5px" }}>
              <Navbar />
            </div>
          </nav>

          <div id="left-sidebar" className="sidebar mini-sidebar">
            <div className="sidebar-scroll">
              <SideNav />
            </div>
          </div>

          <div id="main-content">
            <div className="container-fluid">
              <div className="block-header">
                <Header />
              </div>

              <div className="row clearfix">
                <Card />
              </div>

              <div className="row clearfix Row">
                <div className="col-sm-12 col-md-6 col-lg-5">
                  <ProjectRepot />
                </div>
                <div className="col-sm-12 col-md-7 col-lg-7">
                  <LatestProject />
                </div>
              </div>

              <div className="row clearfix">
                <div className="col-lg-12">
                  <MyProject />
                </div>
              </div>

              <div className="row clearfix">
                <div className="col-lg-12">
                  <ExpensesDetails />
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Dashboard;
