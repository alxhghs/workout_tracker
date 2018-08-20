/**
 * Component to render the navigation bar
 */

import React from 'react'
import Button from './Button'


const NavBar = (props) => {
  return (
    <nav className={'navbar navbar-dark bg-primary'}>
      <div className={'container d-flex justify-content-end'}>
        <form className={'form-inline my-2 my-lg-0'}>
          <Button
            className='btn btn-danger'
            value='Reset Table'
            id='reset'
            name='Reset'
            handleClick={props.handleClick}
          />
        </form>
      </div>
    </nav>
  )
}

export default NavBar
