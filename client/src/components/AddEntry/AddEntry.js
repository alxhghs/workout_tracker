import React from 'react';
import DateEntry from './DateEntry'
import RadioEntry from './RadioEntry'
import TextEntry from './TextEntry'

const AddEntry = (props) => {
  return (
    <div className='container'>
      <h2>Add Entry</h2>
      <form onSubmit={props.handleSubmit}>
        <div className='row'>
          <TextEntry
            name='name'
            placeholder='Workout'
            onChange={props.handleInputChange}
          />
          <DateEntry
            name='date'
            placeholder='Date'
            onChange={props.handleInputChange}
          />
          <TextEntry
            name='reps'
            placeholder='Reps'
            onChange={props.handleInputChange}
          />
          <TextEntry
            name='weight'
            placeholder='Weight'
            onChange={props.handleInputChange}
          />
          <RadioEntry
            name='lbs'
            placeholder='Lbs'
            value='1'
            checked={props.lbs === '1'}
            onChange={props.handleRadioChange}
          />
          <RadioEntry
            name='lbs'
            placeholder='Kg'
            value='0'
            checked={props.lbs === '0'}
            onChange={props.handleRadioChange}
          />
        </div>
        <div className='row'>
          <div className='col'>
            <button
              className='btn btn-success'
              type='submit'
              id='submit-workout'
              name='Submit'
              onClick={props.handleSubmit}
            >Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddEntry
