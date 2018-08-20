import React from 'react';
import RowContainer from '../../containers/RowContainer'


const Body = (props) => {
  let workouts;
  if (props.workouts) {
    workouts = props.workouts;
  } else return;   // if there are no workouts, don't render any rows
  const workoutRows = workouts.map((workout, i) =>
    <RowContainer
      key={i}
      row={workout}
      handleClick={props.handleClick}
    />
  );
  return (
    <tbody>
      {workoutRows}
    </tbody>
  )
}

export default Body
