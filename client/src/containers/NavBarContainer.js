import React, { Component } from 'react'
import NavBar from '../components/NavBar'


class NavBarContainer extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    const text = 'Table reset';
    const color = 'danger';
    this.props.handleClick(e, text, color);
  };

  render() {
    return (
      <NavBar handleClick={this.handleClick}/>
    )
  }

}

export default NavBarContainer
