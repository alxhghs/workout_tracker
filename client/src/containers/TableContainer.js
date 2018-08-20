import React, {Component}  from "react";
import Table from '../components/Table/Table'

class TableContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      workouts: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:52451/read')
      .then(response => response.json())
      .then(
        (response) => {
          this.setState({
            isLoaded: true,
            workouts: response.results
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return <Table workouts={this.state.workouts} />
  }
}

export default TableContainer
