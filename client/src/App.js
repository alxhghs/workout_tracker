/**
 * Used to render all of the components for the application
 */

import React, { Component } from 'react'
import './App.css'
import AddEntryContainer from './containers/AddEntryContainer'
import Alert             from './components/Alert'
import Footer            from './components/Footer'
import Jumbotron         from './components/Jumbotron'
import NavBarContainer   from './containers/NavBarContainer'
import Table             from './components/Table/Table'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateText: 'Welcome!',
      updateColor: 'primary',
      hasEntries: false,
      entries: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.port = '52451';
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
    fetch(`http://localhost:${this.port}/read`)
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
        <NavBarContainer
          handleClick={this.handleResetClick}
          port={this.port}
        />
        <Jumbotron />
        <Alert
          updateText={this.state.updateText}
          updateColor={this.state.updateColor}
        />
        <AddEntryContainer
          handleClick={this.handleClick}
          port={this.port}
        />
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
