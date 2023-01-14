import "../Styles/workoutPlan.css";
import React, { useState } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from "react-router-dom";


function WorkoutPlan() {
  const [day, setDay] = useState('Monday');
  const [value, setValue] = useState('1');
  const handleSelect = (e) => {
    console.log(e);
    setValue(e)
  }
  const handleSelect2 = (e) => {
    console.log(e);
    setDay(e);
  }
  console.log("i am in workoutPlan");
  return (
    <div className="workoutPlan">
      <h1>Make Your WorkOut Plan</h1>
      <br></br>
      <div className="box-width">
        <p id="text">Create a Workout Plan for me:</p>
        <p>Days per week:</p>
        <div className="App container" id="drop">
          <DropdownButton
            alignRight
            title={value}
            id="dropdown-menu-align-right"
            onSelect={handleSelect}
          >
            <Dropdown.Item eventKey="1">1</Dropdown.Item>
            <Dropdown.Item eventKey="2">2</Dropdown.Item>
            <Dropdown.Item eventKey="3">3</Dropdown.Item>
            <Dropdown.Item eventKey="4">4</Dropdown.Item>
            <Dropdown.Item eventKey="5">5</Dropdown.Item>
            <Dropdown.Item eventKey="6">6</Dropdown.Item>
            <Dropdown.Item eventKey="7">7</Dropdown.Item>

          </DropdownButton>

        </div>
        <p>Start On:</p>
        <div className="App container" id="drop" style={{ paddingLeft: "20px" }}>
          <DropdownButton
            alignRight
            title={day}
            id="dropdown-menu-align-right"
            onSelect={handleSelect2}
          >
            <Dropdown.Item eventKey="Monday">Monday</Dropdown.Item>
            <Dropdown.Item eventKey="Tuesday">Tuesday</Dropdown.Item>
            <Dropdown.Item eventKey="Wednesday">Wednesday</Dropdown.Item>
            <Dropdown.Item eventKey="Thursday">Thursday</Dropdown.Item>
            <Dropdown.Item eventKey="Friday">Friday</Dropdown.Item>
            <Dropdown.Item eventKey="Saturday">Saturday</Dropdown.Item>
            <Dropdown.Item eventKey="Sunday">Sunday</Dropdown.Item>

          </DropdownButton>
        </div>
      </div>

      <div className="days">
        <p>Sunday</p>
        <p>Monday</p>
        <p>Tuesday</p>
        <p>Wednesday</p>
        <p>Thursday</p>
        <p>Friday</p>
        <p>Saturday</p>
      </div>
      <div className="days bg exe">
        <p>Rest</p>
        <div className="line"></div>
        <p>Push</p>
        <div className="line"></div>
        <p>Pull</p>
        <div className="line"></div>
        <p>Rest</p>
        <div className="line"></div>
        <p>Push</p>
        <div className="line"></div>
        <p>Legs</p>
        <div className="line"></div>
        <p>Rest</p>
      </div>

      <div className="notes bg">
        <div className="gym">
          <p>Arcu tortor, purus in mattis at sed integer faucibus. Lorem Ispum.</p>
          <p>Arcu tortor, purus in mattis at sed integer faucibus. Lorem Ispum.</p>
          <p>Arcu tortor, purus in mattis at sed integer faucibus. Lorem Ispum.</p>
          <p>Arcu tortor, purus in mattis at sed integer faucibus. Lorem Ispum.</p>
        </div>
        <div className="gym">
          <p>Arcu tortor, purus in mattis at sed integer faucibus. Lorem Ispum.</p>
          <p>Arcu tortor, purus in mattis at sed integer faucibus. Lorem Ispum.</p>
          <p>Arcu tortor, purus in mattis at sed integer faucibus. Lorem Ispum.</p>
          <p>Arcu tortor, purus in mattis at sed integer faucibus. Lorem Ispum.</p>
        </div>
        <div className="video">
          <iframe width="410" height="220" src="https://www.youtube.com/embed/ml6cT4AZdqI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>

      <div className="back">
        <Link to={"/"}>Back to Home</Link>
        <Link to={"/"}>Got it! Send todays Workout plan on my phone</Link>
        <Link to={"/proteinGuide"}>Take me to Protein guide</Link>
      </div>
    </div>
  );
}

export default WorkoutPlan;
