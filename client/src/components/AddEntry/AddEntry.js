import React from 'react';
import Button from '../Button';
import DateEntry from './DateEntry'
import RadioEntry from './RadioEntry'
import TextEntry from './TextEntry'

const AddEntry = (props) => {
  const handleClick = (e) => {
    const text = 'Entry added';
    const color = 'success';
    props.handleClick(e, text, color);
  };

  return (
    <div className='container'>
      <h2>Add Entry</h2>
      <form>
        <div className='row'>
          <TextEntry
            name='name'
            value=''
            placeholder='Workout' />
          <DateEntry
            name='date'
            value=''
            placeholder='Date' />
          <TextEntry
            name='reps'
            value=''
            placeholder='Reps' />
          <TextEntry
            name='weight'
            value=''
            placeholder='Weight' />
          <RadioEntry
            name='lbs'
            value='1'
            checked={true}
          />
          <RadioEntry
            name='kg'
            value='0'
            checked={false}
          />
        </div>
        <div className='row'>
          <div className='col'>
            <Button
              className='btn btn-success'
              type='submit'
              id='submit-workout'
              name='Submit'
              handleClick={handleClick}
              >
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddEntry
