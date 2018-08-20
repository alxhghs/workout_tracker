import React from "react";
import Row from './Row'


const Body = (props) => {
  const workouts = props.workouts;
  const workoutRows = workouts.map((workout) =>
    <Row row={workout}/>
  );
  console.log(workoutRows);
  return (
    <tbody>
      {workoutRows}
    </tbody>
  )
}

export default Body
