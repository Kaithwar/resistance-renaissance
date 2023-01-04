import React from "react";
import "./homePage.css";
import { Card } from "antd";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WorkoutPlan from "./workoutPlan/WorkoutPlan";
import ProteinGuide from "./proteinGuide/ProteinGuide";
import General from "./general/General";

const cardStyle = {
  textAlign: "center",
  color: "white",
  fontWeight: "bold",
  backgroundColor: "black",
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
};

const linkStyle = {
  width: "100%",
  flexGrow: 1,
};

const gridStyle = {
  color: "white",
  width: "100%",
};

function goToWorkoutPlan() {
  console.log("loading workout plan...");
}

function goToProteinGuide() {
  console.log("loading protein guide...");
}

function goToGeneral() {
  console.log("loading everything you need to know...");
}

function App() {
  return (
    <Router>
      <div className="homePage">
        <Card
          style={cardStyle}
          title="You are ready to start your fitness journey"
        >
          <Link to="/workoutPlan" style={linkStyle}>
            <Card.Grid style={gridStyle} onClick={() => goToWorkoutPlan}>
              Workout Plan
            </Card.Grid>
          </Link>
          <Link to="/proteinGuide" style={linkStyle}>
            <Card.Grid style={gridStyle} onClick={() => goToProteinGuide}>
              Protein Guide
            </Card.Grid>
          </Link>
          <Link to="/general" style={linkStyle}>
            <Card.Grid style={gridStyle} onClick={() => goToGeneral}>
              Everything you need to know
            </Card.Grid>
          </Link>
        </Card>
      </div>
      <Routes>
        <Route exact path="/workoutPlan" element={<WorkoutPlan />}></Route>
        <Route exact path="/proteinGuide" element={<ProteinGuide />}></Route>
        <Route exact path="/general" element={<General />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
