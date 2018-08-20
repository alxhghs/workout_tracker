/**
 * Helper component to render buttons
 */

import React from 'react'


const Button = (props) => {
  return (
    <div>
      <button
        className={props.className}
        type={"submit"}
        value={props.value}
        id={props.id}>
        {props.name}
      </button>
    </div>
  )
}

export default Button
