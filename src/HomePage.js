import React from 'react';
import './homePage.css';
import { Card } from 'antd';

const gridStyle = {
    width: '33.3%',
    color: 'white' , 
  };

const cardStyle = {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
}  

function goToWorkoutPlan() {
    console.log("Heyyyy")
}

function HomePage() {
  return (
    <div className = 'homePage'>
    <Card style={cardStyle} title="You are ready to start your fitness journey">
    {/* <Link to="/workoutPlan"><Card.Grid style={gridStyle} onClick={()=>goToWorkoutPlan()}>Workout Plan</Card.Grid></Link> */}
    <Card.Grid style={gridStyle}>Protein Guide</Card.Grid>
    <Card.Grid style={gridStyle}>Everything you need to know</Card.Grid>
  </Card>
  </div>
  );
}

export default HomePage;
