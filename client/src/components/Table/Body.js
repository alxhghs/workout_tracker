import React from 'react';
import RowContainer from '../../containers/RowContainer'


const Body = (props) => {
  const workouts = props.workouts;
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
