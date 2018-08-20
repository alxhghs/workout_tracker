import React, {Component} from 'react';
import RowContainer from '../../containers/RowContainer'


class Body extends Component {
  render() {
    const workouts = this.props.workouts;
    const workoutRows = workouts.map((workout, i) =>
      <RowContainer key={i} row={workout}/>
    );
    return (
      <tbody>
        {workoutRows}
      </tbody>
    )
  }
}

export default Body
