/**
 * Component for rendering the table dynamically
 */

import React, {Component} from 'react'

import './Table.css'

import Button from './Button'


class Table extends Component {
  render() {
    return (
      <div className='container'>
        <div className="row">
          <div className="col">
            <table className="table" id="workouts-table">
              <thead className='thead-light'>
                <th>Name</th>
                <th>Reps</th>
                <th>Date</th>
                <th>Weigdddht</th>
                <th>Unit</th>
                <th/>
                <th/>
              </thead>
              <tbody>
                <tr className="data-row">
                  <td>Dead lift</td>
                  <td>10</td>
                  <td>8-8-2018</td>
                  <td>50</td>
                  <td>lbs</td>
                  <td className='update-button'>
                    <Button
                      className='btn btn-primary'
                      name='Update'
                    />
                  </td>
                  <td className='update-button'>
                    <Button
                      className='btn btn-danger'
                      name='Delete'
                    />
                  </td>
                </tr>
                <tr className="data-row">
                  <td>Dead lift</td>
                  <td>10</td>
                  <td>8-8-2018</td>
                  <td>50</td>
                  <td>lbs</td>
                  <td className='update-button'>
                    <Button
                      className='btn btn-primary'
                      name='Update'
                    />
                  </td>
                  <td className='update-button'>
                    <Button
                      className='btn btn-danger'
                      name='Delete'
                    />
                  </td>
                </tr>
                <tr className="data-row">
                  <td>Dead lift</td>
                  <td>10</td>
                  <td>8-8-2018</td>
                  <td>50</td>
                  <td>lbs</td>
                  <td className='update-button'>
                    <Button
                      className='btn btn-primary'
                      name='Update'
                    />
                  </td>
                  <td className='update-button'>
                    <Button
                      className='btn btn-danger'
                      name='Delete'
                    />
                  </td>
                </tr>
                <tr className="data-row">
                  <td>Dead lift</td>
                  <td>10</td>
                  <td>8-8-2018</td>
                  <td>50</td>
                  <td>lbs</td>
                  <td className='update-button'>
                    <Button
                      className='btn btn-primary'
                      name='Update'
                    />
                  </td>
                  <td className='update-button'>
                    <Button
                      className='btn btn-danger'
                      name='Delete'
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Table
