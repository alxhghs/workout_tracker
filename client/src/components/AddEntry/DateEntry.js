import React from 'react';

const DateEntry = (props) => {
  return (
    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3'>
      <input
        className='form-control workout-fields'
        type='date'
        name={props.name}
        id={props.name}
        autoComplete='off'
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  )
}

export default DateEntry
