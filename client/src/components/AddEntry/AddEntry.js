import React from 'react';
import Button from '../Button';
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
            value='1'
            // checked={true}
            onChange={props.handleInputChange}
          />
          <RadioEntry
            name='kg'
            value='0'
            onChange={props.handleInputChange}
          />
        </div>
        <div className='row'>
          <div className='col'>
            <Button
              className='btn btn-success'
              type='submit'
              id='submit-workout'
              name='Submit'
              handleSubmit={props.handleSubmit}
              >
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddEntry
