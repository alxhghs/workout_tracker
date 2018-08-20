import React from 'react';

const RadioEntry = (props) => {
  return (
    <div className='form-check m-4'>
      <input
        className='form-check-input'
        type='radio'
        name={props.name}
        id={props.name}
        value={props.value}
        autoComplete='off'
        checked={props.checked}
      />
      <label
        className='form-check-label'
        htmlFor={props.name}
      >{props.name.charAt(0).toUpperCase() + props.name.substr(1)}
      </label>
    </div>
  )
}

export default RadioEntry
