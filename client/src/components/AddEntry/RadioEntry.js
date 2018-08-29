import React from 'react';

const RadioEntry = (props) => {
  return (
    <div className='form-check m-4'>
      <input
        className='form-check-input'
        type='radio'
        name={props.name}
        placeholder={props.placeholder}
        id={props.name}
        value={props.value}
        autoComplete='off'
        checked={props.checked}
        onChange={props.onChange}
      />
      <label
        className='form-check-label'
        htmlFor={props.name}
      >{props.placeholder}
      </label>
    </div>
  )
}

export default RadioEntry
