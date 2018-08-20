import React from 'react';
import Button from '../Button'


const Row = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.reps}</td>
      <td>{props.date}</td>
      <td>{props.weight}</td>
      <td>{props.lbs}</td>
      <td>
        <Button
          className='btn btn-primary'
          name='Update'
        />
      </td>
    </tr>
  )
}

export default Row
