import React, { Component } from 'react'
import qs from 'qs'
import AddEntry from '../components/AddEntry/AddEntry'


class AddEntryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      reps: '',
      weight: '',
      date: '',
      lbs: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(e) {
    e.persist();
    e.preventDefault();
    const data = {
      'name'  : this.state.name,
      'reps'  : this.state.reps,
      'weight': this.state.weight,
      'date'  : this.state.date,
      'lbs'   : this.state.lbs
    };

    fetch('http://localhost:52451/create',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: qs.stringify(data)
      })
      .then((response) => {
        let text, color;
        if (response.status >= 200 && response.status < 400) {
          text = `Added ${data.name}`;
          color = 'success';
        } else {
          text = 'Invalid entry';
          color = 'danger'
        }
        this.props.handleClick(e, text, color);
      })
      .then(() => fetch(`http://localhost:${this.props.port}/read-recent`))
      .then((response) => {
        this.props.handleAdd(e, response.results);
      })
      .catch((error) => console.log(error));
  };

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ?
      target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <AddEntry
        handleSubmit={this.handleSubmit}
        handleClick={this.props.handleClick}
        handleInputChange={this.handleInputChange}
      />
    )
  }
}

export default AddEntryContainer
