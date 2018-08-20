/**
 * Component to render the footer at the bottom
 */

import React, {Component} from 'react'
import '../styles/Footer.css'


class Footer extends Component {
  render(){
    return (
      <footer>
        <p>
          <a href='http://www.alxhghs.com/'>Alex Hughes </a>
          | CS 290
        </p>
      </footer>
    )
  }
}

export default Footer
