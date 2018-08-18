/**
 * Helper component to render buttons
 */

import React, {Component} from 'react'


class Button extends Component {
  render() {
    return (
      <div>
        <button
          className={this.props.className}
          type={"submit"}
          value={this.props.value}
          id={this.props.id}>
          {this.props.name}
        </button>
      </div>
    )
  }
}

export default Button
