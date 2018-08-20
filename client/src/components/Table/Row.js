import React, { Component } from 'react';
import Modal from '../Modal'
import TextEntry from '../../components/AddEntry/TextEntry'
import DateEntry from '../../components/AddEntry/DateEntry'
import RadioEntry from '../../components/AddEntry/RadioEntry'


class Row extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    this.props.handleClick(e);
  };

  render() {
    const inputs = (
      <form>
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
            id='update-workout'
            name='Update'
            handleClick={this.handleClick}
            body={inputs}
          />
        </td>
      </tr>
    )
  }
}

export default Row
