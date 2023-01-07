import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import "../Styles/homePage.css";

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

export default function Root() {
  return (
    <div className="homePage">
      <Card
        style={cardStyle}
        title="You are ready to start your fitness journey"
      >
        <Link to={"/workoutPlan"} style={linkStyle}>
          <Card.Grid style={gridStyle} onClick={() => goToWorkoutPlan}>
            Workout Plan
          </Card.Grid>
        </Link>
        <Link to={"/proteinGuide"} style={linkStyle}>
          <Card.Grid style={gridStyle} onClick={() => goToProteinGuide}>
            Protein Guide
          </Card.Grid>
        </Link>
        <Link to={"/general"} style={linkStyle}>
          <Card.Grid style={gridStyle} onClick={() => goToGeneral}>
            Everything you need to know
          </Card.Grid>
        </Link>
      </Card>
    </div>
  );
}
