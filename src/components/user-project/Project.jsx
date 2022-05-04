import React, { useState } from "react";
import SideNav from "./component/SideNav";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import Buttons from "./component/Buttons";
import Lists from "./component/Lists";
import "./css/main.css";
const Project = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  return currentUser ? (
    <body className="theme-cyan">
    <div id="wrapper">
      <nav className="navbar navbar-fixed-top">
        <div className="container-fluid">
          <Navbar />
        </div>
      </nav>
      <div id="left-sidebar" className="sidebar mini-sidebar ">
        <div className="sidebar-scroll">
          <SideNav />
        </div>
      </div>
      <div id="main-content" className="taskboard">
        <div className="container-fluid">
          <div className="block-header">
            <Header />
          </div>
          <div className="row clearfix" style={{ marginBottom: "-10px" }}>
            <Buttons />
          </div>
          <div className="row clearfix">
            <Lists />
          </div>
        </div>
      </div>
    </div>
  </body>
  ):(
    <>
    {window.location.pathname="/login"}
    </>
  );
  }
export default Project;
