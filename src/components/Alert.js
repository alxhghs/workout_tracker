/**
 * Component for rendering the Alert message related to user actions
 */

import React, {Component} from 'react'


class Alert extends Component {
  render() {
    return (
      <div className="container">
        <div role="alert">
          <h3
            id={"update"}
            className={"alert alert-primary text-center"}
          >Welcome!
          </h3>
        </div>
      </div>
    )
  }
}

export default Alert
