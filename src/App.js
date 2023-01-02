import React from "react";
import "./homePage.css";
import { Card } from "antd";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WorkoutPlan from "./WorkoutPlan/WorkoutPlan";
import ProteinGuide from "./ProteinGuide/ProteinGuide";

const gridStyle = {
  width: "33.3%",
  color: "white",
};

const cardStyle = {
  textAlign: "center",
  color: "white",
  fontWeight: "bold",
  backgroundColor: "black",
  height: "100%",
  width: "100%",
};

function goToWorkoutPlan() {
  console.log("Heyyyy");
}
function App() {
  return (
    <Router>
      <div className="homePage">
        <Card
          style={cardStyle}
          title="You are ready to start your fitness journey"
        >
          <Link to="/workoutPlan">
            <Card.Grid style={gridStyle} onClick={() => goToWorkoutPlan()}>
              Workout Plan
            </Card.Grid>
          </Link>
          <Link to="/proteinGuide" style={gridStyle}>
            <Card.Grid>Protein Guide</Card.Grid>
          </Link>
          <Card.Grid style={gridStyle}>Everything you need to know</Card.Grid>
        </Card>
      </div>
      <Routes>
        <Route exact path="/workoutPlan" element={<WorkoutPlan />}></Route>
        <Route exact path="/proteinGuide" element={<ProteinGuide />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
