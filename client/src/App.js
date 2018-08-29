/**
 * Used to render all of the components for the application
 */

import React, { Component } from 'react'
import qs from 'qs'
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
    this.handleAdd = this.handleAdd.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.port = '52451';
  }

  /* Adds a new entry to the state and thus the database */
  handleAdd = (e, newElement) => {
    this.setState(() => {
      return {
        entries: [...this.state.entries, newElement],  // all current + new (immutable state)
        // hasEntries: true
      }
    });
  };

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

  /* Updates an entry */
  handleUpdate = (e, updatedElement, index) => {
    let array = [...this.state.entries];
    array[index] = updatedElement;        // replace element in array
    this.setState({
      entries: array
    })
  }

  /* Deletes entry from array */
  handleDelete = (e, index) => {
    e.persist();
    // e.preventDefault();  // necessary?
    const data = {
      'id' : index
    }

    fetch(`http://localhost:${this.port}/delete`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: qs.stringify(data)
      })
    .then(response => {
      let text, color;
      if (response.status >= 200 && response.status < 400) {
        text = 'Deleted entry';
        color = 'danger';
        let array = [...this.state.entries];
        // TODO track entries id separate from database id
        // const i =
        array.splice(i, 1);  // remove item from index
        this.setState({
          entries: array
        })
      } else {
        text = 'Error';
        color = 'danger'
      }
      this.handleClick(e, text, color);
    })
    .catch(error => console.log(error));
  }

  /* Loads the entries in the database at start */
  componentDidMount() {
    fetch(`http://localhost:${this.port}/read`)
      .then(response => response.json())
      .then(
        response => {
          if (response.results)  // if no entries, causes app to crash w/o this if statement
            this.setState({
              entries: response.results
          });
        },
        (error) => {             // not sure if we need error handling here and in
          console.log(error);    // catch statement
        }
      )
      .catch(error => console.log(error))
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
        {/* handleClick handles updating the alert */}
        <AddEntryContainer
          handleAdd={this.handleAdd}
          port={this.port}
          handleClick={this.handleClick}
        />
        <Table
          handleClick={this.handleClick}
          entries={this.state.entries}
          handleDelete={this.handleDelete}
        />
        <Footer />
      </div>
    )
  }
}

export default App
