/**
 * Component to render the jumbotron which goes at the top
 */

import React from 'react'


const Jumbotron = () => {
  return (
    <div className={'jumbotron'}>
      <div className={'container text-center'}>
        <h1>Simple Workouts Tracker</h1>
        <p>Built with React and Node</p>
      </div>
    </div>
  )
}

export default Jumbotron
