import React, { Component } from 'react'
import $ from 'jquery'
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
    console.log(JSON.stringify(data));

    $.post({
      url: 'http://localhost:52451/create',
      type: 'POST',
      dataType: 'application/json',
      data: data
    })

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
