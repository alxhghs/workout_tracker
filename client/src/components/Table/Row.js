import React from "react";
import Button from '../Button'


const Row = (props) => {
  return (
    <tr>
      <td>{props.row.name}</td>
      <td>{props.row.reps}</td>
      <td>{props.row.date}</td>
      <td>{props.row.weight}</td>
      <td>{props.row.lbs === 1 ? 'lbs' : 'kg'}</td>
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
