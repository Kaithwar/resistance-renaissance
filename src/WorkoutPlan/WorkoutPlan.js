import React from "react";
import "../Styles/workoutPlan.css";

function WorkoutPlan() {
  console.log("i am in workoutPlan");
  return (
    <div className="workoutPlan">
      <div className="Plan">
        <div className="box-width">
          <h1>Make Your WorkOut Plan</h1>
          <div className="head">
            <p>Create a Workout Plan for me:</p>
            <p>Days per week:</p>
            <div class="dropdown">
              <div className="select">
                <span className="selected">7</span>
                <div className="caret"></div>
              </div>
              <div className="menu">
                <ul className="menu">
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                  <li>6</li>
                  <li>7</li>
                </ul>
              </div>
            </div>
            <p>Start On:</p>
            <div class="dropdown">
              <div className="select">
                <span className="selected">Monday</span>
                <div className="caret"></div>
              </div>
              <div className="menu">
                <ul className="menu">
                  <li>Monday</li>
                  <li>Tuesday</li>
                  <li>Wednesday</li>
                  <li>Thursday</li>
                  <li>Friday</li>
                  <li>Saturday</li>
                  <li>Sunday</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkoutPlan;
