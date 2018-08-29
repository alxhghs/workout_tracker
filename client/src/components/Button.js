/**
 * Helper component to render buttons
 */

import React, {Component} from 'react';

class Button extends Component {
  render() {
    return (
      <div>
        <button
          className={this.props.className}
          type={this.props.type}
          value={this.props.value}
          id={this.props.id}
          onClick={this.props.handleClick}
          data-toggle={this.props.dataToggle}
          data-target={this.props.dataTarget}
          data-dismiss={this.props.dataDismiss}
        >
          {this.props.name}
        </button>
      </div>
    )
  }
}

export default Button
