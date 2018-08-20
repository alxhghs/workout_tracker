/**
 * Used to render all of the components for the application
 */

import React, { Component } from 'react'
import './App.css'
import AddEntry        from './components/AddEntry/AddEntry'
import Alert           from './components/Alert'
import Footer          from './components/Footer'
import Jumbotron       from './components/Jumbotron'
import NavBarContainer from './containers/NavBarContainer'
import Table           from './components/Table/Table'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateText: 'Welcome!',
      updateColor: 'primary',
      hasEntries: false,
      entries: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e, text, color) => {
    e.preventDefault();
    if (text) this.setState({ updateText: text});
    if (color) this.setState({ updateColor: color});
  };

  handleResetClick = (e, text, color) => {
    this.handleClick(e, text, color);
    this.setState({ entries: [] });
  };

  componentDidMount() {
    fetch('http://localhost:52451/read')
      .then(response => response.json())
      .then(
        (response) => {
          this.setState({
            entries: response.results
          });
        },
        (error) => {
          console.log(error);
        }
      )
      .catch((error) => console.log(error))
  }

  render() {
    return (
      <div>
        <NavBarContainer handleClick={this.handleResetClick}/>
        <Jumbotron />
        <Alert
          updateText={this.state.updateText}
          updateColor={this.state.updateColor}
        />
        <AddEntry handleClick={this.handleClick}/>
        <Table
          handleClick={this.handleClick}
          entries={this.state.entries}
        />
        <Footer />
      </div>
    )
  }
}

export default App
