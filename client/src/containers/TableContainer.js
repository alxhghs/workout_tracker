import React, {Component}  from 'react';
import Table from '../components/Table/Table'

class TableContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      workouts: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:52451/read')
      .then(response => response.json())
      .then(
        (response) => {
          this.setState({
            workouts: response.results
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }

  render() {
    return (
      <Table
        workouts={this.state.workouts}
        handleClick={this.props.handleClick}
      />
    )
  }
}

export default TableContainer
