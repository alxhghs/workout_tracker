/**
 * Component for rendering the table dynamically
 */

import React from 'react'
import '../../styles/Table.css'
import TableHeader from './TableHeader'
import TableBody from './TableBody'


const Table = (props) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col table-scroll'>
          <table className='table' id='workouts-table'>
            <TableHeader />
            {/* handleClick updates alert text */}
            <TableBody
              workouts={props.entries}
              handleClick={props.handleClick}
              handleDelete={props.handleDelete}
            />
          </table>
        </div>
      </div>
    </div>
  )
}

export default Table
