/**
 * Component to render the jumbotron which goes at the top
 */

import React, {Component} from 'react'


class Jumbotron extends Component {
  render() {
    return (
      <div className={"jumbotron"}>
        <div className={"container text-center"}>
          <h1>Simple Workouts Tracker</h1>
        </div>
      </div>
    )
  }
}

export default Jumbotron
