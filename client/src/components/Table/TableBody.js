import React from 'react';
import RowContainer from '../../containers/RowContainer'


const TableBody = (props) => {
  let workouts;
  if (props.workouts) {        // if there are no workouts, don't render any rows
    workouts = props.workouts
  } else return
  const workoutRows = workouts.map((workout, i) =>
    /* handleClick updates alert text */
    <RowContainer
        key={i}
        id={workout.id}
        row={workout}
        handleClick={props.handleClick}
        handleDelete={props.handleDelete}
      />
  )

  return (
    <tbody>
      {workoutRows}
    </tbody>
  )
}

export default TableBody
