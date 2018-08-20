import React, { Component } from 'react';
import Button from '../Button'
import Modal from '../Modal'


class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    const text = 'Entry updated';
    const color = 'primary';
    this.props.handleClick(e, text, color);
    this.setState( { showModal: true });
  };

  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.reps}</td>
        <td>{this.props.date}</td>
        <td>{this.props.weight}</td>
        <td>{this.props.lbs}</td>
        <td>
          <Modal
            id='update-workout'
            name='Update'
            handleClick={this.handleClick}
          />
        </td>
      </tr>
    )
  }
}

export default Row
