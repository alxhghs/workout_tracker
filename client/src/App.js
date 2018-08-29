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
// import ErrorBoundary     from './ErrorBoundary'  // necessary?

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateText: 'Welcome!',  // initial alert text
      updateColor: 'primary',
      // hasEntries: false,
      entries: [],
    };
    // this.handleClick = this.handleClick.bind(this);
    // this.handleAdd = this.handleAdd.bind(this);
    this.port = '52451';
  }

  /* Updates the alert text */
  handleClick = (e, text, color) => {
    e.preventDefault();
    if (text) this.setState({ updateText: text});
    if (color) this.setState({ updateColor: color});
  };

  /* Resets the table */
  handleResetClick = (e, text, color) => {
    this.handleClick(e, text, color);
    this.setState({
      entries: [],
      // hasEntries: false
    });
  };

  /* Adds a new entry to the state and thus the database */
  handleAdd = (e, newElement) => {
    this.setState(() => {
      return {
        entries: [...this.state.entries, newElement],  // all current + new (immutable state)
        // hasEntries: true
      }
    });
  };

  /* Loads the entries in the database */
  componentDidMount() {
    fetch(`http://localhost:${this.port}/read`)
      .then(response => response.json())
      .then(
        (response) => {
          if (response.results)  // if no entries, causes app to crash w/o this if statement
            this.setState({
              entries: response.results
          });
        },
        (error) => {             // not sure if we need error handling here and in
          console.log(error);    // catch statement
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
        {/* handles updating the alert */}
        <AddEntryContainer
          handleAdd={this.handleAdd}
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
