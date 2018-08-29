import React, { Component } from 'react';
import Modal from '../Modal'
import TextEntry from '../../components/AddEntry/TextEntry'
import DateEntry from '../../components/AddEntry/DateEntry'
import RadioEntry from '../../components/AddEntry/RadioEntry'


class Row extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    this.props.handleClick(e);
  };

  componentDidMount() {
    console.log(`Row printing id: ` + this.props.id);
  }

  render() {
    const inputs = (
      <form onSubmit={this.handleSubmit}>
        <TextEntry placeholder='Workout'/>
        <TextEntry placeholder='Reps'/>
        <DateEntry />
        <TextEntry placeholder='Weight'/>
        <RadioEntry name={'lbs'}/>
        <RadioEntry name={'kg'}/>
      </form>
    )

    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.reps}</td>
        <td>{this.props.date}</td>
        <td>{this.props.weight}</td>
        <td>{this.props.lbs}</td>
        <td>
          <Modal
            id={this.props.id}
            className='update-workout'
            name='Update'
            handleSubmit={this.handleSubmit}
            body={inputs}
            handleDelete={this.props.handleDelete}
          />
        </td>
      </tr>
    )
  }
}

export default Row
