/**
 * Component for rendering the Alert message related to user actions
 */

import React from 'react'


const Alert = (props) => {
  return (
    <div className='container'>
      <div role='alert'>
        <h3
          id='update'
          className={`alert alert-${props.updateColor} text-center`}
        >{props.updateText}
        </h3>
      </div>
    </div>
  )
}

export default Alert
