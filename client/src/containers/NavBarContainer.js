import React, { Component } from 'react'
import NavBar from '../components/NavBar'


class NavBarContainer extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    e.persist();  // https://reactjs.org/docs/events.html#event-pooling
    e.preventDefault();
    fetch('http://localhost:52451/reset-table', { method: 'POST'} )
      .then(
        (response) => {
          let text, color;
          if (response.status >= 200 && response.status < 400) {
            text = 'Table reset';
          } else text = response.error;
          color = 'danger';
          this.props.handleClick(e, text, color)
        },
        (error) => {
          const text = error;
          const color = 'danger';
          this.props.handleClick(e, text, color)
        })
  };

  render() {
    return (
      <NavBar handleClick={this.handleClick}/>
    )
  }

}

export default NavBarContainer
