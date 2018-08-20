/**
 * Component to render the modal for updating workouts
 */

import React, { Component } from 'react'
import Button from './Button'
import '../styles/Modal.css'


class Modal extends Component {
  render() {
    return (
      <div>
        <Button
          type='button'
          className='btn btn-primary'
          dataToggle='modal'
          dataTarget='#exampleModal'
          name={this.props.name}
          handleClick={this.props.handleClick}
        />
        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Update Workout</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                 </button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal
