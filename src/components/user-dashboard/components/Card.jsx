import React from "react";
import "../css/main.css";
import createIndividual from "../../../assets/images/createIndividual-icon.png";
import addIndividual from "../../../assets/images/addIndividual-icon.png";
import pojectIndividual from "../../../assets/images/pojectIndividual-icon.png";
import joinIndividual from "../../../assets/images/joinIndividual-icon.png";

export default function Card() {
  return (
    <>
      <div className="col-lg-3 col-md-6">
        <div className="card top_counter Box_1">
          <a href="individualMember-project.html">
            <div className="body">
              <div className="icon text-info">
                <img src={createIndividual} alt="createIndividual-icon" />
              </div>
              <div className="content">
                <h5 className="number">Create Project</h5>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="card top_counter Box_2">
          <a href="#">
            <div className="body">
              <div className="icon text-info">
                <img src={addIndividual} alt="addIndividual-icon" />
              </div>
              <div className="content">
                <h5 className="number">Add Member</h5>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="card top_counter Box_3">
          <a href="#">
            <div className="body">
              <div className="icon text-info">
                <img src={pojectIndividual} alt="pojectIndividual-icon" />
              </div>
              <div className="content">
                <h5 className="number">Project Manage</h5>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="card top_counter Box_4">
          <a href="#">
            <div className="body">
              <div className="icon text-info">
                <img src={joinIndividual} alt="joinIndividual-icon" />
              </div>
              <div className="content">
                <h5 className="number">Join Project</h5>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
