/**
 * Used to render all of the components for the application
 */

import React, { Component } from 'react';

import './App.css';

import AddEntry from './components/TextEntry'
import Alert from './components/Alert'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Jumbotron from './components/Jumbotron'
import Table from './components/Table'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Jumbotron />
        <Alert />
        <AddEntry/>
        <Table />
        <Footer />
      </div>
    )
  }
}

export default App
