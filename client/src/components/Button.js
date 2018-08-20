/**
 * Helper component to render buttons
 */

import React from 'react'


const Button = (props) => {
  return (
    <div>
      <button
        className={props.className}
        type={props.type}
        value={props.value}
        id={props.id}
        onClick={props.handleClick}
        data-toggle={props.dataToggle}
        data-target={props.dataTarget}
        >
        {props.name}
      </button>
    </div>
  )
}

export default Button
