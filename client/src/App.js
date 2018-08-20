/**
 * Used to render all of the components for the application
 */

import React, { Component } from 'react';
import './App.css';
import AddEntry from './components/AddEntry/AddEntry'
import Alert from './components/Alert'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Jumbotron from './components/Jumbotron'
import TableContainer from './containers/TableContainer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      update: 'Welcome!',
      updateColor: 'primary'
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <Jumbotron />
        <Alert
          update={this.state.update}
          updateColor={this.state.updateColor}
        />
        <AddEntry/>
        <TableContainer />
        <Footer />
      </div>
    )
  }
}

export default App
