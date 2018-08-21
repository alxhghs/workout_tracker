import React, { Component } from 'react'
import AddEntry from '../components/AddEntry/AddEntry'


class AddEntryContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.persist();
    e.preventDefault();
    const data = new FormData(e.target);

    fetch(`http://localhost:${this.props.port}/create`,
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'text/plain'
        }
      })
      .then(
        (response) => {
          let text, color;
          if (response.status >= 200 && response.status < 400) {
            text = 'Entry added';
          } else {
            text = response.error;
          }
          color = 'success';
          // this.props.handleClick(e, text, color);
          return response;
        },
        (error) => {
          const text = error;
          const color = 'danger';
          // this.props.handleClick(e, text, color)
        })
  };

  render() {
    return (
      <AddEntry
        handleSubmit={this.handleSubmit}
        handleClick={this.props.handleClick}
      />
    )
  }
}

export default AddEntryContainer
