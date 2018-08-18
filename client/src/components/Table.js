/**
 * Component for rendering the table dynamically
 */

import React, {Component} from 'react'

import './Table.css'

import Button from './Button'


class Header extends Component {
  render() {
    return (
      <thead className='thead-light'>
        <tr>
          <th>Name</th>
          <th>Reps</th>
          <th>Date</th>
          <th>Weight</th>
          <th>Unit</th>
          <th/>
          <th/>
        </tr>
      </thead>
    )
  }
}

class Body extends Component {
  render() {
    return (
      <tbody>
      <p>{this.props.workouts}</p>
        <tr className="data-row">
          <td>Dead lift</td>
          <td>10</td>
          <td>8-8-2018</td>
          <td>50</td>
          <td>lbs</td>
          <td className='update-button'>
            <Button
              className='btn btn-primary'
              name='Update'
            />
          </td>
          <td className='update-button'>
            <Button
              className='btn btn-danger'
              name='Delete'
            />
          </td>
        </tr>
      </tbody>
    )
  }
}


class Table extends Component {
  constructor(){
    super();
    this.state = {
      workouts: []
    };
  }

  fetchData(){
    fetch('http://localhost:52451/read')
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  componentWillMount(){
    this.setState({workouts: this.fetchData()})
  }

  render() {
    return (
      <div className='container'>
        <div className="row">
          <div className="col">
            <table className="table" id="workouts-table">
              <Header />
              <Body workouts={this.state.workouts}/>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Table
