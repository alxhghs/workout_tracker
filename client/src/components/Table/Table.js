/**
 * Component for rendering the table dynamically
 */

import React from 'react'
import '../../styles/Table.css'
import Header from './Header'
import Body from './Body'


const Table = (props) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col table-scroll'>
          <table className='table' id='workouts-table'>
            <Header />
            <Body workouts={props.workouts}/>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Table
