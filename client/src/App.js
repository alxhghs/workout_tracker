/**
 * Used to render all of the components for the application
 */

import React, { Component } from 'react'
import './App.css'
import AddEntry from './components/AddEntry/AddEntry'
import Alert from './components/Alert'
import Footer from './components/Footer'
import NavBarContainer from './containers/NavBarContainer'
import Jumbotron from './components/Jumbotron'
import TableContainer from './containers/TableContainer'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateText: 'Welcome!',
      updateColor: 'primary'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e, text, color) => {
    e.preventDefault();
    if (text) this.setState({ updateText: text});
    if (color) this.setState({ updateColor: color});
  }

  render() {
    return (
      <div>
        <NavBarContainer handleClick={this.handleClick}/>
        <Jumbotron />
        <Alert
          updateText={this.state.updateText}
          updateColor={this.state.updateColor}
        />
        <AddEntry handleClick={this.handleClick}/>
        <TableContainer handleClick={this.handleClick}/>
        <Footer />
      </div>
    )
  }
}

export default App
