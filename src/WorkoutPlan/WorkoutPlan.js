import "../Styles/workoutPlan.css";
import React, { useState } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from "react-router-dom";
import axios from "axios";
import {Button} from '@mui/material';
function WorkoutPlan() {
  const [value, setValue] = useState('3');
  const [day1plan,setday1plan]=useState('REST');
  const [day2plan,setday2plan]=useState('Rest');
  const [day3plan,setday3plan]=useState('Rest');
  const [day4plan,setday4plan]=useState('Rest');
  const [day5plan,setday5plan]=useState('Rest');
  const [day6plan,setday6plan]=useState('Rest');
  const [day7plan,setday7plan]=useState('Rest');
const [Exercises,setExercises]=useState(["List here"]);
  const [description,setDescription]=useState([" "]);
  const exercises = Exercises.map((exercise)=>{
    return <li>{exercise}</li>;
});
  const handleSelect = (e) => {
    console.log(e);
    setValue(e);
   axios.get(`http://localhost:4000/${e}`).then(response => {
     console.log( response);
     setday1plan(response.data[0]);
     setday2plan(response.data[1]);
     setday3plan(response.data[2]);
     setday4plan(response.data[3]);
     setday5plan(response.data[4])
     setday6plan(response.data[5]);
     setday7plan(response.data[6]);

    }).err(err=>console.log(err));
    
  }
 
  
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
            
            <Dropdown.Item eventKey="3">3</Dropdown.Item>
            <Dropdown.Item eventKey="4">4</Dropdown.Item>
            <Dropdown.Item eventKey="5">5</Dropdown.Item>
            <Dropdown.Item eventKey="6">6</Dropdown.Item>
            <Dropdown.Item eventKey="7">7</Dropdown.Item>

          </DropdownButton>

        </div>
       </div>

      <div className="days">
        <p id="dayan"><h4>Monday</h4></p>
        <p id="dayan"><h4>Tuesday</h4></p>
        <p id="dayan"><h4>Wednesday</h4></p>
        <p id="dayan"><h4>Thursday</h4></p> 
        <p id="dayan"><h4>Friday</h4></p> &nbsp;&nbsp;
        <p id="dayan"><h4>Saturday</h4></p>
        <p id="dayan"><h4>Sunday</h4></p>
        <p>Day1</p>
        <p>Day2</p>
        <p>Day3</p>
        <p>Day4</p>
        <p>Day5</p>
        <p>Day6</p>
        <p>Day7</p>
      </div>
      <div className="days bg exe">
        <Button onClick={()=>{axios.get(`http://localhost:4000/exercise/${day1plan}`).then(response => {
     console.log(response);
     setExercises(response.data);
     setDescription(response.data[7]);
    }).err(err=>console.log(err));
    
    }} id="btn">{day1plan}</Button>
        <div className="line"></div>
      
        <Button onClick={()=>{axios.get(`http://localhost:4000/exercise/${day2plan}`).then(response => {
     console.log(response);
     setExercises(response.data);
    }).err(err=>console.log(err));
    }} id="btn">{day2plan}</Button>
        <div className="line"></div>
       
        <Button onClick={()=>{axios.get(`http://localhost:4000/exercise/${day3plan}`).then(response => {
     console.log(response);
     setExercises(response.data[0].exercises);
    }).err(err=>console.log(err));
    }} id="btn">{day3plan}</Button>
        <div className="line"></div>
      
        <Button onClick={()=>{axios.get(`http://localhost:4000/exercise/${day4plan}`).then(response => {
     console.log(response);
     setExercises(response.data[0].exercises);
    
    }).err(err=>console.log(err));
    }} id="btn">{day4plan}</Button>
        <div className="line"></div>
        
        <Button onClick={()=>{axios.get(`http://localhost:4000/exercise/${day5plan}`).then(response => {
     console.log(response);
     setExercises(response.data[0].exercises);
    }).err(err=>console.log(err));
    }} id="btn">{day5plan}</Button>
        <div className="line"></div>
        
        <Button onClick={()=>{axios.get(`http://localhost:4000/exercise/${day6plan}`).then(response => {
     console.log(response);
     setExercises(response.data[0].exercises);
    }).err(err=>console.log(err));
    }} id="btn">{day6plan}</Button>
        <div className="line"></div>
        
        <Button onClick={()=>{axios.get(`http://localhost:4000/exercise/${day7plan}`).then(response => {
     console.log(response);
     setExercises(response.data[0].exercises);
    }).err(err=>console.log(err));
    }} id="btn">{day7plan}</Button>
      </div>

      <div className="notes bg">
        <div className="gym">
        <ul>
        {exercises}
    </ul>
        </div>
        <div className="bigline"></div>
        <div className="gym">
         { description}
        </div>
        <div className="bigline"></div>
        <div className="video">
          <iframe width="380" height="200" src="https://www.youtube.com/embed/ml6cT4AZdqI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
